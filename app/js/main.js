$(document).ready(function() {

    //

    $(".form-step1__next-button").on("click", function() {
        $(".form-step1").addClass('form-step1--disabled');
        $(".form-step2").removeClass('form-step2--disabled')
    })
    $(".form-step2__next-button").on("click", function() {
        $(".form-step2").addClass('form-step2--disabled');
        $(".form-step3").removeClass('form-step3--disabled')
    })
    $(".form-step3__next-button").on("click", function() {
        $(".form-step3").addClass('form-step3--disabled');
        $(".form-step4").removeClass('form-step4--disabled')
    })
    $(".form-step4__next-button").on("click", function() {
        $(".form-step4").addClass('form-step4--disabled');
        $(".form-step5").removeClass('form-step5--disabled')
    })

    //

    $(".form-step2__back-button").on("click", function() {
        $(".form-step2").addClass('form-step2--disabled');
        $(".form-step1").removeClass('form-step1--disabled')
    })
    $(".form-step3__back-button").on("click", function() {
        $(".form-step3").addClass('form-step3--disabled');
        $(".form-step2").removeClass('form-step2--disabled')
    })
    $(".form-step4__back-button").on("click", function() {
        $(".form-step4").addClass('form-step4--disabled');
        $(".form-step3").removeClass('form-step3--disabled')
    })

    //

})