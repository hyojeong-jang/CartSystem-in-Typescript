import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from '../App'
import Item from '../components/Item'
import Discount from '../components/Discount'

const Root: React.FC = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/item' exact component={Item} />
      <Route path='/discount' exact component={Discount} />
    </Switch>
  </Router>
);

export default Root
