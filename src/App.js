import './App.scss';
import {  Route } from "react-router-dom";

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
  return (
    <>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/arrival" component={ArrivalPage} />
      <Route path="/house-manual" component={HouseManualPage} />
      <Route path="/area-information" component={AreaInformationPage} />
      <Route path="/places-to-eat" component={RestaurantsPage} />
      <Route path="/shopping" component={ShoppingPage} />
      <Route path="/departure" component={DeparturePage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/:id" component={DetailsPage} />
    </>
  );
}

export default App;
