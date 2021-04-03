// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { level3 } from '../../ui/common/shadows'
import Button from '../../ui/button/button'

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

  componentDidUpdate = () => {
    this.displayImage()
  }
  
  displayImage = () => {
    return this.props.data.map(item => {
      if (item.name === this.state.selected) {
        return <Item id={item.name} image={item.image} setSelectedItem={this.setSelectedItem} border={true} />
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
    this.setState({ selected: ''})
  }

  render() {
    const imageData = this.displayImage()
    return (
      <React.Fragment>
        <Grid > 
            {imageData}
        </Grid>
        <Button onClick={this.handleClick} theme='primary' disabled={!this.state.selected.length} style={{marginLeft:'50%', transform: 'translateX(-50%)'}}>Next</Button>
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
