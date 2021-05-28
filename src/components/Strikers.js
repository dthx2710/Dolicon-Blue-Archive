import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
import Filter from '../components/Filter'

class Strikers extends React.Component {
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
        if ((check[key].toLowerCase()==="fridge" || check[key].toLowerCase()==="refrigerator") && s[key]==="Arisu"){
          bool = true;
          continue;
        }
        else if (!(s[key].toLowerCase()).includes(check[key].toLowerCase())){
          bool = false;
        }
      }
      else if (key === "combatEnvironment" && key !== ""){
        let env = (s[key][check[key]])
        if (env === "B" || env === "C" ||env === "D"){
          bool = false;
        }
      }
      else if (key !== ""){
        if (s[key] !== check[key]){
          bool = false;
        }
      }
    }
    return bool
  }

  render() {
    const { data } = this.props
    const { edges: strikers } = data.allMarkdownRemark

    return (
      //Filter fields: Rarity/Weapon/Affiliation/Position/Role/ATK/DEF/Combat Advantage
      <div style={{backgroundColor:'#'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <p>New Students: <Link to="/student/azusa" className="is-size-4 has-text-primary">Azusa</Link></p>
        </div>
        <Filter changeFilter={this.changeFilter} hasPosition={true}/>
        <div className="columns is-multiline is-centered is-vcentered is-mobile">
          {strikers &&
            strikers.map(({ node: striker }) => (
              this.evaluateFilter(striker) ? (
              
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
                  <img src={`../../img/Weapon_Icon_${striker.frontmatter.weaponType}.webp`} alt={striker.frontmatter.weaponType} title={striker.frontmatter.weaponType} width="50"/>
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
    render={(data, count) => <Strikers data={data} count={count} />}
  />
)
