import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Event from '../pages/Event';
import Events from '../pages/Events';
import Images from '../pages/Images';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Events} isClosed={false} />
      <MyRoute exact path="/event/:id/edit" component={Event} isClosed />
      <MyRoute exact path="/event/" component={Event} isClosed />
      <MyRoute exact path="/images/:id" component={Images} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
