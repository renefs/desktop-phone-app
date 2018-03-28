import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import qs from 'qs'

import * as routes from 'routes'

class RedirectPage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    urlQuery: PropTypes.string.isRequired,
    getMe: PropTypes.func.isRequired
  }

  componentWillMount = () => {
    console.debug('Component will mount')
    const queryParams = qs.parse(this.props.urlQuery.slice(1))
    if (queryParams.code) {
      console.debug('code is in params', queryParams.code)
      this.props.login(queryParams.code).then(() => {
        this.props.getMe()
      })
    }
  }

  render () {
    if (this.props.isAuthenticated) {
      return <Redirect to='/'/>
    } else {
      return <Redirect to={routes.loginRoute.path}/>
    }
  }
}

export default RedirectPage
