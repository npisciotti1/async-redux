import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.list ? props.list : {title: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillRecieveProps(props) {
    if(props.list)
      this.setState(props.list);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }
}
