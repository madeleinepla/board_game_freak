import React from 'react';
import { connect } from 'react-redux';
import { requestList, updateList } from '../../actions/list_actions';
import ListForm from './list_form';

class EditListForm extends React.Component {
  componentDidMount() {
    this.props.requestList(this.props.match.params.listId)
  }

  render() {
    const { action, formType, list, history } = this.props;
    // debugger;

    if (!list) return null;
    return (
      <ListForm
        action={action}
        formType={formType}
        list={list} 
        history={history}
      />
    );
  }
}

// const mSTP = (state, ownProps) => ({
//   report: state.lists[ownProps.match.params.listId],
//   formType: 'Edit FreakList'
// })
const mSTP = (state, { match }) => {
  // debugger;
  return {
  list: state.entities.lists[match.params.listId],
  formType: 'Edit FreakList'
  }
}

const mDTP = dispatch => ({
  action: list => dispatch(updateList(list)),
  requestList: (listId) => dispatch(requestList(listId))
})

export default connect(mSTP, mDTP)(EditListForm);
