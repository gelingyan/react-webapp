import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'
import {hashHistory} from 'react-router'
import LoginComponent from '../../components/Login'

import './style.less'
class Login extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                    ? <div>{/* 等待中 */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}></LoginComponent>
                }
            </div>
        )
    }
    componentDidMount() {
        this.doCheck()
    }
    // 登录成功之后的处理
    loginHandle(username) {
        // 保存用户名
        const actions = this.props.userInfoActions
        let userInfo = this.props.userInfo
        userInfo.username = username
        actions.update(userInfo)

        // 跳转连接
        const params = this.props.params
        const router = params.router
        if (router) {
            // 跳转到🈯️的页面
            hashHistory.push(router)
        } else {
            // 跳转到默认页面 用户中心
            hashHistory.push('/user')
        }
    }
    doCheck() {
        const userInfo = this.props.userInfo
        if (userInfo.username) {
            // 已登录
            this.goUserPage()
        } else {
            // 未登录
            this.setState({
                checking: false
            })
        }
    }
    goUserPage() {
        hashHistory.push('/user')
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
