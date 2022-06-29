// import { connect } from 'react-redux';
// import ListItemShow from './list_item_show';
// import { requestListItem } from '../../actions/list_item_actions';
// import { selectListItem } from '../../reducers/selectors';

// const mSTP = (state, { match }) => {
//   debugger;
//   const listItemId = parseInt(match.params.listItemId);
//   const listItem = selectListItem(state.entities, listItemId);
//   return {
//     listItemId,
//     listItem,
//   }
// }

// const mDTP = dispatch => ({
//   requestListItem: (listItemId) => dispatch(requestListItem(listItemId)),
// })

// export default connect(mSTP, mDTP)(ListItemShow);