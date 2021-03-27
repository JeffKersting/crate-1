// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { messageShow, messageHide } from '../common/api/actions'


// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      style:
    }
  }

  // this.state.user.style EVENTUAL CHECK
  validateUserStyle = (crateId) => {

    if(true) {
      onClickSubscribe(createId)
      return
    } else {
      this.setState({
        isLoading: true
      })
      this.props.messageShow('Redirecting to survey page...')
      this.props.history.push(userRoutes.survey.path, crateId)

    }



  }


  onClickSubscribe = (crateId) => {



  }

  render() {
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>

      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  crate: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

export default connect(itemState, { create, messageShow, messageHide })(withRouter(Item))
