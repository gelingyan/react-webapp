/**
 * Created by gelingyan on 2017/9/11.
 */
import * as actionTypes from '../constants/userInfo'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}