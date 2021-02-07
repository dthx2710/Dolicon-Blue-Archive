import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
import Filter from '../components/Filter'

class Specials extends React.Component {
  constructor() {
    super()
    this.state = {filter:null};
    this.changeFilter=this.changeFilter.bind(this);
  }
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

  changeFilter(filter){
    this.setState({filter:filter});
  }

  evaluateFilter(student){
    const s = student['frontmatter'];
    const check = this.state.filter
    let bool = true
    for (let key in check){
      if (!check[key]){
        continue;
      }
      else if (key === "name" && key !== ""){
        if (!(s[key].toLowerCase()).includes(check[key].toLowerCase())){
          bool = false
        }
      }
      else if (key === "combatEnvironment" && key !== ""){
        console.log(s[key][check[key]])

      }
      else if (key !== ""){
        if (s[key] !== check[key]){
          bool = false
        }
      }
      console.log(key,s[key])
    }
    return bool
  }

  render() {
    const { data } = this.props
    const { edges: specials } = data.allMarkdownRemark

    return (
      //Filter fields: Rarity/Weapon/Affiliation/Position/Role/ATK/DEF/Combat Advantage
      <div style={{backgroundColor:'#'}}>
        <Filter changeFilter={this.changeFilter} hasPosition={false}/>
        <div className="columns is-multiline is-centered is-vcentered is-mobile">
          {specials &&
            specials.map(({ node: special }) => (
              this.evaluateFilter(special) ? (
              
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
                role
                position
                atkType
                defType
                combatEnvironment {
                  outdoor
                  indoor
                  urban
                }
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
