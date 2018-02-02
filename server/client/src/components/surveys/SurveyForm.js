// SurveyForm shous a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import _ from 'lodash';

const FIELDS = [
  {label: 'Survey Title', name: 'title'},
  {label: 'Subject Line', name: 'subject'},
  {label: 'Email Body', name: 'body'},
  {label: 'Recipint List', name: 'emails'}
]

class SurveyForm extends Component {
  renderField() {
    return _.map(FIELDS, ({ label, name }) => {
      return <Field key={name} component={SurveyField} type='text' label={label} name={name} />
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderField()}
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button type='submit' className='teal btn-flat right white-text'>
            NEXT
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {}

  if(!values.title){
    errors.title = 'You must provice a title'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);