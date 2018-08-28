import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ListIndexItem extends Component {
  
  // checkImageURL(url) {
  //   let request = new XMLHttpRequest();
  //   let status;
  //   request.open("HEAD", url, true);
  //   request.send();
  //   // request.onload = function() {
  //   //   status = request.status;
  //   // }
  //   if (request.status == 403) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }  

  handleClick() {
    const { listing, createView, updateView } = this.props;
    this.props.receiveCar(listing);
    if (this.props.views[listing.vin]) {
      updateView({vin: listing.vin});
    } else {
      createView({vin: listing.vin});
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { listing, views } = this.props;
    const title = `${listing.year} ${listing.make} ${listing.model}`
    const location = `${listing.city}, ${listing.state}`;
    const img = listing.thumbnail_url ? listing.thumbnail_url : 'https://images.cars.com/supersized/ad/f0160af424e5c9acb35340be7a81a70f.jpg';
    const numViews = views[listing.vin] ? views[listing.vin].views : 0; 
    return (
      <li className="list-el">
        <Link className="list-item" to={`/cars/${listing.vin}`} onClick={() => this.handleClick()}>
        <img className="item-img" src={img} alt={title} />
        <div className="list-info-container">
          <div className="info-box1">
            <h2 className="listing-title">{title}</h2>
            <h2 className="listing-price">{listing.price}</h2>
          </div>
          <div className="info-box2">
            <h3 className="listing-mileage">{listing.mileage}</h3>
            <h3 className=""></h3>
          </div>
          <div className="info-box3">
            <h4 className="listing-location">{location}</h4>
            <div className="views">
              <i className="fas fa-eye"></i>
              {numViews} Views
            </div>
          </div>
        </div>
        </Link>
      </li>

    )
  }
}

export default ListIndexItem;