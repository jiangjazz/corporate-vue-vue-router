

// 引入外部模块

//var beforeEach = require('./routeBefore.js');
var beforeEach = require('../config/config.js');

// 路由器需要一个根组件。
var App = Vue.extend({
    data: function(){
        return {
        };
    },
    props:{
        title: {
            type: Object,
            default: function(){
                return {
                    first: {
                        type: String,
                        default: '首页'
                    },
                    second: {
                        type: null,
                        default: ''
                    }
                }
            }
        },
        links: {
            type: Array,
            default: function(){
                return [
                    '/',
                    '/index',
                    '/list',
                    '/index/list'
                ];
            }
        }
    }
});

// 创建一个路由器实例,可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()

require('./Module_paging.js')(router);

// 定义路由规则
require('../routes/routes.js')(router);
//router.beforeEach();
beforeEach(router);

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');
//console.log(router.app);
module.exports = function(){
    /*console.log(router);*/
};