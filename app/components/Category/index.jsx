import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
    constructor(props, content) {
        super(props, content)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            index: 0
        }
    }
    render() {
        var opt = {
        //    auto: 2000,
            continuous: false,
            callback: (index) => {
                this.setState({index: index})
            }
        }
        return (
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left icon-directions_boat">景点</li>
                            <li className="float-left icon-directions_boat">KTV</li>
                            <li className="float-left icon-directions_boat">购物</li>
                            <li className="float-left icon-directions_boat">生活</li>
                            <li className="float-left icon-directions_boat">健身运动</li>
                            <li className="float-left icon-directions_boat">美发</li>
                            <li className="float-left icon-directions_boat">亲子</li>
                            <li className="float-left icon-directions_boat">小吃快餐</li>
                            <li className="float-left icon-directions_boat">自助餐</li>
                            <li className="float-left icon-directions_boat">酒吧</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left icon-directions_boat">美食</li>
                            <li className="float-left icon-directions_boat">电影</li>
                            <li className="float-left icon-directions_boat">酒店</li>
                            <li className="float-left icon-directions_boat">休闲娱乐</li>
                            <li className="float-left icon-directions_boat">外卖</li>
                            <li className="float-left icon-directions_boat">火锅</li>
                            <li className="float-left icon-directions_boat">丽人</li>
                            <li className="float-left icon-directions_boat">度假出行</li>
                            <li className="float-left icon-directions_boat">足疗按摩</li>
                            <li className="float-left icon-directions_boat">周边游</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left icon-directions_boat">日本菜</li>
                            <li className="float-left icon-directions_boat">SPA</li>
                            <li className="float-left icon-directions_boat">结婚</li>
                            <li className="float-left icon-directions_boat">学习</li>
                            <li className="float-left icon-directions_boat">西餐</li>
                            <li className="float-left icon-directions_boat">火车票</li>
                            <li className="float-left icon-directions_boat">烧烤</li>
                            <li className="float-left icon-directions_boat">家装</li>
                            <li className="float-left icon-directions_boat">宠物</li>
                            <li className="float-left icon-directions_boat">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? 'selected': ''}></li>
                        <li className={this.state.index === 1 ? 'selected': ''}></li>
                        <li className={this.state.index === 2 ? 'selected': ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
    // componentDidMount() {
    //     console.log(ReactSwipe)
    // }
}

export default Category