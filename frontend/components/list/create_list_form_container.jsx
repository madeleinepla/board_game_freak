import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import ListForm from './list_form';

const mSTP = state => ({
  list: {
    title: '',
    body: ''
  },
  formType: 'Create FreakList'
})

const mDTP = dispatch => ({
  action: list => dispatch(createList(list))
})

export default connect(mSTP, mDTP)(ListForm);