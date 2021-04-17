import React from "react";
import { Helmet } from 'react-helmet'
import Layout from "../../components/Layout";

export default class GiftIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <Helmet title={`Student Gifts`} />
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
                Student Gifts
              </h1>
              <div className="is-full has-text-centered">
                <img src={`../../img/gifts.webp`} alt="Gifts" title="Gifts" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
