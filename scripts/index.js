AOS.init({

    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 1000,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

$(document).ready(function () {
    var scrollTop = 0;
    var aboutTop = Math.floor($('#AboutMe').offset().top);
    var experienceTop = Math.floor($('#Experience').offset().top);
    var workTop = Math.floor($('#Work').offset().top);
    // var connectTop = Math.floor($('#Connect').offset().top);



    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

        if (scrollTop >= aboutTop && scrollTop <= experienceTop) {

            check();
            $('#AboutNav').addClass('active');

        } else if (scrollTop >= experienceTop && scrollTop <= workTop) {

            check();
            $('#ExpNav').addClass('active');
        } else if (scrollTop >= workTop) {

            check();
            $('#WorkNav').addClass('active');
        }
        else {

            check();
            $('#AboutNav').addClass('active');
        }
    });


    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

});

function check() {
    if ($('#AboutNav').hasClass('active')) {
        $('#AboutNav').removeClass('active');
    }
    if ($('#ExpNav').hasClass('active')) {
        $('#ExpNav').removeClass('active');
    }
    if ($('#WorkNav').hasClass('active')) {
        $('#WorkNav').removeClass('active');
    }
}

function openFunc(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

document.getElementById("copyright").innerHTML = new Date().getFullYear();

document.getElementById("bofa").innerHTML= "Present - July 2021 "+getTimeDiff(new Date('2021-06-30'));

function getTimeDiff(dt2) 
{
    let dt1 = new Date().toISOString().slice(0, 10);    
    let diffDays = (new Date(dt1)-new Date(dt2))/(3600000*24);
    let diffMonths = Math.round((diffDays/30)%12);
    let diffYears = Math.floor((diffDays/30)/12);
    console.log(diffYears,diffMonths,diffDays);
    let msg = "";
    let flag= false;

    if(diffYears > 0){
        msg += diffYears+" year";
        flag = true;
    }
    if(diffMonths > 0){
        if (flag) msg += " and "
        msg += diffMonths +" months"; 
    }
    
    if(msg.length > 0){
        msg="("+msg+")";
    }

    return msg;
}