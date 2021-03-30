import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from './views/LoginView';
import MainView from './views/MainView';
import Header from './containers/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import 404

import error404 from './views/404';
import infoReserv from './views/infoReserv';
import Card from './views/Card';
import Success from './views/successful'

// import images




function App() {
  return (
    <Router>
      
        {/* <Header>
          <MainView />
        </Header> */}
        <Header/>
        <Switch>
        <Route exact path="/" component={MainView} />
        <Route exact path="/reservation" component={infoReserv}/>
        <Route exact path="/card" component={Card} />
        <Route exact path="/successful" component={Success} />
        {/* <AuthRoute exact path="/login" component={login} />
        <AuthRoute exact path="/register" component={signup} />
        <AuthRoute exact path="/addrestaurant" component={addRestaurant} />
        <UserRoute exact path="/order/:restName" component={restaurant} />
        <SellerRoute
          exact
          path="/seller/dashboard"
          component={sellerDash}
        />
        <UserRoute exact path="/cart" component={cart} />
        <UserRoute exact path="/orders" component={orders} />
        <SellerRoute exact path="/seller/orders" component={orders} /> */}
        <Route component={error404} />
        </Switch>

        
      
    </Router>
  );
}

export default App;
