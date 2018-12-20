import React, { Component } from 'react';
import { connect } from 'react-redux'

import User from './components/User'
import {
  setName,
  setAge
} from './actions'

import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <User username={this.props.user.name} age={this.props.user.age}/>
        <button onClick={() => this.props.setName("KongRukSiam")}>Change Name</button>
        <button onClick={() => this.props.setAge(22)}>Change Age</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    user: state.employee,
    salary: state.salary
  })
}
export default connect(mapStateToProps, {setName, setAge})(App);
