import ListIndex from './list_index';
import { connect } from 'react-redux';
import { requestLists } from '../../actions/list_actions';
// import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = (state, { match }) => {
  let lists = Object.values(state.entities.lists)
  let orderBy = match.path.split("/")
  orderBy = orderBy[orderBy.length - 1]

  if (orderBy === 'hot') {
    orderBy = "Hot"
  } else if (orderBy === 'recent') {
    orderBy = "Recent"
    lists = lists.sort(
      (a, b) => {
        a = new Date(a.created_at)
        b = new Date(b.created_at)
        return Number(b) - Number(a)
      }
    )
  } else if (orderBy === 'mylists') {
    orderBy = "My"
    lists = lists.filter((list) => {
      return list.author_id === state.session.id
    })
  }

  // debugger
  return {
    lists,
    orderBy
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestLists: () => dispatch(requestLists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
