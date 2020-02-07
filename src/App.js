import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import ToursAndTravels from './screens/ToursAndTravels';
import Trekking from './screens/Trekking';
import ContactUs from './screens/Contact_Us';
import Feedback from './screens/Feedback';
import K2 from './screens/Expeditions/K2';
import NangaParbat from './screens/Expeditions/NangaParbat';
import BoardPeak from './screens/Expeditions/BoardPeak';
import Gasherbrum_I from './screens/Expeditions/Gasherbrum_I';
import Gasherbrum_II from './screens/Expeditions/Gasherbrum_II';
import KhunjerabTop from './screens/Expeditions/KhunjerabTop';
import TourMagzine from './screens/TourMagzine';
import Footer from './Common/Footer';
import Header from './Common/Header';
import Models from './Common/Models';

function App() {


  return (
    <Router >
      <Fragment>
        <Header />
        <Switch  >
          <Route exact path='/' component={Home} />
          <Route  path = '/toursAndTravels' component={ToursAndTravels}/>  
          <Route  path = '/trekking' component={Trekking}/>  
          <Route  path = '/contactUs' component={ContactUs}/>  
          <Route  path = '/feedback' component={Feedback}/>  
          <Route  path = '/tourmagzine' component={TourMagzine}/>  
          <Route  path = '/k2' component={K2}/>  
          <Route  path = '/nangaparbat' component={NangaParbat} />  
          <Route  path = '/boardpeak' component={BoardPeak}/>  
          <Route  path = '/gasherbrum_I' component={Gasherbrum_I}/>  
          <Route  path = '/gasherbrum_II' component={Gasherbrum_II}/>  
          <Route  path = '/khunjerabtop' component={KhunjerabTop}/>  
          <Route  path = '/models' component={Models}/>  
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
