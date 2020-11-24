import { connect } from 'react-redux';
import { BUTTON_CLICK } from './actions/counterActions';
import './App.css';

function App(props) {
  const handleButtonClick = () => {
    // DISPATCHES ACTION, CALLING REDUCER
    props.dispatch(BUTTON_CLICK);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {props.count}</p>
      <button onClick={handleButtonClick}>
        +
      </button>
    </div>
  );
}

// PASSES REDUX STATE AS PROPS TO APP COMPONENT
function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(App);
