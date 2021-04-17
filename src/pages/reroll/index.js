import React from "react";
import { Helmet } from 'react-helmet'
import Layout from "../../components/Layout";
import Reroll from "../../components/Reroll";

export default class RerollIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <Helmet title={`Reroll`} />
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
                Reroll Priority
              </h1>
              <Reroll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
