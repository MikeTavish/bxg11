/*
 * @Author: roc
 * @Date:   2017-10-18 16:31:54
 * @Last Modified by:   roc
 * @Last Modified time: 2017-10-18 20:59:35
 */
require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery-2.1.4",
        bootstrap: "../assets/bootstrap/js/bootstrap",

        art: "lib/template-web",
        text: "lib/text",

        tpl: "../tpl"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        }
    }
});

require(["jquery","teacher/teacherList"], function($,teacherList) {
    $('.list-group').on('click', 'a', function() {
        var $item = $(this).attr('item');
        console.log($item);

        switch ($item) {
            case "teacher":
                console.log(teacherList());
                break;
            case "course":
                $('.main').html("课程管理");
                break;
            case "course-add":
                $('.main').html("添加课程");
                break;
            case "category":
                $('.main').html("课程分类");
                break;
            case "chart":
                $('.main').html("图表统计");
                break;
        };

        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.list-group a[item=teacher]').trigger('click');

});
