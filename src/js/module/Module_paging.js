/**
 * [分页]
 */


module.exports = function(router){
    var Paging = Vue.extend({
        data: function(){
            return {
                goPage: 1
            }
        },
        props: {
            activePage: {
                type: Number,
                required: true
            },
            maxPage: {
                type: Number,
                required: true
            },
            path: {
                type: String,
                required: true
            }
        },
        methods: {
            numberOnly: function(){
                var pattern = /[^0-9]*/gi;
                this.goPage += '';
                this.goPage = this.goPage.replace(pattern, '');
                if(this.goPage !== ''){
                    this.goPage = parseInt(this.goPage);
                    if(this.goPage > this.maxPage){
                        this.goPage = this.maxPage;
                    }
                }
            },
            jumpPage: function(){
                if(this.goPage !== ''){
                    router.go({
                        path: this.path,
                        query: {
                            page: this.goPage
                        }
                    });
                }
            }
        },
        template: '<div class="ui right floated search goPage">'+
                        '<span>'+
                            '跳转至第'+
                            '<div class="ui input">'+
                                '<input type="text" v-model="goPage" placeholder="页码" @keyup="numberOnly" @keyup.enter="jumpPage">'+
                            '</div>'+
                            '页'+
                        '</span>'+
                        '<a v-link="goPage === \'\'?\'\':path + \'?page=\'+goPage">'+
                        '<button class="ui button">确定 </button>'+
                        '</a>'+
                    '</div>'+
                    '<div class="ui right floated pagination menu">'+
                        '<a class="icon item"> <i class="left chevron icon"></i>'+
                        '</a>'+

                        '<template v-if="activePage<=3">'+
                            '<template v-if="maxPage-activePage>2">'+
                                '<template v-for="I in activePage+2 ">'+
                                    '<a v-link="path + \'?page=\'+(I+1)" class="item" :class="(I+1) === activePage ? \'active\' : \'\'">{{I+1}}</a>'+
                                '</template>'+
                                '<span class="item">...</span>'+
                            '</template>'+

                            '<template v-else>'+
                                '<template v-for="I in maxPage">'+
                                    '<a v-link="path + \'?page=\'+(I+1)" class="item" :class="(I+1) === activePage ? \'active\' : \'\'">{{I+1}}</a>'+
                                '</template>'+
                            '</template>'+
                        '</template>'+


                        '<template v-else>'+
                            '<span class="item">...</span>'+

                            '<template v-if="(maxPage-activePage)>2">'+
                                '<template v-for="I in (activePage+2)">'+
                                    '<template v-if="activePage-(I+1)<=2">'+
                                        '<a v-link="path + \'?page=\'+(I+1)" class="item" :class="(I+1) === activePage ? \'active\' : \'\'">{{I+1}}</a>'+
                                    '</template>'+
                                '</template>'+
                                '<span class="item">...</span>'+
                            '</template>'+

                            '<template v-else>'+
                                '<template v-for="I in maxPage">'+
                                    '<template v-if="activePage-(I+1)<=2">'+
                                        '<a v-link="path + \'?page=\'+(I+1)" class="item" :class="(I+1) === activePage ? \'active\' : \'\'">{{I+1}}</a>'+
                                    '</template>'+
                                '</template>'+
                            '</template>'+
                        '</template>'+


                        '<a class="icon item"> <i class="right chevron icon"></i>'+
                        '</a>'+
                    '</div>'
    });
    Vue.component('my-paging', Paging);
};