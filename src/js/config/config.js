/**
 * 配置文件
 */
module.exports = function(router){
    //路由调用ajax
    var ajaxGetData = require('../controllers/controllers.js')(router);

    router.beforeEach(function(transition) {
        var data = transition.to.query,
            canGo = false;
        var path = {
            //分配路由
            userList: /^\/user\/list(\/)?(\?[\s\S]*)?$/gi
        };
        console.log(transition.to.path);
        for(var i in path){
            //console.log(i);
            if(path[i].test(transition.to.path)){
                console.log(i);
                ajaxGetData[i](data, transition);
                break;
            }
        }
    });
};