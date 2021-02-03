import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className='container'>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to='/'>Head back here</Link>
    </div>
  </Layout>
)

export default NotFoundPage
