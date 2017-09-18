import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getInfoData } from "../../../fetch/detail/detail";
import DetailInfo from '../../../components/DetailInfo'
import './style.less'
class Info extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.info
                        ? <DetailInfo data={this.state.info}/>
                        : ''
                }
            </div>
        )
    }
    componentDidMount() {
        const id = this.props.id
        const result = getInfoData(id)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        })
    }
}

export default Info