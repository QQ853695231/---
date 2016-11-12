/**
 * Created by Devil on 2016/11/12.
 */
jQuery(function () {
    window.setInterval(function () {
        var time=dateToStr_yyyy_mm_dd_hh_mm_ss(new Date());
        var year=time.split(" ")[0].split("-")[0];
        var year_one=year.substring(0,1);
        var year_two=year.substring(1,2);
        var year_three=year.substring(2,3);
        var year_four=year.substring(3,4);

        var month =time.split(" ")[0].split("-")[1];

        var month_one=month.substring(0,1);
        var month_two=month.substring(1,2);

        var day=time.split(" ")[0].split("-")[2];
        var day_one=day.substring(0,1);
        var day_two=day.substring(1,2);

        var hour=time.split(" ")[1].split(":")[0];
        var hour_one=hour.substring(0,1);
        var hour_two=hour.substring(1,2);

        var minute=time.split(" ")[1].split(":")[1];
        var minute_one=minute.substring(0,1);
        var minute_two=minute.substring(1,2);

        var second=time.split(" ")[1].split(":")[2];
        var second_one=second.substring(0,1);
        var second_two=second.substring(1,2);
        turnpage(".year_one",year_one);
        turnpage(".year_two",year_two);
        turnpage(".year_three",year_three);
        turnpage(".year_four",year_four);

        turnpage(".month_two",month_two);
        turnpage(".month_one",month_one);

        turnpage(".day_two",day_two);
        turnpage(".day_one",day_one);

        turnpage(".hour_two",hour_two);
        turnpage(".hour_one",hour_one);

        turnpage(".minute_two",minute_two);
        turnpage(".minute_one",minute_one);

        turnpage(".second_two",second_two);
        turnpage(".second_one",second_one);
    },1000);
});
function turnpage(targetpageselector,currentnumber) {
        if(!jQuery(targetpageselector+" .pages div:contains('"+currentnumber+"')").hasClass("currentpage"))
        {
            var $currentpage=jQuery(targetpageselector+" .currentpage").addClass("pagedown");
            jQuery(targetpageselector+" .pages div:contains('"+currentnumber+"')").addClass("currentpage");
            window.setTimeout(function () {
                $currentpage.css("display","none");
                $currentpage.removeClass("currentpage pagedown");
                window.setTimeout(function () {
                    $currentpage.show();
                },500);
            },1100);

        }

}