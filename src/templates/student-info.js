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
  exSkill,
  normalSkill,
  enhancedSkill,
  subSkill,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {name}
            </h1>
            <Img fixed={image}/>
            <p><strong>Rarity:</strong> {rarity}*</p>
            <p><strong>Affiliation:</strong> {affiliation}</p>
            <p><strong>Student Type:</strong> {studentType}</p>
            <p><strong>Weapon Type:</strong> {weaponType}</p>
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Position:</strong> {position}</p>
            <p><strong>EX Skill:</strong> {exSkill}</p>
            <p><strong>Normal Skill:</strong> {normalSkill}</p>
            <p><strong>Enhanced Skill:</strong> {enhancedSkill}</p>
            <p><strong>Sub Skill:</strong> {subSkill}</p>
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
  exSkill: PropTypes.string,
  normalSkill: PropTypes.string,
  enhancedSkill: PropTypes.string,
  subSkill: PropTypes.string,
}

const StudentInfo = ({ data }) => {
  const { markdownRemark: info } = data

  return (
    <Layout>
      <StudentInfoTemplate
        helmet={
          <Helmet titleTemplate="%s | Student">
            <title>{`${info.frontmatter.name}`}</title>
          </Helmet>
        }
        name={info.frontmatter.name}
        image={info.frontmatter.image.childImageSharp.fixed}
        rarity={info.frontmatter.rarity}
        affiliation={info.frontmatter.affiliation}
        studentType={info.frontmatter.studentType}
        weaponType={info.frontmatter.weaponType}
        role={info.frontmatter.role}
        position={info.frontmatter.position}
        exSkill={info.frontmatter.exSkill}
        normalSkill={info.frontmatter.normalSkill}
        enhancedSkill={info.frontmatter.enhancedSkill}
        subSkill={info.frontmatter.subSkill}
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
                fixed{
                    ...GatsbyImageSharpFixed_withWebp
                }
            }
        }
        rarity
        affiliation
        studentType
        weaponType
        role
        position
        exSkill
        normalSkill
        enhancedSkill
        subSkill
      }
    }
  }
`
