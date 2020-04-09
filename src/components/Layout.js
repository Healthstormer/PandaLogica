import React from 'react';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import getReactComponent from '../layoutist/getReactComponent';

const Layout = ({ children, route }) => {
  console.log(route);
  const reactComponent = getReactComponent(children, route.route);
  console.log(reactComponent);
  return (
    <div>
      <Helmet title="Pandalogica" />
      {reactComponent}
    </div>
)}

export default Layout
