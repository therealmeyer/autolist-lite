import * as ViewAPIUtil from '../util/views_api_util';

export const RECEIVE_VIEWS = "RECEIVE_VIEWS";

export const RECEIVE_VIEW = "RECEIVE_VIEW";

export const receiveViews = views => ({
  type: RECEIVE_VIEWS,
  views
});

export const receiveView = view => ({
  type: RECEIVE_VIEW,
  view: view.car
});

export const fetchViews = () => dispatch => (
  ViewAPIUtil.fetchViews().then(views => dispatch(receiveViews(views)))
);

export const createView = car => dispatch => (
  ViewAPIUtil.createView(car).then(view => dispatch(receiveView(view)))
);

export const updateView = car => dispatch => (
  ViewAPIUtil.updateView(car).then(view => dispatch(receiveView(view)))
);

