import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Listings from './listings';
import { fetchSearchResults } from '../../actions/search_actions';
import { receiveCar } from '../../actions/current_car_actions';
import { fetchViews, createView, updateView } from '../../actions/views_actions';

const mapStateToProps = (state) => {
  return {
    search: state.search,
    views: state.views
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: range => dispatch(fetchSearchResults(range)),
  receiveCar: car => dispatch(receiveCar(car)),
  fetchViews: () => dispatch(fetchViews()),
  createView: view => dispatch(createView(view)),
  updateView: view => dispatch(updateView(view))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Listings)
);
