const user = (state = {
  name: 'huang'
}, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.data,
      };
    default:
      return state
  }
};

export default user;
