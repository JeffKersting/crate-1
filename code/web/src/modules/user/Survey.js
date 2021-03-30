// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import List from '../survey/List'
import { genderPreferences } from '../survey/genderPreferences'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
// import { getList as getSurveyList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
// import { create } from '../survey/api/actions'
import { routeApi } from '../../setup/routes'
class Survey extends PureComponent{
    constructor(props) {
        super(props)
    
        this.state = {
          genderStyle: null,
          surveyData: [],
          casual: 0,
          edgy: 0,
          streetwear: 0,
          display: '',
          result: ''
        }
      }
    
      setDisplay = () => {
        const total = this.state.casual + this.state.edgy + this.state.streetwear
        switch(total) {
            // conditional for the gender and style on case 0 and 5
          case 0:
            this.setState({display: 'shirts'})
            break
          case 1:
            this.setState({display: 'bottoms'})
            break
          case 2:
            this.setState({display: 'accessories'})
            break
          case 3:
            this.setState({display: 'shoes'})
            break
          case 4:
            this.setState({display: 'confirmation'}) 
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
                this.setState({target: this.state.target += 1})
                break
        }
        this.setDisplay()
      }
    
      filterSurveyDisplay = () => {
        if (this.state.genderStyle === null) {
            return genderPreferences
        } else if (this.state.genderStyle === 0) {
          //  Returning non-existent data - Non-binary survey page won't show
          const nonBinary = this.state.surveyData.filter(data => data.type === this.state.display)
          return [nonBinary[0], nonBinary[3], nonBinary[5]]
        } else {
          return this.state.surveyData.filter(data =>
            data.gender === this.state.genderStyle && data.type === this.state.display
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
                                  {/* <Confirmation /> */}
                                  <button>Submit</button>
                                  <button>Retake</button>
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

// Runs on client only
// componentDidMount() {
//   return axios.post(routeApi, query({
//     operation: '',
//     fields: ['id', 'name', 'image', 'gender']
//   }))
//     .then(response => {
//       setState({surveyData: response.styles})
//     })
// }

// render() {
//   return (
//     <div>
//       {/* SEO */}
//       <Helmet>
//         <title>Style Survey</title>
//       </Helmet>

//       {/* Top title bar */}
//       <Grid style={{ backgroundColor: grey }}>
//         <GridCell style={{ padding: '2em', textAlign: 'center' }}>
//           <H3 font="secondary">Style Survey</H3>
//           <p style={{ marginTop: '1em', color: grey2 }}>Select {this.state.display} style preference</p>
//         </GridCell>
//       </Grid>

//       {/* Crate list */}
//       <Grid>
//         <GridCell>
//           {
//             this.state.surveyData.length
//               ? <Loading/>
//               : this.state.surveyData.length > 0
//                   ? this.state.surveyData.map(info => (
//                     <div key={info.id} style={{ margin: '2em', float: 'left' }}>
//                       <SurveyItem info={info}/>
//                     </div>
//                   ))
//                   : <EmptyMessage message="No survey to show" />
//           }
//         </GridCell>
//       </Grid>
//     </div>
//   )
// }
// }

export default Survey;