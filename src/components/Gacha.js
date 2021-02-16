import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import GachaButton from "./GachaButton";
import Img from "gatsby-image";

class Gacha extends React.Component {
  constructor() {
    super();
    this.state = { gachaResults: [], wastedGems: 0, threestars: 0 };
    this.gachaAlgo = this.gachaAlgo.bind(this);
  }

  renderRarity(rarity) {
    switch (rarity) {
      case "1":
        return "★";
      case "2":
        return "★★";
      case "3":
        return "★★★";
      default:
        return;
    }
  }

  gachaAlgo(rolls, type, rateup, pool) {
    const gachaArray = [];
    const { 1: onestar, 2: twostar, 3: threestar } = pool;
    //rateup 0.7
    //rates 2.5, 18.5, 79
    //guaranteed 12, 88

    //single roll
    if (rolls === 1) {
      const target = Math.floor(Math.random() * 1001);
      if (target <= 25) {
        gachaArray.push(
          threestar[Math.floor(Math.random() * threestar.length)]
        );
        this.state.threestars += 1;
      } else if (target <= 185) {
        gachaArray.push(twostar[Math.floor(Math.random() * twostar.length)]);
      } else {
        gachaArray.push(onestar[Math.floor(Math.random() * onestar.length)]);
      }
      gachaArray[0].key = 0;
      this.state.wastedGems += 120;
    }
    //ten roll
    else if (rolls === 10) {
      //1 guaranteed 2-3*
      const guaranteedtarget = Math.floor(Math.random() * 1001);
      if (guaranteedtarget <= 120) {
        gachaArray.push(
          threestar[Math.floor(Math.random() * threestar.length)]
        );
        this.state.threestars += 1;
      } else {
        gachaArray.push(twostar[Math.floor(Math.random() * twostar.length)]);
      }
      //9x normal rolls
      for (let i = 0; i < 9; i++) {
        let target = Math.floor(Math.random() * 1001);
        if (target <= 25) {
          let unit = JSON.parse(
            JSON.stringify(
              threestar[Math.floor(Math.random() * threestar.length)]
            )
          );
          gachaArray.push(unit);
          this.state.threestars += 1;
        } else if (target <= 185) {
          let unit = JSON.parse(
            JSON.stringify(twostar[Math.floor(Math.random() * twostar.length)])
          );
          gachaArray.push(unit);
        } else {
          let unit = JSON.parse(
            JSON.stringify(onestar[Math.floor(Math.random() * onestar.length)])
          );
          gachaArray.push(unit);
        }
      }
      for (let i = 0; i < 10; i++) {
        gachaArray[i].key = i;
      }
      this.state.wastedGems += 1200;
    }
    this.state.gachaResults = gachaArray;
    this.forceUpdate();
    return;
  }

  render() {
    const { data } = this.props;
    const { edges: students } = data.allMarkdownRemark;
    return (
      <div>
        <div className="gachaBtns">
          <h3>Normal Gacha</h3>
          <div className="normalGacha" style={{ display: "flex" }}>
            <GachaButton
              students={students}
              rolls={1}
              banner="normal"
              gachaAlgo={this.gachaAlgo}
            />
            <GachaButton
              students={students}
              rolls={10}
              banner="normal"
              gachaAlgo={this.gachaAlgo}
            />
          </div>
          {this.state.gachaResults.length === 0 ? (
            <div>
              <p>
                *Note: This gacha pool is not same as in-game and will have
                students from CBT.
              </p>
              <p>
                Real pool is in <Link to="/reroll">/Reroll</Link>
              </p>
            </div>
          ) : null}
        </div>
        <div
          className="gachaResults"
          style={{ display: "flex", flexBasis: "20%", flexWrap: "wrap" }}
        >
          {this.state.gachaResults.length > 0 &&
            this.state.gachaResults.map((s) => (
              <div
                className="has-text-centered"
                key={s.key}
                style={{ margin: "4px", flex: "0 1 calc(20% - 8px)" }}
              >
                <header>
                  {s.frontmatter.portrait ? (
                    <div className="card-image">
                      <Link to={s.fields.slug}>
                        <Img
                          width="140"
                          fixed={s.frontmatter.portrait.childImageSharp.fixed}
                          draggable={false}
                        />
                      </Link>
                    </div>
                  ) : null}
                  <p className="">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={s.fields.slug}
                    >
                      {s.frontmatter.name}
                    </Link>
                  </p>
                  {this.renderRarity(s.frontmatter.rarity)}
                </header>
                <img
                  src={`../../img/Weapon_Icon_${s.frontmatter.weaponType}.webp`}
                  alt={s.frontmatter.weaponType}
                  title={s.frontmatter.weaponType}
                  width="50"
                />
              </div>
            ))}
        </div>
        {this.state.gachaResults.length > 0 ? (
          <div>
            <p className="is-size-4">
              You have wasted {this.state.wastedGems} gems and rolled{" "}
              {this.state.threestars} 3* (s)
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query GachaQuery {
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
    render={(data, count) => <Gacha data={data} count={count} />}
  />
);
