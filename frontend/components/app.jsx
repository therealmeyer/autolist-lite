import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav/nav";
import SearchPageContainer from "./search_page/search_page_container";
import ListingsContainer from "./listings_page/listings_container";
import CarDetailContainer from "./car_detail/car_detail_container";

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={SearchPageContainer} />
      <Route
        path="/listings"
        component={ListingsContainer}
      />
      <Route path="/cars/:vin" component={CarDetailContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
