import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";



import Home from "../Home"
import LoginPage from "../LoginPage";
import ListTripPage from "../ListTripPage"
import CreateTripPage from "../CreateTripPage"
import ApplicationForm from "../ApplicationForm"
import TripDetails from "../TripDetails"
import { connect } from "react-redux";



const routes = {
  root: "/",
  // home:"/home",
  applicationForm:"/applicationForm",
  createTrip:"/createTrip",
  listTrip:"/listTrip",
  tripDetails:"/tripDetails",
  login:"/login"

  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
      <Route exact path={routes.root}  component ={Home} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.applicationForm}  component ={ApplicationForm} />
        <Route exact path={routes.createTrip}  component ={CreateTripPage} />
        <Route exact path={routes.listTrip}  component ={ListTripPage} />
        <Route exact path={routes.tripDetails}  component ={TripDetails} />
      </Switch>
      
    </ConnectedRouter>
  );
}

export default connect() (Router);
