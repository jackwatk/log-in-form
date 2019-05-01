import React, { Component } from 'react';
import LoginInfo from './LoginInfo';
import LoginContainer from './LoginContainer';

class UserContainer extends Component {
  state = {
    right: "-30%",
    type: "log in",
    logInInputs: ['Username', 'Password'],
    signUpInputs: ['Email', 'Choose Password', 'Repeat Password', 'Name', 'Contact Number'],
    inputs:[],
  }
  componentDidMount=()=>{
    this.setState({
      inputs: [...this.state.logInInputs]
    })
  }
  moveContainer = () => {
    const { right } = this.state;
    right === "-30%" ? this.setState({right: "33%", type: "sign up", inputs: [...this.state.signUpInputs] }) : this.setState({right: "-30%",type: "log in", inputs: [...this.state.logInInputs]})
  }
  
    
  render() {
    return (
      <div className="user-container">
        <LoginInfo title={"Dont Have an account?"} moveContainer={this.moveContainer} type={"Sign Up"}/>
        <LoginContainer position={this.state.right} title={this.state.type} inputs={this.state.inputs}/>
        <LoginInfo title={"I Have an account!"} moveContainer={this.moveContainer} type={"Log In"}/>

      </div>
    );
  }
}

export default UserContainer;