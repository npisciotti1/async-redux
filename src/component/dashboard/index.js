import React from 'react';
import {connect} from 'react-redux';

import * as listActions from '../../action/list-action';

import ListForm from '../list-form';

class Dashboard extends React.Component {
  render(){
    return(
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ListForm></ListForm>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({lists: state.lists});

let mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
