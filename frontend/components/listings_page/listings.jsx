import React, { Component } from "react";
import queryString from 'query-string';
import ListIndexItem from './list_index_item';
import { Link } from 'react-router-dom';

class Listings extends Component {
  constructor(props) {
    super(props);
    const values = queryString.parse(this.props.location.search)
    this.state = {
      min: values.min,
      max: values.max,
      page: values.page,
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if (!values.max || !values.min || !values.page) {
      window.location = "/";
    } else {
      this.props.fetchSearch(values).then(() => this.setState({loading: false}));
      this.props.fetchViews();
    }
  }

  componentWillReceiveProps(nextProps) {
    const values = queryString.parse(this.props.location.search);
    const nextVals = queryString.parse(nextProps.location.search);
    if (nextVals.min !== values.min || nextVals.max !== values.max || nextVals.page !== values.page) {
      this.setState({loading: true, min: nextVals.min, max: nextVals.max});
      this.props.fetchSearch(nextVals).then(() => {
        this.setState({loading: false}); 
        window.scrollTo(0,0);
      });
      this.props.fetchViews();
      return true;
    }
    return false;
  }

  handleSubmit(e) {
    const { min, max } = this.state;
    this.props.fetchSearch({min, max, page: 1});
    this.props.history.push(`/listings?page=${1}&min=${min}&max=${max}`);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    if (Object.keys(this.props.search).length === 0) {
      return <div className="loader"></div>;
    }
    else {
      const results = this.props.search.total_count_formatted + " Results";
      const values = queryString.parse(this.props.location.search);
      const currentPage = values.page;
      const lastPage = 249;
      const prevElem = values.page === "1" ? 
        (<div className="prev-nolink">
          <i className="fas fa-angle-left"></i>
          Previous
        </div>) : (<Link to={`/listings?page=${parseInt(currentPage) - 1}&min=${values.min}&max=${values.max}`}>
          <div className="prev-link">
            <i className="fas fa-angle-left"></i>
            Previous
          </div>
        </Link>);
      const nextElem = values.page === lastPage.toString() ? 
          <div className="next-nolink">
            Next
            <i className="fas fa-angle-right" />
          </div> : <Link to={`/listings?page=${parseInt(currentPage) + 1}&min=${values.min}&max=${values.max}`}>
            <div className="next-link">
              Next
              <i className="fas fa-angle-right" />
            </div>
          </Link>;
      
      return (
        <div className="bg-listings">
          <div className="gray-margin"></div>
          <div className="main-listings">
            <div className="search-filters-container">
              <h1 className="search-filters-title">Search Filters</h1>
              <div className="price-range-container">
                <div className="price-range-box">
                  <input
                    onChange={this.update('min')}
                    className="price-input"
                    type="number"
                    min="0"
                    value={this.state.min}
                  />
                  <h5 className="min-search">Min ($)</h5>
                </div>
                <div className="price-range-box">
                  <input
                    onChange={this.update('max')}
                    className="price-input"
                    type="number"
                    min="0"
                    value={this.state.max}
                  />
                  <h5 className="max-search">Max ($)</h5>
                </div>
              </div>
              <button onClick={this.handleSubmit} className="search-range-button">Search</button>
            </div>
            <div className="listings-container">
              <h2 className="results-title">{results}</h2>
              {this.state.loading ? (<div className="loader"></div>) :
              (<ul className="listings-index-list">
                {this.props.search.records.map(listing => (
                  <ListIndexItem
                  key={listing.id} listing={listing}
                  receiveCar={this.props.receiveCar}
                  createView={this.props.createView}
                  updateView={this.props.updateView}
                  views={this.props.views}
                  />
                ))}
              </ul>)}
              <div className="page-container">
                {prevElem}
                <div className="current-page">{currentPage}</div>
                {parseInt(values.page) > lastPage - 3 ? (<div></div>) : (
                <div className="page-wrapper">
                <Link to={`/listings?page=${parseInt(currentPage)+1}&min=${values.min}&max=${values.max}`}>
                  <div className="next-page">{parseInt(currentPage)+1}</div>
                </Link>
                <Link to={`/listings?page=${parseInt(currentPage) + 2}&min=${values.min}&max=${values.max}`}>
                  <div className="next-page">{parseInt(currentPage)+2}</div>
                </Link>
                  <div className="elipse">...</div>
                <Link to={`/listings?page=${lastPage}&min=${values.min}&max=${values.max}`}>
                  <div className="last-page">{lastPage}</div>
                </Link>
                </div>
                )}
                {nextElem}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Listings;