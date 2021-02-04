import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

class Reroll extends React.Component {
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
      <div className="">
        <h1>
            This page will be updated with images and proper styling soon!
        </h1>

        <h3>
            How to Reroll:
        </h3>
        <p>
            Rerolling with Salted Email method (no clear data)
        </p>
        <ol>
            <li>Login with guest account</li>
            <li>Do tutorial and the tutorial roll</li>
            <li>(optional) use the prereg rewards to do an extra 10 roll</li>
            <li>Bind using yostar account. use salted email method (example: if you have an email like test@gmail.com, you can add +1 +2 +3, etc.) so it becomes like this; test+1@gmail.com</li>
            <li>Go back to title screen</li>
            <li>Click the lower left button</li>
            <li>Login using guest account</li>
            <li>Repeat</li>
        </ol>

        <h3>
            Who to Reroll for:
        </h3>
        <ul>
            <li>Must get: <Link to='/student/hina'>Hina</Link> / <Link to='/student/aru'>Aru</Link> / <Link to='/student/hoshino'>Hoshino</Link> / <Link to='/student/tsurugi'>Tsurugi</Link> / <Link to='/student/azusa'>Azusa</Link></li>
            <li>Should get: <Link to='/student/neru'>Neru</Link> / <Link to='/student/karin'>Karin</Link> / <Link to='/student/cherino'>Cherino</Link> / <Link to='/student/hibiki'>Hibiki</Link></li>
            <li>Nice to get: <Link to='/student/eimi'>Eimi</Link> <Link to='/student/shiroko'>Shiroko</Link> <Link to='/student/saya'>Saya</Link></li>
            <li>Core 1/2*: <Link to='/student/fina'>Fina</Link> / <Link to='/student/hasumi'>Hasumi</Link> / <Link to='/student/yuuka'>Yuuka</Link> / <Link to='/student/tsubaki'>Tsubaki</Link> / <Link to='/student/fuuka'>Fuuka</Link> / <Link to='/student/hanae'>Hanae</Link> / <Link to='/student/suzumi'>Suzumi</Link></li>
        </ul>

        <p>
            Take the reroll list with a grain of salt. Will be subjected to change as time goes
        </p>
        <p>
            Sources: kamigame, gamewith, gamerch, Xeno's tier, Nep sensei's knowledge
        </p>
      </div>
    )
  }
}

Reroll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query RerollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___name] }
          filter: { frontmatter: { templateKey: { eq: "student-info" } } }
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
                image {
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
    render={(data, count) => <Reroll data={data} count={count} />}
  />
)
