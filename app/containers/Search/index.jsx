import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

import './style.less'
class Search extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
    componentDidMount() {

    }
}

export default Search