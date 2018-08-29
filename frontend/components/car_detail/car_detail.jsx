import React, { Component } from "react";


class CarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: this.props.currentCar.photo_urls ? this.getImgUrl(this.props.currentCar.photo_urls[0]) : null,
      currentImgNum: 0
    };
  }

  componentDidMount() {
    if (!this.props.currentCar.id) {
      this.props.history.goBack();
    }
  }

  getImgUrl(url) {
    const splitted = url.split("http");
    // console.log(splitted);
    const last = splitted[splitted.length-1];
    return "http" + last;
  }

  changeImg(add) {
    const { currentCar } = this.props;
    if (add) {
      this.state.currentImgNum === currentCar.photo_urls.length -1 ? 
        this.setState({
          currentImg: this.getImgUrl(currentCar.photo_urls[0]),
          currentImgNum: 0
        })
      : 
        this.setState({
          currentImg: this.getImgUrl(currentCar.photo_urls[this.state.currentImgNum+1]),
          currentImgNum: this.state.currentImgNum + 1
        });
    } else {
      this.state.currentImgNum === 0 ? 
        this.setState({ 
          currentImg: this.getImgUrl(currentCar.photo_urls[currentCar.photo_urls.length-1]),
          currentImgNum: currentCar.photo_urls.length - 1
        }) 
        :
        this.setState({
          currentImg: this.getImgUrl(currentCar.photo_urls[this.state.currentImgNum-1]),
          currentImgNum: this.state.currentImgNum - 1
        });
    }
  }

  render() {
    if (!this.props.currentCar.id) {
      return <div className="loader"></div>
    }
    const { currentCar } = this.props;
    const title = `${currentCar.year} ${currentCar.make} ${currentCar.model}`;
    const location = `${currentCar.city}, ${currentCar.state}`;
    // console.log(this.state);
    return <div className="bg-detail">
        <div className="gray-margin" />
        <div className="back-to-search">
          <button onClick={() => this.props.history.goBack()}>
            <i className="fas fa-chevron-left" />
            Back to Search
          </button>
        </div>
        <div className="main-detail">
          <div className="detail-container">
            <div className="img-carousel" style={{ backgroundImage: `url(${this.state.currentImg})` }}>
              <i onClick={() => this.changeImg(false)} className="fas fa-arrow-circle-left" />
              <i onClick={() => this.changeImg(true)} className="fas fa-arrow-circle-right" />
              <div className="img-nums">
                <i className="fas fa-camera-retro" />
                <div>{this.state.currentImgNum + 1} of</div>
                <div className="length-photos">
                  {currentCar.photo_urls.length}
                </div>
              </div>
            </div>
            <div className="car-detail-info">
              <div className="car-main-wrapper">
                <div className="car-title">{title}</div>
                <div className="car-price">{currentCar.price}</div>
                <div className="car-mileage">{currentCar.mileage}</div>
                <div className="car-location">{location}</div>
                <div className="car-views">
                  <i className="fas fa-eye"></i>
                  {this.props.views[currentCar.vin] ? this.props.views[currentCar.vin].views : 0}
                </div>
                <div className="car-basic-info">
                  <h2 className="basic-info">Basic Info</h2>
                  <div className="info-line-container">
                    <div className="">Body Style</div>
                    <div>{currentCar.body_style}</div>
                  </div>
                  <div className="info-line-container">
                    <div className="">Color</div>
                    <div>{currentCar.display_color}</div>
                  </div>
                  <div className="info-line-container">
                    <div className="">Trim</div>
                    <div>{currentCar.trim}</div>
                  </div>
                  <div className="info-line-container">
                    <div className="">Dealer</div>
                    <div>{currentCar.dealer_name}</div>
                  </div>
                  <div className="info-line-container">
                    <div className="">VIN</div>
                    <div>{currentCar.vin}</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>;
  }
}

export default CarDetail;