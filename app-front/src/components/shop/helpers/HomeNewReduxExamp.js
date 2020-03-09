import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    increment,
    incrementSync,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../../reducers/counterRRR'
const Home = props => (
    <div>

        <h1 style={{fontSize: '3.0rem'}}>Home</h1>
        <h1 onClick={props.doDo} style={{cursor: 'pointer'}}>MY BTN</h1>
        <h1 onClick={props.incrementSync} style={{cursor: 'pointer'}}>SYNC PLAIN</h1>
        <p>Count: {props.count}</p>

        <p>
            <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </p>

        <p>
            <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
            <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
        </p>

        <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
    </div>
)


// const mapStateToProps = (state) => {
//     return {
//         tasks: state.tasks
//     };
// };
const mapStateToProps = (state, ownProps) => {
    //console.log(state, 'state'); // state
    //console.log(ownProps, 'ownProps'); // ownProps
    return {
        count: state.counter.count,
        isIncrementing: state.counter.isIncrementing,
        isDecrementing: state.counter.isDecrementing
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         doDo: (i) => dispatch(toggle(i))
//     };
//
// };
const pushTo = () => push('/about-us');

const mapDispatchToProps = (dispatch, ownProps) => {
    //console.log(ownProps, 'ownPropsDispatch');
    return bindActionCreators({
        doDo: (i, c, v) => incrementSync(),
        increment,
        incrementSync,
        incrementAsync,
        decrement,
        decrementAsync,
        changePage: pushTo
    } ,   dispatch)
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);