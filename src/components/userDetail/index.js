import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Button } from 'antd'

import { SpinnerWrapper } from '../common/spinnerWrapper'
import history from '../../history'

const { Meta } = Card

class UserDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    this.props.getUserDetail()
  }

  render () {
    const { isLoading, selectedUser } = this.props
    return (
      <SpinnerWrapper isLoading={isLoading}>
        <div className={'user-detail-container'}>
          <Card
            hoverable={true}
            style={{ width: 240 }}
            cover={<img src={selectedUser.avatar} alt={''} />}
          >
            <Meta
              title={'User Detail'}
              description={`${selectedUser.first_name} ${selectedUser.last_name}`}
            />
          </Card>
          <div>
            <Button type={'primary'} onClick={() => history.push('/')}>
              Back
            </Button>
          </div>
        </div>
      </SpinnerWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.main.isLoading,
    selectedUser: state.main.selectedUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail)
