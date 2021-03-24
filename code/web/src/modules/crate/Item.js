// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user'
import { messageShow, messageHide } from '../common/api/actions'
import { create } from '../subscription/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  //STYLE SURVEY -> counter will update styles onClick
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     isLoading: false,
  //     style1: 0,
  //     style2: 0,
  //     style3: 0,
  //     style4: 0,
  //   }
  // }

  //Using this function (onClickSubscribe) -- Adding a verifyUserStyle helper function
  // if user.style -> onclicksubscribe : redirect to styleSurvey page
  //? redirect to style 'component' -> pass onClickSubscribe (prop) & crateId (prop) - onSubmit of survey onclicksubcribe(crateid)

  onClickSubscribe = (crateId) => {
    this.setState({
      isLoading: true
    })
// messageShow('creating style survey!)
    this.props.messageShow('Subscribing, please wait...')

    this.props.create({ crateId })
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          this.props.messageShow('Subscribed successfully.')
// Create a new route to style survey -> this.props.history.push(userRoutes.styleSurvey.path)
          this.props.history.push(userRoutes.subscriptions.path)
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error subscribing to this crate. Please try again.')
      })
      .then(() => {
        this.setState({
          isLoading: false
        })

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  render() {
    const { id, name, description } = this.props.crate
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${ APP_URL }/images/crate.png`} alt={name} style={{ width: '100%' }}/>
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{name}</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <Button
              theme="primary"
              //Looks like binding is being used, add binding to any globally scoped functions
              onClick={this.onClickSubscribe.bind(this, id)}
              type="button"
              disabled={ isLoading }
            >
              <Icon size={1.2} style={{ color: white }}>add</Icon> Subscribe
            </Button>
          </p>
        </div>
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

//STYLE SURVEY -> 
// Survey.propTypes = {
//   user: PropTypes.object.isRequired,
//   messageShow: PropTypes.func.isRequired,
//   messageHide: PropTypes.func.isRequired,
//   onClickSubscribe: PropTypes.func.isRequired
// }

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

//STYLE SURVEY STATE 
// function surveyState(state) {
//   return {
//     user: state.user
//   }
// }

export default connect(itemState, { create, messageShow, messageHide })(withRouter(Item))
