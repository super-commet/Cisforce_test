import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Button } from 'antd'

import { SpinnerWrapper } from '../common/spinnerWrapper'
import history from '../../history'
import { getUserDetail } from '../../actions/main'

const { Meta } = Card

class UserDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    const { match } = this.props
    const selectedUserId = match.params.id
    this.props.getUserDetail(selectedUserId)
  }

  render () {
    const { isLoading, selectedUser } = this.props
    return (
      <SpinnerWrapper isLoading={isLoading}>
        <div className={'user-detail-container'}>
          <p className={'title'}>User Detail</p>
          <Card
            hoverable={true}
            style={{ width: 240 }}
            cover={<img src={selectedUser && selectedUser.avatar} alt={''} />}
          >
            <Meta
              title={'User Detail'}
              description={`${selectedUser && selectedUser.first_name} ${selectedUser && selectedUser.last_name}`}
            />
          </Card>
          <div className={'back-button-container'}>
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
  return {
    getUserDetail: (id) => {
      dispatch(getUserDetail(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail)
