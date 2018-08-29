import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchPage from './search_page';
import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: range => dispatch(fetchSearchResults(range)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);

