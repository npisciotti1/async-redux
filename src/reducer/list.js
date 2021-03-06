let validateList = (payload) => {
  if(!payload.title || !payload.id)
    return new Error('VALIDATION_ERROR: list must have title and id');
};

export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'LIST_CREATE':
      validateList(payload);
      return [...state, payload];
    case 'LIST_UPDATE':
      validateList(payload);
      return state.map( (item) =>
        item._id == payload._id ? payload : item );
    case 'LIST_DELETE':
      validateList(payload);
      return state.filter( (item) =>
        item._id !== payload._id );
    default:
      return state;
  }
};
