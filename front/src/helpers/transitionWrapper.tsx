import React, {FC} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

/**
 * Migration from 1 to latest version
 * https://github.com/reactjs/react-transition-group/blob/master/Migration.md
 * */

interface ITransitionWrapper {
  children?: any;
  transitionEnterTimeout: any;
  transitionLeaveTimeout: any;
  transitionAppearTimeout: any;
  transitionAppear: any;
  time: any;
}

interface Document {
  documentMode?: any;
}

const TransitionWrapper = (props: ITransitionWrapper) => {
  if (window.document && (window.document as Document).documentMode) {
    return props.children || null;
  }
  if (props.children === null || props.children === false) {
    return null;
  }
  return (
    <TransitionGroup component='span'>
      <CSSTransition
        classNames='rdAppear'
        timeout={{
          enter: props.transitionEnterTimeout || props.time || 150,
          exit: props.transitionLeaveTimeout || props.time || 150,
          appear: props.transitionAppearTimeout || props.time || 150
        }}
        appear={props.transitionAppear !== undefined ? props.transitionAppear : true}
      >
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;
console.log(2);
