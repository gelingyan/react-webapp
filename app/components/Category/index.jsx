import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

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
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">景点</li></Link>
                            <Link to="search/ktv"><li className="float-left icon-directions_boat">KTV</li></Link>
                            <Link to="search/gouwu"><li className="float-left icon-directions_boat">购物</li></Link>
                            <Link to="search/shenghuofuwu"><li className="float-left icon-directions_boat">生活服务</li></Link>
                            <Link to="search/jianshenhuodong"><li className="float-left icon-directions_boat">健身运动</li></Link>
                            <Link to="search/meifa"><li className="float-left icon-directions_boat">美发</li></Link>
                            <Link to="search/qinzi"><li className="float-left icon-directions_boat">亲子</li></Link>
                            <Link to="search/xiaochikuaican"><li className="float-left icon-directions_boat">小吃快餐</li></Link>
                            <Link to="search/zizhucan"><li className="float-left icon-directions_boat">自助餐</li></Link>
                            <Link to="search/jiuba"><li className="float-left icon-directions_boat">酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">美食</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">电影</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">酒店</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">休闲娱乐</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">外卖</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">火锅</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">丽人</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">度假出行</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">足疗按摩</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">周边游</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">日本菜</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">SPA</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">结婚</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">学习</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">西餐</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">火车票</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">烧烤</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">家装</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">宠物</li></Link>
                            <Link to="search/jingdian"><li className="float-left icon-directions_boat">全部分类</li></Link>
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