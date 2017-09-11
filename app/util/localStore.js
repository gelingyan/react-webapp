/**
 * Created by gelingyan on 2017/9/11.
 */
export default {
    getItem: function (key) {
        let value
        try {
            value = localStorage.getItem(key)
        } catch (ex) {
            // 开发环境下提示 error
            if (__DEV__) {
                console.error('localStorage.getItem报错，' + ex.error)
            }
        } finally {
            return value
        }
    },
    setItem: function (key, value) {
        try {
            // ios safari 无痕环境下，直接使用 localStorage.setItem 报错
            localStorage.setItem(key, value)
        } catch (ex) {
            if (__DEV__) {
                console.log('localStorage.setItem报错，' + ex.error)
            }
        }
    }
}
