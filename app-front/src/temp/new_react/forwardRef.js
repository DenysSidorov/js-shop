import React from 'react';


const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));
// Теперь реф будет указывать непосредственно на DOM-узел button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

  

// так как ref это не props - то передать его по иерархии в HOC нужно с forwardRef:
const ref2 = React.createRef();
// Компонент FancyButton, который мы импортировали — это HOC LogProps.
// Несмотря на то, что рендерят они одно и то же,
// реф в данном случае будет указывать на LogProps, а не на сам FancyButton!
// Это значит, что мы не сможем, например, вызвать ref.current.focus()
<FancyButton
  label="Click Me"
  handleClick={handleClick}
  forwardedRef={ref2}
/>;

function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // Передаём в качестве рефа проп "forwardedRef"
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Обратите внимание, что React.forwardRef передает "ref" вторым аргументом.
  // Мы можем передать его дальше как проп, например, "forwardedRef",
  // а потом привязать его к компоненту.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}
