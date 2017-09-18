import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from "../../../fetch/detail/detail";
import CommentList from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'
import './style.less'
class Comment extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,    // "加载中..."  "点击加载更多"
            page: 1     // 下一页的页码
        }
    }
    render() {
        return (
            <div className="comment-container">
                 <h2>用户点评</h2>
                 {
                    this.state.data.length
                    ? <CommentList data={this.state.data}/>
                     : <div>加载中...</div>
                 }
                 {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                 }
                
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstPageData()
    }
        // 获取首屏数据
    loadFirstPageData() {
        const id = this.props.id
        const result = getCommentData(0, id)
        this.resultHandle(result)
    }
    // 加载更多
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })
        const id = this.props.id
        const page = this.state.page // 下一页
        const result = getCommentData(page, id)
        this.resultHandle(result)

        // 增加 page 的计数
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            // 存储
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        })
    }
}

export default Comment