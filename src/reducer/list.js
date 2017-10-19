export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'LIST_CREATE':
      return [...state, payload];
    case 'LIST_UPDATE':
      return state.map( (item) =>
        item.id == payload.id ? payload : item );
    case 'LIST_DELETE':
      return state.filter( (item) =>
        item.id !== payload.id );
    default:
      return state;
  }
};
