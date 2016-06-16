/**
 * 路由配置
 */

// 引入外部模块
var template = require('../config/templates.js')();

module.exports = function(router){
    // 定义路由规则
    router.map({
        '/user/list': {
            name: 'userList',
            component: template.List
        }
    });
};