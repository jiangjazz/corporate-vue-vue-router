module.exports = function(router){
    var ajaxGetData = {
        //分配路由
        userList: function(data, transition){
            console.log('userList 路由');
            $.ajax({
                url: 'get2.php',
                data: data,
                type: 'post',
                dataType: 'json',
                success: function(req) {
                    //console.log(req);
                    router.app.title.first = 'User';
                    router.app.title.second = 'User列表';
                    transition.next();
                },
                error: function(res) {}
            });
        }
    };


    return ajaxGetData;
};