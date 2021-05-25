/* eslint-disable */

function ActivePerson(state = null, action) {
  switch (action.type) {
    case 'SELECTED':
      return action.payload;
  }

  return state;
}

export default ActivePerson;
