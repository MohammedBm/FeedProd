import React, { Component } from 'react';

class SurveyField extends Component {
  render() {
    const { input, label, meta: { error, touched } } = this.props
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        {touched && error}
      </div>
    );
  }
}

export default SurveyField;