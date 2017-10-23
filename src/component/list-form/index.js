import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.list ? props.list : {title: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
}
