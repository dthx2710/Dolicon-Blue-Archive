import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import EquipPicker from './EquipPicker';
import SuggestedMaps from './SuggestedMaps';

class Equip extends React.Component {
  constructor() {
    super()
    this.state = {equips:[]};
    this.selectEquip=this.selectEquip.bind(this);
  }
  selectEquip(equips){
    this.setState({equips:equips});
  }

  render() {
    return (
      <div>
        <div>
          <EquipPicker selectedEquips={this.selectEquip}/>
        </div>
        <hr/>
        <div className="results">
          <SuggestedMaps equipsArray={this.state.equips}/>
        </div>
      </div>
    )
  }
}

Equip.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EquipQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___name] }
          filter: { frontmatter: { templateKey: { eq: "student-info" } } }
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={(data, count) => <Equip data={data} count={count} />}
  />
)
