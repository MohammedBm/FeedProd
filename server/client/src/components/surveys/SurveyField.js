import React, { Component } from 'react';

class SurveyField extends Component {
  render() {
    const { input, label } = this.props
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
}

export default SurveyField;