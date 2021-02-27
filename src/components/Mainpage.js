import React, { Component } from "react";
import LeftContentPanel from "./LeftContentPanel";
import SharesPage from "./SharesPage";
import { Switch, Route } from "react-router-dom";
import Deneme from "./Deneme";

export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-2">
              <LeftContentPanel />
            </div>
            <div className="col-md-1" id="hr">
              <hr></hr>
            </div>
            <div className="col-md-6">
              <Switch>
                <Route path="/sharespage">
                  <SharesPage />
                </Route>
                <Route path="/deneme">
                  <Deneme />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
