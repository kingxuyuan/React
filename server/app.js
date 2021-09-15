const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const DB = require('./connect');

const app = new Koa();
const router = new Router();


const sql ='select * from users';


router.get('/', async (ctx, next) => {
    ctx.body = 'hello world';
    await next();
})
router.get('/users', koaBody(), async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin","*");
    var result = await DB.query(sql);
    console.log(result);
    ctx.body = JSON.stringify(result);
    await next();
})

app.use(router.routes());

app.listen(5000, () => {
    console.log('服务启动,，监听端口：5000');
});