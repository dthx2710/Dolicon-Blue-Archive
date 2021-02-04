import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
//import { graphql, Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from "gatsby-image"

export const StudentInfoTemplate = ({
  name,
  helmet,
  image,
  rarity,
  affiliation,
  studentType,
  weaponType,
  role,
  position,
  atkType,
  defType,
  desert,
  indoor,
  outdoor,
  exCost,
  exText,
  normalText,
  enhancedText,
  subText,
}) => {

  //convert data to icons
  switch(rarity){
    case '1':
      rarity = '★'
      break;
    case '2':
      rarity = '★★'
      break;
    case '3':
      rarity = '★★★'
      break;
    default:
  }
  const affiliationSrc=affiliation.toLowerCase()

  return (
    <section className="section">
      {helmet || ''}
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column is-4">
            <h1 className="is-size-3 has-text-weight-bold is-bold-light">
              {name}
            </h1 >
            <h1 className="is-size-3 has-text-weight-bold is-bold-light">
              {rarity}
            </h1>
            <Img width="200" fluid={image} draggable={false}/>
          </div>
          <div className="column is-8">
            <hr/>
            <div className="columns is-multiline">
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Affiliation</p>
                <img src={`../../img/${affiliationSrc}.png`} alt={affiliation} title={affiliation} width="100"/>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Weapon Type</p>
                <img src={`../../img/Weapon_Icon_${weaponType}.png`} alt={weaponType} title={weaponType} width="160"/>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Role</p>
                <p>{role}</p>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Position</p>
                <p>{position}</p>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Attack Type</p>
                <p>{atkType}</p>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Defense Type</p>
                <p>{defType}</p>
              </div>
              <div className="column is-12">
              <hr/>
                <div className="columns">
                  <div className="column">
                    <p className="has-text-weight-bold is-bold-light">Desert</p>
                    <img src={`../../img/Combat_${desert}.png`} alt={desert} title={desert} width="40"/>
                  </div>
                  <div className="column">
                    <p className="has-text-weight-bold is-bold-light">Indoor</p>
                    <img src={`../../img/Combat_${indoor}.png`} alt={indoor} title={indoor} width="40"/>
                  </div>
                    <div className="column">
                    <p className="has-text-weight-bold is-bold-light">Outdoor</p>
                    <img src={`../../img/Combat_${outdoor}.png`} alt={outdoor} title={outdoor} width="40"/>
                  </div>
                </div>
                <hr/>
              </div>
              <div className="column is-12">
                <div className="columns">
                  <div className="column is-4">
                  <p className="has-text-weight-bold is-bold-light">EX Skill</p>
                  </div>
                  <div className="column is-8">
                    <p>{exText} (Cost: {exCost})</p>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Normal Skill</p>
                  </div>
                  <div className="column is-8">
                    <p>{normalText}</p>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Enhanced Skill</p>
                  </div>
                  <div className="column is-8">
                    <p>{enhancedText}</p>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Sub Skill</p>
                  </div>
                  <div className="column is-8">
                    <p>{subText}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
         </div>
      </div>
    </section>
  )
}

StudentInfoTemplate.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.object,
  rarity: PropTypes.string,
  affiliation: PropTypes.string,
  studentType: PropTypes.string,
  weaponType: PropTypes.string,
  role: PropTypes.string,
  position: PropTypes.string,
  atkType: PropTypes.string,
  defType: PropTypes.string,
  desert: PropTypes.string,
  indoor: PropTypes.string, 
  outdoor: PropTypes.string,
  exCost: PropTypes.number,
  exText: PropTypes.string,
  normalText: PropTypes.string,
  enhancedText: PropTypes.string,
  subText: PropTypes.string,
}

const StudentInfo = ({ data }) => {
  const { markdownRemark: info } = data

  return (
    <Layout>
      <StudentInfoTemplate
        helmet={
          <Helmet titleTemplate="%s">
            <meta name="description" content={info.frontmatter.name}/>
            <title>{`${info.frontmatter.name} | ${info.frontmatter.studentType}`}</title>
          </Helmet>
        }
        name={info.frontmatter.name}
        image={info.frontmatter.image.childImageSharp.fluid}
        rarity={info.frontmatter.rarity}
        affiliation={info.frontmatter.affiliation}
        studentType={info.frontmatter.studentType}
        weaponType={info.frontmatter.weaponType}
        role={info.frontmatter.role}
        position={info.frontmatter.position}
        atkType={info.frontmatter.atkType}
        defType={info.frontmatter.defType}
        desert={info.frontmatter.combatEnvironment.desert}
        indoor={info.frontmatter.combatEnvironment.indoor}
        outdoor={info.frontmatter.combatEnvironment.outdoor}
        exCost={info.frontmatter.exSkill.exCost}
        exText={info.frontmatter.exSkill.exText}
        normalText={info.frontmatter.normalText}
        enhancedText={info.frontmatter.enhancedText}
        subText={info.frontmatter.subText}
      />
    </Layout>
  )
}

StudentInfo.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default StudentInfo

export const pageQuery = graphql`
  query StudentInfoByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        image {
            childImageSharp {
                fluid(maxWidth: 500, toFormat: WEBP) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        rarity
        affiliation
        studentType
        weaponType
        role
        position
        atkType
        defType
        combatEnvironment {
          desert
          indoor
          outdoor
        }
        exSkill {
          exCost
          exText
        }
        normalText
        enhancedText
        subText
      }
    }
  }
`
