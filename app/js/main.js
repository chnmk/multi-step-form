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

    /*
    $(".arcade-option").on("click", function() {
        $(".arcade-option").toggleClass('arcade-option--active');
        $(".form-step1").removeClass('form-step1--disabled')
    })
    */

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

