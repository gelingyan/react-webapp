import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import Detail from '../containers/Detail/index'
import NotFound from '../containers/404'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/user' component={User}/>
                    <Route path='/search/:type(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap