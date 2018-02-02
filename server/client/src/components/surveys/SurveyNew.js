// SurveyNews shows SurveyForm and SurveyReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm'

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <h1>SurveyNew</h1>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;