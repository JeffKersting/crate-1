// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import List from '../survey/List'
import { genderPreferences } from '../survey/genderPreferences'
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H1, H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import { routeApi } from '../../setup/routes'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
class Survey extends PureComponent{
    constructor(props) {
        super(props)
    
        this.state = {
          genderStyle: null,
          surveyData: [],
          Casual: 0,
          Edgy: 0,
          Streetwear: 0,
          display: '',
          result: '',
          surveyPrompts: 0
        }
      }
    
      setDisplay = (total) => {
        switch(total) {
          case 1:
            this.setState({display: 'shirt'})
            break
          case 2:
            this.setState({display: 'bottom'})
            break
          case 3:
            this.setState({display: 'accessory'})
            break
          case 4:
            this.setState({display: 'shoe'})
            break
        }
      }
    
      handleClick = (selection) => {
        switch (selection)   {
            case 'Non-Binary':
                this.setState({genderStyle: 0})
                break
            case 'Male':
                this.setState({genderStyle: 1})
                break
            case 'Female':
                this.setState({genderStyle: 2})
                break
            default:
            this.setState(prevState => ({
              [selection]: prevState[selection] + 1
              }))
                break
        }
        const total = this.state.surveyPrompts + 1
        this.setState({surveyPrompts: total})
        this.setDisplay(total)
      }
    
      filterSurveyDisplay = () => {
        if (this.state.genderStyle === null) {
            return genderPreferences
        } else if (this.state.genderStyle === 0) {
            const nonBinary = this.state.surveyData.filter(data => data.type === this.state.display)
            return [nonBinary[0], nonBinary[3], nonBinary[5]]
        } else {
            const result = this.state.surveyData.filter(data =>
              data.gender === this.state.genderStyle && data.type === this.state.display
            )
            return result
        }
      }

      determineUserStyle = () => {
        const total = this.state.Casual + this.state.Edgy + this.state.Streetwear
        if(total === 4){
          const styles = [this.state.Casual, this.state.Edgy, this.state.Streetwear]
          const topSelected = styles.sort((a, b) => b - a)[0]
          const result = Object.keys(this.state).find(e => {
            if(!e.includes('genderStyle')){
             return this.state[e] === topSelected
            }
          })
          this.setState({result: result})
        }
      }
    
      onSubmit() {
        //AXIOS.POST(USER STYLE)
        //PASS CRATEID TO SUBMIT - TO SUBSCRIPTIONS
      }
    
      retakeSurvey = () => {
        this.setState({
          genderStyle: null,
          Casual: 0,
          Edgy: 0,
          Streetwear: 0,
          display: '',
          result: '',
          surveyPrompts: 0
        })
      }

      componentDidMount = () => {
        return axios.post(routeApi, query({
          operation: 'styles',
          fields: ['id','name', 'image', 'gender', 'type']
        }))
        .then(response => {
          this.setState({surveyData: response.data.data.styles})
          
        })
      }

      componentDidUpdate = () => {
        this.determineUserStyle()
      }

    render() {
      const filteredSurveyResults = this.filterSurveyDisplay()
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
                    false // this will be the isLoading from API call
                        ? <Loading/>
                        : this.state.result.length
                            ? 
                              <div>
                                  <H1>Thank you for taking our style survey!</H1>
                                  <H3>{`Your style is ${this.state.result}`}</H3>
                                  <button onClick={this.onSubmit}>Submit</button>
                                  <button onClick={this.retakeSurvey}>Retake</button>
                              </div>
                            : !this.state.result.length
                              ?
                                <div>
                                    <List data={filteredSurveyResults} name={this.state.display} handleClick={this.handleClick} />
                                </div>
                            : <EmptyMessage message="No survey to show" />
                    }
                </GridCell>
            </Grid>

          
        </div>
      ) 
    }
} 

export default Survey;