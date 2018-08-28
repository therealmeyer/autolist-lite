import React, { Component } from "react";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: "0",
      max: "100000",
      page: "1"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    // e.preventDefault();
    // this.props.fetchSearch(this.state);
    // this.props.receiveRange({min: this.state.min, max: this.state.max});
    const { min, max, page } = this.state;
    this.props.history.push(`/listings?page=${page}&min=${min}&max=${max}`);
  }

  render() {
    return <div className="main">
        <div className="search-container">
          <div className="text-container">
            <h1 className="text-header">Find Your Dream Car</h1>
            <h3 className="sub-text-header">
              Search multiple new & used car websites in one easy search
            </h3>
          </div>
          <div className="search-box">
            <h4 className="search-price">
              <i className="fas fa-dollar-sign dollar-sign"></i>
              Search By Price
            </h4>
            <div className="price-container">
              <div className="price-box">
                <input 
                  onChange={this.update('min')}
                  className="price-input" 
                  type="number"
                  min="0"
                  value={this.state.min}
                />
                <h5 className="min">Min</h5>
              </div>
              <div className="price-box">
                <input
                  onChange={this.update('max')}
                  className="price-input" 
                  type="number"
                  min="0"
                  value={this.state.max}
                />
                <h5 className="max">Max</h5>
              </div>
            </div>
            <button onClick={this.handleSubmit} className="search-button">Search</button>
          </div>
        </div>
        <div className="news-articles">

        </div>
      </div>;
  }
}

export default SearchPage;

