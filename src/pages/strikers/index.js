import React from "react";
import { Helmet } from 'react-helmet'
import Layout from "../../components/Layout";
import Strikers from "../../components/Strikers";

export default class StrikersIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <Helmet title={`Strikers`} />
          <div className="container">
            <div className="content">
              <h1
                className="has-text-weight-bold is-size-1 has-text-centered"
                style={{
                  boxShadow:
                    "0.5rem 0 0 rgba(102, 204, 255, 0.75), -0.5rem 0 0 rgba(102, 204, 255, 0.75)",
                  backgroundColor: "rgba(102, 204, 255, 0.75)",
                  color: "white",
                  padding: "1rem",
                }}
              >
                Strikers
              </h1>
              <Strikers />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
