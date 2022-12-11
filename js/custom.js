$(document).ready(function(){
    $('#development_tab').responsiveTabs({
        startCollapsed: 'accordion',
        setHash: false,
        duration: 500,
        animation: 'slide'
    });
    $('.next_step').click(function () {
        $('.admission_inquiry .r-tabs-state-active').next('.r-tabs-state-default').children('.r-tabs-anchor').trigger('click');
    });
    $('.prev_step').click(function () {
        $('.admission_inquiry .r-tabs-state-active').prev('.r-tabs-state-default').children('.r-tabs-anchor').trigger('click');
    });
    setTimeout(function(){
        $('.admission_inquiry .development_tab_content.active_tab_on_load .r-tabs-anchor').trigger('click');
    },100);

    // testimonials slider
    $('.testimonials_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });
});