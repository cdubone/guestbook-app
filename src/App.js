import './App.scss';
import {  Route, Switch, useRouteMatch, useLocation } from "react-router-dom";

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArrivalPage from './pages/ArrivalPage';
import HouseManualPage from './pages/HouseManualPage';
import AreaInformationPage from './pages/AreaInformationPage';
import RestaurantsPage from './pages/RestaurantsPage';
import ShoppingPage from './pages/ShoppingPage';
import DeparturePage from './pages/DeparturePage';
import AboutUsPage from './pages/AboutUsPage';
import DetailsPage from './pages/DetailsPage';

function App() {

  const location = useLocation();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/arrival" component={ArrivalPage} />
        <Route exact path="/house-manual" component={HouseManualPage} />
        <Route path="/area-information" component={AreaInformationPage} />
        <Route path="/places-to-eat" component={RestaurantsPage} />
        <Route path="/shopping" component={ShoppingPage} />
        <Route path="/departure" component={DeparturePage} />
        <Route path="/about-us" component={AboutUsPage} />
        {/* <Route path={`${location}/details/:id`} component={DetailsPage} /> */}
        <Route path={"/details/:id"} component={DetailsPage} />

        {/* <Route exact path="/"><HomePage /></Route>
        <Route exact path="/arrival"><ArrivalPage /></Route>
        <Route exact path="/house-manual"><HouseManualPage /></Route>
        <Route path={`${path}/:id`}><DetailsPage /></Route> */}

      </Switch>


      
     
    </>
  );
}

export default App;
