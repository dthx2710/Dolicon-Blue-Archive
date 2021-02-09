import React from 'react'

import Layout from '../../components/Layout'
import Equip from '../../components/Equip'

export default class EquipIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <h1
            className="has-text-weight-bold is-size-1 has-text-centered"
            style={{
              boxShadow: '0.5rem 0 0 rgba(102, 204, 255, 0.75), -0.5rem 0 0 rgba(102, 204, 255, 0.75)',
              backgroundColor: 'rgba(102, 204, 255, 0.75)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Equipment Drop Optimiser
          </h1>
              <Equip />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
