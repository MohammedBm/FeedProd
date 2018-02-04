import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import formFields from './formFields'
import * as actions from '../../actions'
import { withRouter} from 'react-router-dom'

class SurveyFormReview extends Component {
  reviewFields(){
    return  _.map(formFields, field => {
      return(
        <div key={field.name}>
          <label>{field.label}</label>
          <div>
            {this.props.formValues[field.name]}
          </div>
        </div>
      )
    })
  }

  render() {
    const { onCancel, formValues, submitSurvey, history } = this.props
    return (
      <div>
        <h5>Please confrim your entries</h5>
        {this.reviewFields()}

        <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
          Back
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className='green btn-flat right white-text'
        >
          Send Survey
          <i className='material-icons right'>email</i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))