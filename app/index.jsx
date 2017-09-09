/**
 * Created by gelingyan on 2017/9/9.
 */
import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'

import RouteMap from './router/routeMap'

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)
