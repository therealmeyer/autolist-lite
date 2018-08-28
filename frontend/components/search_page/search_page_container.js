import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchPage from './search_page';
import { fetchSearchResults } from '../../actions/search_actions';
import { receiveRange } from '../../actions/range_actions';

const mapStateToProps = (state) => {
  return {
    range: state.range,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: range => dispatch(fetchSearchResults(range)),
  receiveRange: range => dispatch(receiveRange(range))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);

