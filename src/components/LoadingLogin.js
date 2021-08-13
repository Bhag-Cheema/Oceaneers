import React, { Component } from 'react'

export default class LoadingLogin extends Component {
  render() {

    const { show } = this.props;

    return (
      <div>
        {
          show ?
            <div className="spinner-border"></div>
            :
            <div></div>
        }
      </div>
    )
  }
}