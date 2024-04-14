$(document).ready(function() {

    // Next buttons:

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

    // Back buttons:

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

    // Step 2:

    $(".arcade-option").on("click", function() {
        $(".arcade-option").toggleClass('arcade-option--active');
        $(".advanced-option").removeClass('advanced-option--active');
        $(".pro-option").removeClass('pro-option--active');
    })

    $(".advanced-option").on("click", function() {
        $(".advanced-option").toggleClass('advanced-option--active');
        $(".arcade-option").removeClass('arcade-option--active');
        $(".pro-option").removeClass('pro-option--active');
    })

    $(".pro-option").on("click", function() {
        $(".pro-option").toggleClass('pro-option--active');
        $(".advanced-option").removeClass('advanced-option--active');
        $(".arcade-option").removeClass('arcade-option--active');
    })

    $(".billing-switch__slider").on("click", function() {
        $(".billing-options__monthly").toggleClass('billing-options__monthly--active');
        $(".billing-options__yearly").toggleClass('billing-options__yearly--active');
        $(".arcade-option__free").toggleClass('arcade-option__free--disabled');
        $(".advanced-option__free").toggleClass('advanced-option__free--disabled');
        $(".pro-option__free").toggleClass('pro-option__free--disabled');
    })

    // Validation:

    $.validator.setDefaults({
        submitHandler: function() { alert("submitted!"); },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        }
    });
    
    $("#commentForm").validate({
        errorClass: "em",
        validClass: "vm",
        highlight: function(element, errorClass) {
            $(element).addClass("test")
          },
        unhighlight: function(element, errorClass) {
        $(element).removeClass("test")
        }
    });

    /* Custom messages example:

    $("#myform").validate({
        rules: {
            name: "required",
            email: {
            required: true,
            email: true
            }
        },
    })


    $("#myform").validate({
        rules: {
            name: {
            required: true,
            minlength: 2
            }
        }
    )}

    */

})

