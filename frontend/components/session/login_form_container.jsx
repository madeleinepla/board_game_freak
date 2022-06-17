import React from "react"
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import SessionForm from './session_form'
import { login } from "../../actions/session_actions"

const mSTP = state => ({
  errors: state.errors,
  formType: 'login',
  navLink: <Link to="/signup">sign up instead</Link>,
})

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);