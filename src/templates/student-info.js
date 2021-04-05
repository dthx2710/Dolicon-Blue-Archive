import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
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
  equipment1,
  equipment2,
  equipment3,
  role,
  position,
  atkType,
  defType,
  outdoor,
  indoor,
  urban,
  exCost,
  exText,
  normalText,
  enhancedText,
  subText,
  fullname,
  jpname,
  club,
  age,
  birthday,
  height,
  hobbies,
  cv,
  artist,
  info
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

  //convert atk/def type to color
  let atkColor, defColor
  switch(atkType){
    case 'Explosion':
      atkColor = 'red'
      break;
    case 'Penetration':
      atkColor = '#f1ce0b'
      break;
    case 'Mystic':
      atkColor = 'blue'
      break;
    default:
  }
  switch(defType){
    case 'Light Armour':
      defColor = 'red'
      break;
    case 'Heavy Armour':
      defColor = '#f1ce0b'
      break;
    case 'Special Armour':
      defColor = 'blue'
      break;
    default:
  }

  let studentAge
  if (age === 0){
    studentAge = "Confidential"
  }
  else {
    studentAge = `${age} years old`
  }

  const affiliationSrc=affiliation.toLowerCase()

  const [showProfile, setShowProfile] = useState(false);

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
                <img src={`../../img/${affiliationSrc}.webp`} alt={affiliation} title={affiliation} width="100"/>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Weapon Type</p>
                <img src={`../../img/Weapon_Icon_${weaponType}.webp`} alt={weaponType} title={weaponType} width="160"/>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Type</p>
                <p>{studentType}</p>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Position</p>
                <p>{role} / {position}</p>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Attack Type</p>
                <p style={{color:`${atkColor}`}}>{atkType}</p>
              </div>
              <div className="column is-4">
                <p className="has-text-weight-bold is-bold-light">Defense Type</p>
                <p style={{color:`${defColor}`}}>{defType}</p>
              </div>
              <div className="column is-12">
              <hr/>
                <div className="columns">
                  <div className="column">
                    <p className="has-text-weight-bold is-bold-light">Outdoor</p>
                    <img src={`../../img/Combat_${outdoor}.webp`} alt={outdoor} title={outdoor} width="40"/>
                  </div>
                    <div className="column">
                    <p className="has-text-weight-bold is-bold-light">Urban</p>
                    <img src={`../../img/Combat_${urban}.webp`} alt={urban} title={urban} width="40"/>
                  </div>
                  <div className="column">
                    <p className="has-text-weight-bold is-bold-light">Indoor</p>
                    <img src={`../../img/Combat_${indoor}.webp`} alt={indoor} title={indoor} width="40"/>
                  </div>
                </div>
              </div>
              
              <div className="column is-12">
              <hr/>
                <p className="has-text-weight-bold is-bold-light">Equipment</p>
                <div className="columns">
                  <div className="column">
                    <img src={`../../img/Equipment_Icon_${equipment1}_Tier1.webp`} alt={equipment1} title={equipment1} width="100"/>
                  </div>
                    <div className="column">
                    <img src={`../../img/Equipment_Icon_${equipment2}_Tier1.webp`} alt={equipment2} title={equipment2} width="100"/>
                  </div>
                  <div className="column">
                    <img src={`../../img/Equipment_Icon_${equipment3}_Tier1.webp`} alt={equipment3} title={equipment3} width="100"/>
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
                    <p className="has-text-weight-bold is-bold-light">Basic Skill</p>
                  </div>
                  <div className="column is-8">
                    <p>{normalText}</p>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Passive Skill</p>
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
              <div className="column is-12">
                {showProfile ?
                  <div>
                    <button className="button is-danger is-light" onClick={()=>setShowProfile(!showProfile)}>Hide Profile</button>
                  </div> :
                  <button className="button is-info is-light" onClick={()=>setShowProfile(!showProfile)}>View Profile</button>
                  }
              </div>
              { showProfile ?
              <div className="column is-12">
                <div className="columns is-multiline">
                <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Full Name</p>
                    <p>{fullname}</p>
                  </div>
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">JP Name</p>
                    <p>{jpname}</p>
                  </div>
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Club</p>
                    <p>{club}</p>
                  </div>
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Age</p>
                    <p>{studentAge}</p>
                  </div>
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Birthday</p>
                    <p>{birthday}</p>
                  </div>
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Height</p>
                    <p>{height} cm</p>
                  </div>
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Hobbies</p>
                    <p>{hobbies}</p>
                  </div>
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">CV</p>
                    <p>{cv}</p>
                  </div>
                  <div className="column is-4">
                    <p className="has-text-weight-bold is-bold-light">Artist</p>
                    <p>{artist}</p>
                  </div>
                  <div className="column is-12">
                    <p className="has-text-weight-bold is-bold-light">Background Info</p>
                    <p>{info}</p>
                  </div>
                </div>
              </div> : null }
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
  equipment1: PropTypes.string,
  equipment2: PropTypes.string,
  equipment3: PropTypes.string,
  role: PropTypes.string,
  position: PropTypes.string,
  atkType: PropTypes.string,
  defType: PropTypes.string,
  outdoor: PropTypes.string,
  indoor: PropTypes.string, 
  urban: PropTypes.string,
  exCost: PropTypes.number,
  exText: PropTypes.string,
  normalText: PropTypes.string,
  enhancedText: PropTypes.string,
  subText: PropTypes.string,
  fullname: PropTypes.string,
  jpname: PropTypes.string,
  club: PropTypes.string,
  age: PropTypes.number,
  birthday: PropTypes.string,
  height: PropTypes.number,
  hobbies: PropTypes.string,
  cv: PropTypes.string,
  artist: PropTypes.string,
  info: PropTypes.string,
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
        equipment1={info.frontmatter.equipment.equipment1}
        equipment2={info.frontmatter.equipment.equipment2}
        equipment3={info.frontmatter.equipment.equipment3}
        role={info.frontmatter.role}
        position={info.frontmatter.position}
        atkType={info.frontmatter.atkType}
        defType={info.frontmatter.defType}
        outdoor={info.frontmatter.combatEnvironment.outdoor}
        indoor={info.frontmatter.combatEnvironment.indoor}
        urban={info.frontmatter.combatEnvironment.urban}
        exCost={info.frontmatter.exSkill.exCost}
        exText={info.frontmatter.exSkill.exText}
        normalText={info.frontmatter.normalText}
        enhancedText={info.frontmatter.enhancedText}
        subText={info.frontmatter.subText}
        fullname={info.frontmatter.profile.fullname}
        jpname={info.frontmatter.profile.jpname}
        club={info.frontmatter.profile.club}
        age={info.frontmatter.profile.age}
        birthday={info.frontmatter.profile.birthday}
        height={info.frontmatter.profile.height}
        hobbies={info.frontmatter.profile.hobbies}
        cv={info.frontmatter.profile.cv}
        artist={info.frontmatter.profile.artist}
        info={info.frontmatter.profile.info}
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
        equipment {
          equipment1
          equipment2
          equipment3
        }
        role
        position
        atkType
        defType
        combatEnvironment {
          outdoor
          indoor
          urban
        }
        exSkill {
          exCost
          exText
        }
        normalText
        enhancedText
        subText
        profile {
          fullname
          jpname
          club
          age
          birthday
          height
          hobbies
          cv
          artist
          info
        }
      }
    }
  }
`
