/**
 * Created by gelingyan on 2017/9/9.
 */
import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'

import RouteMap from './router/routeMap'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()
import './static/css/common.less';
import './static/css/font.css'
render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
