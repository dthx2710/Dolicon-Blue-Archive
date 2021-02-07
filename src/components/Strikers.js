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
          <div className="select is-info filter-item">
            <select id="rarity">
              <option value=''>Rarity</option>
              <option value='3'>3*</option>
              <option value='2'>2*</option>
              <option value='1'>1*</option>
            </select>
          </div>

          <div className="select is-info filter-item">
            <select id="weapon">
              <option value=''>Weapon</option>
              <option value=''>HG</option>
              <option value=''>SMG</option>
              <option value=''>AR</option>
              <option value=''>SR</option>
              <option value=''>SG</option>
              <option value=''>MG</option>
              <option value=''>GL</option>
              <option value=''>RG</option>
              <option value=''>RF</option>
              <option value=''>RL</option>
              <option value=''>DualSMG</option>
              <option value=''>DualMG</option>
              <option value=''>MountMG</option>
            </select>
          </div>

          <div className="select is-info filter-item">
            <select id="affiliation">
              <option value=''>Affiliation</option>
              <option value='Abydos'>Abydos</option>
              <option value='Trinity'>Trinity</option>
              <option value='Gehenna'>Gehenna</option>
              <option value='Millennium'>Millennium</option>
              <option value='Red Winter'>Red Winter</option>
              <option value='Valkyrie'>Valkyrie</option>
              <option value='Hyakkiyako'>Hyakkiyako</option>
              <option value='Shanhaijing'>Shanhaijing</option>
            </select>
          </div>

          <div className="select is-info filter-item">
            <select>
              <option value=''>Position</option>
              <option value=''>Front</option>
              <option value=''>Middle</option>
              <option value=''>Back</option>
            </select>
          </div>

          <div className="select is-info filter-item">
            <select>
              <option value=''>Role</option>
              <option value=''>Attacker</option>
              <option value=''>Supporter</option>
              <option value=''>Tank</option>
              <option value=''>Healer</option>
            </select>
          </div>

          <div className="select is-info filter-item">
            <select>
              <option value=''>ATK</option>
              <option value=''>Penetration</option>
              <option value=''>Explosion</option>
              <option value=''>Mystic</option>
            </select>
          </div>

          <div className="select is-info filter-item">
            <select>
              <option value=''>DEF</option>
              <option value=''>Light Armour</option>
              <option value=''>Heavy Armour</option>
              <option value=''>Special Armour</option>
            </select>
          </div>

          <div className="select is-info filter-item">
            <select>
              <option value=''>Combat Advantage</option>
              <option value=''>Outdoor</option>
              <option value=''>Urban</option>
              <option value=''>Indoor</option>
            </select>
          </div>
        </div>
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
