import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class loadMore extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMorehandle.bind(this)}>加载更多</span>
                }

            </div>
        )
    }
    loadMorehandle() {
        this.props.loadMoreFn()
    }
    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper

        // 截流
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 当 "加载更多" 出现在可视窗口之内时 执行加载更多的方法
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }, false)
    }
}

export default loadMore