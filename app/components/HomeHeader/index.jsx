import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less';

class HomeHeader extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div className="clear-fix">
                <div className="float-left">深圳</div>
                <div className="float-right">用户中心</div>
                <div><input /></div>
            </div>
        )
    }
}

export default HomeHeader