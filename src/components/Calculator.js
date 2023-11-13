import React from 'react';
import { connect } from 'react-redux';
import { setInput, calculateResult, clearInput } from '../actions';
import './Calculator.css';

class Calculator extends React.Component {
  handleButtonClick = (value) => {
    this.props.setInput(value);
  };

  handleCalculate = () => {
    this.props.calculateResult();
  };

  handleClearInput = () => {
    this.props.clearInput();
  };

  render() {
    return (
        <div className='main'>
          <div className='line'>
            <input type="text" value={this.props.input} readOnly />
          </div>
          <div className='line'>
            <button onClick={() => this.handleButtonClick('1')}>1</button>
            <button onClick={() => this.handleButtonClick('2')}>2</button>
            <button onClick={() => this.handleButtonClick('3')}>3</button>
            <button onClick={() => this.handleButtonClick('+')}>+</button>
            <button onClick={this.handleClearInput}>C</button>
          </div>
          <div className='line'>
            <button onClick={() => this.handleButtonClick('4')}>4</button>
            <button onClick={() => this.handleButtonClick('5')}>5</button>
            <button onClick={() => this.handleButtonClick('6')}>6</button>
            <button onClick={() => this.handleButtonClick('-')}>-</button>
          </div>
          <div className='line'>
            <button onClick={() => this.handleButtonClick('7')}>7</button>
            <button onClick={() => this.handleButtonClick('8')}>8</button>
            <button onClick={() => this.handleButtonClick('9')}>9</button>
            <button onClick={() => this.handleButtonClick('*')}>*</button>
          </div>
          <div className='line'>
            <button onClick={() => this.handleButtonClick('0')}>0</button>
            <button onClick={() => this.handleButtonClick('.')}>.</button>
            <button onClick={this.handleCalculate}>=</button>
            <button onClick={() => this.handleButtonClick('/')}>/</button>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input,
  };
};

export default connect(mapStateToProps, { setInput, calculateResult, clearInput })(Calculator);
