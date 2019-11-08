import React from 'react'
import { Spin } from 'antd'

const wrapperStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const SpinnerWrapper = ({ isLoading, children }) => {
  return (
    <Spin spinning={isLoading}>
      <div style={wrapperStyle}>{ children }</div>
    </Spin>
  )
}
