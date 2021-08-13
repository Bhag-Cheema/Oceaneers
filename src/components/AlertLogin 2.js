import React, { Component } from 'react'

export default class AlertLogin extends Component {
  render() {

    const { error, ...rest } = this.props;

    return (

      <div {...rest}>
        {
          error ?
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
            :
            <div></div>
        }

      </div>

    )
  }
}