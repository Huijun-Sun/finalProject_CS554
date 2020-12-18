import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WelcomePage from './WelcomePage';
import CommentPage from './CommentPage';
import Login from './Login';
import App from './App';

const Router = () => (
  <BrowserRouter>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1000} classNames="fade">
            <Switch location={location}>
              <Route exact path = "/" component={Login} />
              <Route path="/welcome" component={WelcomePage} />
              <Route path="/comment" component={CommentPage} />
              <Route path="/mainpage" component={App} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </BrowserRouter>
);

export default Router;
