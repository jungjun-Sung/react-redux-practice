function ActivePerson(person) {
  return {
    type: 'SELECTED',
    payload: person,
  };
}
export default ActivePerson;
