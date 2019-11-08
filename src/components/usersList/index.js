import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Pagination } from 'antd'

import { SpinnerWrapper } from '../common/spinnerWrapper'
import history from '../../history'
import { getUserList, onSelectUser, onChangePageNum } from '../../actions/main'

class UsersList extends Component {
  constructor (props) {
    super(props)

    this.moveToSelectedUserDetail = this.moveToSelectedUserDetail.bind(this)
    this.onChangePageNum = this.onChangePageNum.bind(this)
  }

  componentDidMount () {
    this.props.getUserList()
  }

  moveToSelectedUserDetail (selectedUserDetail) {
    this.props.onSelectUser(selectedUserDetail)
    history.push(`/${selectedUserDetail.id}`)
  }

  onChangePageNum (pageNum) {
    const { onChangePageNum, getUserList } = this.props
    onChangePageNum(pageNum)
    getUserList()
  }

  render () {
    const { isLoading, usersList, totalSize } = this.props

    const columns = [
      {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text, record, index) => {
          return (
            <div className={'avatar-image-wrapper'}>
              <img src={record.avatar} alt={''} />
            </div>
          )
        }
      },
      {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name'
      },
      {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name'
      },
      {
        title: 'Email Address',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record, index) => {
          return (
            <Button type={'primary'} onClick={() => this.moveToSelectedUserDetail(record)}>
              Detail
            </Button>
          )
        }
      }
    ]

    return (
      <SpinnerWrapper isLoading={isLoading}>
        <div className={'table-container users-list'}>
          <p className={'title'}>Users List</p>
          <Table
            dataSource={usersList}
            columns={columns}
            rowKey={'id'}
            bordered
            scroll={{ x: 600 }}
            pagination={false}
          />
          <div className={'pagination-container'}>
            <Pagination
              defaultCurrent={1}
              total={totalSize}
              onChange={this.onChangePageNum}
            />
          </div>
        </div>
      </SpinnerWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.main.isLoading,
    usersList: state.main.usersList,
    totalSize: state.main.totalSize,
    currentPageNum: state.main.currentPageNum
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: () => {
      dispatch(getUserList())
    },
    onSelectUser: (selectedUserDetail) => {
      dispatch(onSelectUser(selectedUserDetail))
    },
    onChangePageNum: (pageNum) => {
      dispatch(onChangePageNum(pageNum))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)
