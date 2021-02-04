import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

class Strikers extends React.Component {
  renderRarity(rarity){
    switch(rarity){
      case '1':
        return '★';
      case '2':
        return '★★';
      case '3':
        return '★★★';
      default:
        return;
    }
  }


  render() {
    const { data } = this.props
    const { edges: strikers } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline is-centered is-vcentered is-mobile">
        {strikers &&
          strikers.map(({ node: striker }) => (
            true ? (
            
            <div className="column is-narrow has-text-centered" key={striker.id}>
                <header>
                  {striker.frontmatter.portrait ? (
                    <div className="card-image">
                      <Link to={striker.fields.slug}>
                        <Img width="140" fixed={striker.frontmatter.portrait.childImageSharp.fixed} draggable={false}/>
                      </Link>
                    </div>
                  ) : null}
                  <p className="">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={striker.fields.slug}
                    >
                      {striker.frontmatter.name}
                    </Link>
                  </p>
                  {this.renderRarity(striker.frontmatter.rarity)}
                </header>
                <img src={`../../img/Weapon_Icon_${striker.frontmatter.weaponType}.png`} alt={striker.frontmatter.weaponType} title={striker.frontmatter.weaponType} width="50"/>
            </div>



            ) : null
          ))}
      </div>
    )
  }
}

Strikers.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query StrikersQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___name] }
          filter: { frontmatter: { templateKey: { eq: "student-info" }, studentType: { eq: "Striker" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                name
                templateKey
                rarity
                affiliation
                studentType
                weaponType
                portrait {
                  childImageSharp {
                    fixed(width: 140, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Strikers data={data} count={count} />}
  />
)
