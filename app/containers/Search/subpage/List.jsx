import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import { getSearchData } from '../../../fetch/search/search'

import './style.less'

const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
}

class SearchList extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = initialState
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
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
        // 获取首页数据
        this.loadFirstPageData()
    }
    // 获取首屏数据
    loadFirstPageData() {
        const cityName = this.props.cityName
        const category = this.props.category
        const keyword = this.props.keyword
        const result = getSearchData(0, cityName, category, keyword)
        this.resultHandle(result)
    }
    // 记载更多
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.userInfo.cityName
        const page = this.state.page
        const category = this.props.category
        const keyword = this.props.keyword
        const result = getSearchData(page, cityName, category, keyword)
        this.resultHandle(result)

        // 更新状态
        this.setState({
            isLoadingMore: false
        })
    }
    // 数据处理
    resultHandle(result) {
        // 增加 page 的计数
        const page = this.state.page
        this.setState({
            page: page + 1
        })

        result.then((res) => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            // 存储
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('搜索页获取数据报错，',ex.message)
            }
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const category = this.props.category
        const keyword = this.props.keyword

        // 搜索条件完全相等时，忽略
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState)

        // 重新加载数据
        this.loadFirstPageData()
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)