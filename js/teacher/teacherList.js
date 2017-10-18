/*
 * @Author: roc
 * @Date:   2017-10-18 20:26:06
 * @Last Modified by:   roc
 * @Last Modified time: 2017-10-18 21:39:58
 */

define([
    "jquery",
    "text!tpl/teacherListTpl.html",
    "art"

], function($, teacherListTpl, art) {

    return function() {

        // $('.main').html(teacherListTpl);

        $.ajax({
            url: "/api/teacher",
            type: "get",
            success: function(res) {
                console.log(res);
                if (res.code != 200) throw new Error(res.msg);

                var html = art.render(teacherListTpl, res.result);

                $('.main').html(html);
            }
        });

    }
})
