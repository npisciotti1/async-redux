import React from 'react';
import {connect} from 'react-redux';
import ListForm from '../list-form';
import * as util from '../../lib/util';
import * as listActions from '../../action/list-action';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {listFormError: null};
  }

  handleListFormComplete(list) {
    this.props.listCreate(list)
    .catch(err => {
      console.log('listFormError:', err);
      this.setState({listFormError: err});
    });
  }

  render(){
    return(
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ListForm
        buttonText='create list'
        onComplete={this.props.listCreate}

        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({lists: state.lists});

let mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
