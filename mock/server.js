/**
 * Created by gelingyan on 2017/9/13.
 */
const Koa = require('koa')
const Router = require('koa-router')
// const koaBody = require('koa-body');
const app = new Koa()
const router = new Router()
// app.use(koaBody());




router.get('/', ctx => {
    ctx.body = 'Hello Koa'
})

var homeAdData = require('./home/ad')
router.get('/api/homead',  ctx => {
    ctx.body = homeAdData
})

const homeListData = require('./home/list')
router.get('/api/homelist/:city/:page', ctx => {
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page
    console.log(paramsCity)
    console.log(paramsPage)

    ctx.body = homeListData
})

// 开启服务器并生成路由
app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)