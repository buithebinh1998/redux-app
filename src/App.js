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
          <button onClick={this.props.onFilterUser}>Filter active users</button>
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
    onCreateUser: () => dispatch({type: 'CREATE_USER', payload: {id: '5', name: 'Trinh', email: 'trinh.nguyen@pycogroup.com', active: true}}),
    onRemoveUser: () => dispatch({type: 'REMOVE_USER_BY_ID', payload: {id: '2'}}),
    onFilterUser: () => dispatch({type: 'FILTER_USER', payload: {active: true}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
