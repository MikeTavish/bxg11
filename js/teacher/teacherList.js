/*
 * @Author: roc
 * @Date:   2017-10-18 20:26:06
 * @Last Modified by:   roc
 * @Last Modified time: 2017-10-19 09:14:43
 */

define([
    "jquery",
    "text!tpl/teacherListTpl.html",
    "art",
    "teacher/teacherShow"

], function($, teacherListTpl, art, teacherShow) {

    return function() {

        // $('.main').html(teacherListTpl);

        $.ajax({
            url: "/api/teacher",
            type: "get",
            success: function(res) {
                if (res.code != 200) throw new Error(res.msg);

                var html = art.render(teacherListTpl, res.result);

                var $panel = $(html);

                $panel.on('click', '.btn-show', function() {
                    teacherShow();
                });

                $('.main').html($panel);
            }
        });

    }
})
