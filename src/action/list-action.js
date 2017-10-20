
const superagent = require('superagent');

export const listCreate = (list) => ({
  type: 'LIST_CREATE',
  payload: list,
});

export const listUpdate = (list) => ({
  type: 'LIST_UPDATE',
  payload: list,
});

export const listDelete = (list) => ({
  type: 'LIST_DELETE',
  payload: list,
});

//async actions

export const listCreateRequest = (list) => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/lists`)
  .send(list)
  .then( res => {
    dispatch(listCreate(res.body));
    return res;
  });
};

export const listUpdateRequest = (list) => (dispatch, getState) => {
  return superagent.put(`${__API_URL__}/api/lists/${list._id}`)
  .send(list)
  .then( res => {
    dispatch(listUpdate(res.body));
    return res;
  });
};
