import ListIndex from './list_index';
import { connect } from 'react-redux';
import { requestLists } from '../../actions/list_actions';

const mapStateToProps = (state) => {
  return {
    lists: Object.values(state.entities.lists)
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestLists: () => dispatch(requestLists()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
