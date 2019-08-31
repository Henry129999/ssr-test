const org = (state = {
  company: [],
}, action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      return {
        ...state,
        company: action.data,
      };
    default:
      return state
  }
};

export default org;