import React from "react"
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import SessionForm from './session_form'
import { signup } from "../../actions/session_actions"

const mSTP = state => ({
  errors: state.errors,
  formType: 'signup',
  navLink: <Link to="/login">Sign in</Link>,
})

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm);