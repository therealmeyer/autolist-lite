import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CarDetail from './car_detail';

const mapStateToProps = (state) => {
  return {
    search: state.search,
    currentCar: state.currentCar,
    views: state.views
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CarDetail)
);