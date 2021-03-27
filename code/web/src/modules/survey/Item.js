// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { white, grey2, black } from '../../ui/common/colors'
import Card from '../../ui/card/Card'
import Tile from '../../ui/image/Tile'
import { level0 } from '../../ui/common/shadows'


// App Imports
import { routeImage } from '../../setup/routes/index'



// Component
const Item = ({id, image, shadow, setSelectedItem}) => {
  return (
    <GridCell style={{height: '250px'}}>
        <Tile id={id} image={routeImage + image} onClick={event => setSelectedItem(event)} shadow={shadow || level0}/> 
    </GridCell>
  )
}

// Component Properties
Item.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  shadow: PropTypes.string,
  setSelectedItem: PropTypes.func.isRequired
}

export default Item
