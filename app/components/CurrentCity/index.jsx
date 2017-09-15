import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class CurrentCity extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div className="currentCity-container">
                <h2>{this.props.cityName}</h2>
            </div>
        )
    }
}

export default CurrentCity