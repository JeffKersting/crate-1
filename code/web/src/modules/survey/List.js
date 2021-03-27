// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { level3 } from '../../ui/common/shadows'
 
// App Imports
import Item from '../../modules/survey/Item'

// Component
class List extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      selected: ''
    }
  }  
  
  displayImage = () => {
    return this.props.data.map(item => {
      if (item.id === this.state.selected) {
        return <Item id={item.name} image={item.image} setSelectedItem={this.setSelectedItem} shadow={level3} />
      } else {
        return <Item id={item.name} image={item.image} setSelectedItem={this.setSelectedItem} />
      }
    })
  }

  setSelectedItem = (event) => {
    event.preventDefault()
    this.setState({selected: event.target.id})
  }

  handleClick = () => {
    this.props.handleClick(this.state.selected)
  }

  render() {
    const imageData = this.displayImage()
    console.log(this.props.data)
    return (
      <React.Fragment>
        <Grid> 
            {imageData}
        </Grid>
        <button onClick={this.handleClick}>Next</button>
      </React.Fragment>
    )
  }
}
  

// Component Properties
List.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
}

// Component State
// function listState(state) {
//   return {
//     crates: state.crates
//   }
// }

export default List

// export default connect(listState, { getSurveyList })(List)
