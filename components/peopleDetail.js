import React, { Component } from 'react';
import { connect } from 'react-redux';

class PeopleDetail extends Component {
  render() {
    if (!this.props.person) {
      return <div>sorry</div>;
    }

    return (
      <div>
        <h3>This is {this.props.person.name}'s imformation</h3>
        <div>Name : {this.props.person.name}</div>
        <div>Age : {this.props.person.age}</div>
      </div>
    );
  }
}

function peopleListToProps(state) {
  console.log(state);
  return {
    person: state.reducer2,
  };
}

export default connect(peopleListToProps)(PeopleDetail);
