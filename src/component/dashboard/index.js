import React from 'react';
import {connect} from 'react-redux';

import * as listActions from '../../actions/list-actions';

class Dashboard extends React.Component {
  render(){
    return(
      <div className="dashboard">
        <h2>Dashboard</h2>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({lists: state.lists});

let mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
