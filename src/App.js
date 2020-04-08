import React, { Component } from 'react';
import User from './components/User/User'
import {connect} from 'react-redux'
class App extends Component {
  render(){
    const loadUser = this.props.users.map(item => {
      return(
        <User id={item.id} name={item.name} email={item.email} active={item.active}/>
      )
    })

    return (
        <div className="App">
          {loadUser}
          <button onClick={this.props.onCreateUser}>Add a new user</button>
          <button onClick={this.props.onRemoveUser}>Remove an user</button>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    users: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onCreateUser: () => dispatch({type: 'CREATE_USER', payload: {id: '3', name: 'Trinh', email: 'trinh.nguyen@pycogroup.com', active: true}}),
    onRemoveUser: () => dispatch({type: 'REMOVE_USER_BY_ID', payload: {id: '2'}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
