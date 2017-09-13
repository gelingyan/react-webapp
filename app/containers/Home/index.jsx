import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import { connect } from 'react-redux'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category/>
                <div style={{height: '15px'}}></div>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}

//  export default Home

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)