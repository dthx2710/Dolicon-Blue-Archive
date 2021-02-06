import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

class Specials extends React.Component {
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
    const { edges: specials } = data.allMarkdownRemark

    return (
      //Filter fields: Rarity/Weapon/Affiliation/Position/Role/ATK/DEF/Combat Advantage
      <div style={{backgroundColor:'#'}}>
        <div className="studentlist-header">
          <button className="button is-info is-light">Show Filters</button>
          <p className="control has-icons-left">
            <input className="input" type="search" placeholder="Search Student"/>
            <span className="icon is-left">
              <i className="fas fa-search"></i>
            </span>
          </p>
        </div>
        <div className="studentlist-filters">
          Filter and search will be ready soon!
        </div>
        <div className="columns is-multiline is-centered is-vcentered is-mobile">
          {specials &&
            specials.map(({ node: special }) => (
              true ? (
              
              <div className="column is-narrow has-text-centered" key={special.id}>
                  <header>
                    {special.frontmatter.portrait ? (
                      <div className="card-image">
                        <Link to={special.fields.slug}>
                          <Img width="140" fixed={special.frontmatter.portrait.childImageSharp.fixed} draggable={false}/>
                        </Link>
                      </div>
                    ) : null}
                    <p className="">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={special.fields.slug}
                      >
                        {special.frontmatter.name}
                      </Link>
                    </p>
                    {this.renderRarity(special.frontmatter.rarity)}
                  </header>
                  <img src={`../../img/Weapon_Icon_${special.frontmatter.weaponType}.png`} alt={special.frontmatter.weaponType} title={special.frontmatter.weaponType} width="50"/>
              </div>



              ) : null
            ))}
        </div>
      </div>
    )
  }
}

Specials.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SpecialsQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___name] }
          filter: { frontmatter: { templateKey: { eq: "student-info" }, studentType: { eq: "Special" } } }
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
    render={(data, count) => <Specials data={data} count={count} />}
  />
)
