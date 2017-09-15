import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import LocalStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'
import {hashHistory} from 'react-router'
import './style.less'
class City extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.userInfo)
        console.log(this.props.userInfoActions)
        console.log(LocalStore)
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userInfo = this.props.userInfo
        userInfo.cityName = newCity
        this.props.userInfoActions.update(userInfo)

        // 修改 localstorage
        LocalStore.setItem(CITYNAME, newCity)

        // 跳转到首页
        hashHistory.push('/')
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
