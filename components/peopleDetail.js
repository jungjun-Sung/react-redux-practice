import React, { Component } from 'react';
import { connect } from 'react-redux';

class PeopleDetail extends Component {
  render() {
    if (!this.props.person) {
      <div>sorry</div>;
    }

    return (
      <div>
        <h3>This is {this.props.person.name}'s information</h3>
        <div>{this.props.person.name}</div>
        <div>{this.props.person.age}</div>
      </div>
    );ㄴ
  }
}

function peopleListToProps(state) {
  console.log(state);
  return {
    person: state.reducer2,
  };
}

export default connect(peopleListToProps)(PeopleDetail);
