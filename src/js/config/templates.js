// 定义组件对象
var temp = {};

//引入模板
var Index = require('../../components/index.html'),
    List = require('../../components/list.html');

// 定义组件
temp.Index = Vue.extend({
    template: Index
});
temp.List = Vue.extend({
    template: List
});


module.exports = function(){

    return temp;
};