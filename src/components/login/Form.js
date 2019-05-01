import React, { Component } from 'react';
import Button from '../Button'

class Form extends Component {

  render() {
    const {inputs} = this.props;
    const styles = {
      animationName: 'slide',
      animationDuration: '0.5s',
      animationIterationCount: 1,
    }
    return (
      <form className="login-form">
       {inputs && inputs.map((input, index)=>{
         return <input key={index} name={input} placeholder={input} style={styles}></input>
       })}
   
      <Button>{this.props.buttonWords}</Button>
      </form>
    );
  }
}

export default Form;