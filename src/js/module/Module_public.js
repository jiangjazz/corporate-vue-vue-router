/********************
 * 首页通用功能
 */


module.exports =  function(){


    var actions = {
        //导航切换二级菜单显示隐藏
        toggleList: function(){
            var arrow = $(this).find('.arrowIcon'),
                li = $(this).closest('.item');
            //UI
            if(li.hasClass('slideDown')){
                li.removeClass('slideDown');
            }else{
                $('.m-nav .item').removeClass('slideDown');
                li.addClass('slideDown');
            }
            $('.m-nav .item').removeClass('active');
            li.addClass('active');
        },
        //前往二级菜单
        goSecondNav: function(){
            var list = $(this).closest('.u-list');
            //UI
            $('.m-nav .u-list a').removeClass('active');
            $(this).addClass('active');
        },
        //低分辨率显示nav栏
        showNav: function(){
            $('.m-nav, .m-body').addClass('active');
            $('.m-navShade').show();
        },
        //低分辨率隐藏nav栏
        hideNav: function(){
            $('.m-nav, .m-body').removeClass('active');
            $('.m-navShade').hide();
        }
    };

    $(function(){
        //导航切换二级菜单显示隐藏
        $('.m-nav .title').on('click', actions.toggleList);
        //前往二级菜单
        $('.m-nav .u-list a').on('click', actions.goSecondNav);
        //低分辨率显示nav栏
        $('.m-head .showNav').on('click', actions.showNav);
        //低分辨率隐藏nav栏
        $('.m-navShade').on('click', actions.hideNav);
    });

}