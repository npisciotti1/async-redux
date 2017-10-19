let validateList = (payload) => {
  if(!payload.title)
    return new Error('VALIDATION_ERROR: list must have title');
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
        item.id == payload.id ? payload : item );
    case 'LIST_DELETE':
      validateList(payload);
      return state.filter( (item) =>
        item.id !== payload.id );
    default:
      return state;
  }
};
