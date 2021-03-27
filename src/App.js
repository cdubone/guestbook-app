import './App.scss';
import {  Route } from "react-router-dom";

import Header from './components/Header';
import HomePage from './components/HomePage';
import ArrivalPage from './components/ArrivalPage';
import HouseManualPage from './components/HouseManualPage';

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/arrival" component={ArrivalPage} />
      <Route path="/house-manual" component={HouseManualPage} />
    </>
  );
}

export default App;
