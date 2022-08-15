import React from 'react'

const RouteWithLayout = (props) => {
  const {layout: Layout, component: Component, ...rest} = props;
  return (
    <Layout {...rest}>
      <Component {...rest} />
    </Layout>
  );
}

export default RouteWithLayout