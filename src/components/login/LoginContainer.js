import React, { Component } from 'react';
import Form from './Form';

class LoginContainer extends Component {
  state = {
    position: '-5%',
   
  }
  componentDidMount = () =>{
    this.setState({
      position: this.props.position,
    })
  }

  componentDidUpdate = () =>{
    if(this.props.position !== this.state.position){
      this.setState({
        position: this.props.position
      })
    }
  }
  render() {
    return (
      <div className="login-container" style={{right: `${this.state.position}`}}>
      <h2>{this.props.title}</h2>
        <Form buttonWords = {this.props.title} inputs={this.props.inputs}/>
      </div>
    );
  }
}

export default LoginContainer;