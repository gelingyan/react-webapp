import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class SearchInput extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input
                type="text"
                className="search-input"
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}/>
        )
    }
    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }
    ChangeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle(e) {
        if (e.keyCode !== 13) {
            return
        }
        this.props.enterHandle(this.state.value)
    }
}

export default SearchInput