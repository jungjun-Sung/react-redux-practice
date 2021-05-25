import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActivePerson from '../action/index';

class PeopelList extends Component {
  renderList() {
    return this.props.people.map((person, i) => {
      return (
        <button
          onClick={() => {
            this.props.selectPerson(person);
          }}
          key={i}
        >
          Name: {person.name}
          <br />
          Age: {person.age}
        </button>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

function peopleListToProps(state) {
  console.log(state);
  return {
    people: state.reducer,
  };
}

function selectedPerson(dispatch) {
  return bindActionCreators({ selectPerson: ActivePerson }, dispatch);
}

export default connect(peopleListToProps, selectedPerson)(PeopelList);
