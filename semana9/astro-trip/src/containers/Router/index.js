import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import home from "../homePage"
import LoginPage from "../LoginPage";
import listTripPage from "../listTripPage"
import createTripPage from "../createTripPage "
import applicationForm from "../applicationForm"
import tripDetails from "../tripDetails"



const routes = {
  root: "/",
  home:"/home",
  applicationForm:"/form",
  createTrip:"/create",
  listTrip:"/list",
  tripDetails:"/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
      <Route patch={routes.home}  component ={home} />
        <Route path={routes.root} component={LoginPage} />
        <Route patch={routes.applicationForm}  component ={applicationForm} />
        <Route patch={routes.createTrip}  component ={createTripPage} />
        <Route patch={routes.listTrip}  component ={listTripPage} />
        <Route patch={routes.tripDetails}  component ={tripDetails} />
      </Switch>
      
    </ConnectedRouter>
  );
}

export default Router;
