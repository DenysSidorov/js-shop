import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          Вместо статического представления того, что рендерит <Mouse>,
          используем рендер-проп для динамического определения, что надо отрендерить.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {

  // чтоб использовать с PureComponent функцию опишем тут, а потом заюзаем
  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }

  render() {
    return (
      <div>
        <h1>Перемещайте курсор мыши!</h1>

        {/* Example Bad*/}
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>

        {/* Example Good*/}
        <Mouse render={this.renderTheCat}/>

      </div>
    );
  }
}
