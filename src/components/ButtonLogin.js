import React, { Component } from 'react'

import LoadingLogin from './LoadingLogin';

export default class ButtonLogin extends Component {
  render() {

    const { loading, disabled, children, ...rest } = this.props;

    return (

      <button
        {...rest}
        disabled={loading || disabled}
        style={{ position: 'relative' }}>
        {children}

        <span style={{
          position: 'absolute', right: '2px', top: '2px'
        }}>
          <LoadingLogin show={loading} />
        </span>

      </button>

    )
  }
}