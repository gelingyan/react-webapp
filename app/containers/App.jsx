import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                <p>header</p>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>加载中...</div>
                }
                <p>footer</p>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                initDone: true
            })
        }, 1000)
    }
}

export default App