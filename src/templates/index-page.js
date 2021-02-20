import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(102, 204, 255, 0.75) 0.5rem 0px 0px, rgb(102, 204, 255, 0.75) -0.5rem 0px 0px",
            backgroundColor: "rgb(102, 204, 255, 0.75)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(102, 204, 255, 0.75) 0.5rem 0px 0px, rgb(102, 204, 255, 0.75) -0.5rem 0px 0px",
            backgroundColor: "rgb(102, 204, 255, 0.75)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            textAlign: "center",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns is-multiline has-text-centered">
            <div className="column is-2">
              <Link to="/strikers">
                <div class="card landingCard">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="../../img/StrikersCard.webp"
                        alt="Strikers"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="title is-4">Strikers</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column is-2">
              <Link to="/specials">
                <div class="card landingCard">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="../../img/SpecialsCard.webp"
                        alt="Specials"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="title is-4">Specials</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column is-2">
              <Link to="/equip">
                <div class="card landingCard">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="../../img/Equipment_Icon_Error.webp"
                        alt="Equip Farm"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="title is-4">Equip Farm</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column is-2">
              <Link to="/gacha">
                <div class="card landingCard">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="../../img/Currency_Icon_Gem.webp"
                        alt="Gacha"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="title is-4">Gacha</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column is-2">
              <Link to="/faq">
                <div class="card landingCard">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="../../img/Icon_CardBack_Mark.webp"
                        alt="FAQ"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="title is-4">FAQ</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column is-2">
              <Link to="/translations">
                <div class="card landingCard">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="../../img/TLCard.webp"
                        alt="Translations"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="title is-4">Translations</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column is-2">
              <Link to="/reroll">
                <div class="card landingCard">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="../../img/Student_Portrait_Aru_Collection.webp"
                        alt="Reroll"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="title is-4">Reroll</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
