import React from 'react'

const LayoutWithComponent = (props) => {
  const { layout: Layout, component: Component, ...rest } = props
  return (
    <Layout {...rest}>
      <Component />
    </Layout>
  )
}

export default LayoutWithComponent
