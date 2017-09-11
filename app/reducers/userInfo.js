/**
 * Created by gelingyan on 2017/9/11.
 */
import * as actionTypes from '../constants/userInfo'

const initiaState = {}

export default function userInfo(state = initiaState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}