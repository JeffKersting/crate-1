// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import { getList as getSurveyList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import SurveyItem from './Item'
import { create } from '../survey/api/actions'
import { routeApi } from '../../../setup/routes'

// Component
class List extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      genderStyle: 0,
      surveyData: [],
      casual: 0,
      edgy: 0,
      streetwear: 0,
      display: ''
    }
  }

  setDisplay = () => {
    const total = this.state.casual + this.state.edgy + this.state.streetwear
    switch(total) {
      case 0:
        this.setState({display: 'gender'})
        break
      case 1:
        this.setState({display: 'shirts'})
        break
      case 2:
        this.setState({display: 'bottoms'})
        break
      case 0:
        this.setState({display: 'accessories'})
        break
      case 0:
        this.setState({display: 'shoes'})
        break
      default:
        break
    }
  }

  onClick = (event) => {
    const target = event.target.id
    this.setState({target: state.target++)
    setDisplay()
  }

  filterSurveyDisplay = () => {
    const nonBinary = []
    if(this.state.genderStyle === 0) {

    } else {
      return this.state.surveyData.filter(data =>
        data.gender === this.state.genderStyle || data.type === this.state.display
      )
    }
  }

  onSubmit() {
  //  axios post
  // res.action set user style in store
  // conditional check (if crateId exists subscribe)
  }

  retakeSurvey() {
    // clear increments and gender
  }



  // Runs on client only
  componentDidMount() {
    return axios.post(routeApi, query({
      operation: '',
      fields: ['id', 'name', 'image', 'gender']
    }))
      .then(response => {
        setState({surveyData: response.styles})
      })
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Style Survey</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Style Survey</H3>
            <p style={{ marginTop: '1em', color: grey2 }}>Select {this.state.display} style preference</p>
          </GridCell>
        </Grid>

        {/* Crate list */}
        <Grid>
          <GridCell>
            {
              this.state.surveyData.length
                ? <Loading/>
                : this.state.surveyData.length > 0
                    ? this.state.surveyData.map(info => (
                      <div key={info.id} style={{ margin: '2em', float: 'left' }}>
                        <SurveyItem info={info}/>
                      </div>
                    ))
                    : <EmptyMessage message="No survey to show" />
            }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    crates: state.crates
  }
}

export default connect(listState, { getCratesList })(List)
