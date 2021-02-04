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
            How to Reroll
        </h3>
        <p>
            Method 1: Rerolling with Salted Email method (no clear data)
        </p>
        <ol>
            <li>Login with guest account</li>
            <li>Do tutorial and the tutorial roll</li>
            <li>(optional) use the prereg rewards to do an extra 10 roll</li>
            <li>Bind using yostar account. use salted email method (example: if you have an email like test@gmail.com, you can add +1 +2 +3, etc.) so it becomes like this; test+1@gmail.com</li>
            <li>Go back to title screen</li>
            <li>Click the lower left button</li>
            <li>Login using guest account</li>
            <li>Rinse and repeat</li>
        </ol>
        <p>
            Method 2: Twitter link
        </p>
        <ol>
            <li>Link to Twitter</li>
            <li>Unlink from Twitter</li>
            <li>Return to the title screen, then select guest account again</li>
            <li>Rinse and repeat</li>
        </ol>
        <p>
            Method 3: Rename Folder (Android only)
        </p>
        <ol>
            <li>Go to Android &gt; Data &gt; com.YostarJP.BlueArchive &#38; rename it with a random character behind it (e.g. com.YostarJP.BlueArchive1)</li>
            <li>Delete the app's data</li>
            <li>Rename the file back to com.YostarJP.BlueArchive</li>
            <li>Relaunch the game</li>
        </ol>

        <h3>
            Who to Reroll for
        </h3>
        <ul>
            <li>Must get: <Link to='/student/hina'>Hina</Link> / <Link to='/student/aru'>Aru</Link> / <Link to='/student/hoshino'>Hoshino</Link> / <Link to='/student/tsurugi'>Tsurugi</Link> / <s><Link to='/student/azusa'>Azusa</Link></s></li>
            <li>Should get: <Link to='/student/neru'>Neru</Link> / <Link to='/student/karin'>Karin</Link> / <s><Link to='/student/cherino'>Cherino</Link></s> / <Link to='/student/hibiki'>Hibiki</Link></li>
            <li>Nice to get: <Link to='/student/eimi'>Eimi</Link> / <Link to='/student/shiroko'>Shiroko</Link> / <Link to='/student/saya'>Saya</Link></li>
            <li>Core 1/2*: <Link to='/student/fina'>Fina</Link> / <Link to='/student/hasumi'>Hasumi</Link> / <Link to='/student/yuuka'>Yuuka</Link> / <Link to='/student/tsubaki'>Tsubaki</Link> / <Link to='/student/fuuka'>Fuuka</Link> / <Link to='/student/hanae'>Hanae</Link> / <Link to='/student/suzumi'>Suzumi</Link></li>
        </ul>
        <p>Take the reroll list with a grain of salt. Strikethrough means not in pool atm. Will be subjected to change as time goes</p>
        <p>Sources: kamigame, gamewith, gamerch, Xeno's tier, Nep sensei's knowledge</p>

        <h3>Gacha Pool</h3>
        <p>Here's the list of students in the gacha pool right now</p>
        <p>☆☆☆ 2.5%</p>
        <p>Hina, Iori, Haruna, Izumi, Aru, Sumire, Eimi, Karin, Neru, Maki, Hibiki, Saya, Shun, Shiroko, Hoshino, Hifumi, Tsurugi</p>
        <p>☆☆ 18.5%</p>
        <p>Akari, Junko, Mutsuki, Kayoko, Fuuka, Yuuka, Akane, Hare, Utaha, Chise, Tsubaki, Serika, Ayane, Hasumi, Hanae, Airi</p>
        <p>☆ 79%</p>
        <p>Chinatsu, Haruka, Juri, Kotama, Asuna, Kotori, Fina, Suzumi, Shimiko, Serina, Yoshimi</p>
        <p>Credits to Lico#6969 for datamine</p>
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
