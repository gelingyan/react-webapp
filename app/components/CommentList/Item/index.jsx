import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star'

import './style.less'
class Item extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        const data = this.props.data
        return (
            <div className="comment-item">
                <div className="item-content">
                   <p className="item-phone">
                        <i className="icon-person"></i>
                        {
                            data.phone.substring(0, 3) + '****' + data.phone.substring(7, 11)
                        }
                    </p>
                   <div className="star-container">
                        <Star star={data.star}/>
                   </div>
                   <p className="comment">{data.comment}</p>
                </div>
            </div>
        )
    }
}

export default Item