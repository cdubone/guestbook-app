import './App.scss';
import {  Route } from "react-router-dom";

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArrivalPage from './pages/ArrivalPage';
import HouseManualPage from './pages/HouseManualPage';
import AreaInformationPage from './pages/AreaInformationPage';
import RestaurantsPage from './pages/RestaurantsPage';

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/arrival" component={ArrivalPage} />
      <Route path="/house-manual" component={HouseManualPage} />
      <Route path="/area-information" component={AreaInformationPage} />
      <Route path="/places-to-eat" component={RestaurantsPage} />
    </>
  );
}

export default App;
