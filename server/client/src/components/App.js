import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landings = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Landings} />
          <Route exact  path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;