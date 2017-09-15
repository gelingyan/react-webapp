import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class User extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <h1>User</h1>
        )
    }
}

export default User