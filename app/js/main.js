$(document).ready(function() {


    let plan = ""
    let billing_yearly = false
    let addon_online = false
    let addon_storage = false
    let addon_custom = false
    let total = 0
    let total_message = ""

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
       
        if (plan === "arcade") {
            total = total + 9
        } else if (plan === "advanced") {
            total = total + 12
        } else if (plan === "pro") {
            total = total + 15
        }

        if (addon_online === true) {
            total = total + 1
        }
        if (addon_storage === true) {
            total = total + 2
        }
        if (addon_custom === true) {
            total = total + 2
        }

        if (billing_yearly === true) {
            total = total * 10
            total_message =  total + "/yr"
        } else {
            total_message = "+" + total + "/mo"
        }

        
        $(".total-cost__price").text(total_message);
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
        plan = "arcade"
    })

    $(".advanced-option").on("click", function() {
        $(".advanced-option").toggleClass('advanced-option--active');
        $(".arcade-option").removeClass('arcade-option--active');
        $(".pro-option").removeClass('pro-option--active');
        plan = "advanced"
    })

    $(".pro-option").on("click", function() {
        $(".pro-option").toggleClass('pro-option--active');
        $(".advanced-option").removeClass('advanced-option--active');
        $(".arcade-option").removeClass('arcade-option--active');
        plan = "pro"
    })

    $(".billing-switch__slider").on("click", function() {
        $(".billing-options__monthly").toggleClass('billing-options__monthly--active');
        $(".billing-options__yearly").toggleClass('billing-options__yearly--active');
        $(".arcade-option__free").toggleClass('arcade-option__free--disabled');
        $(".advanced-option__free").toggleClass('advanced-option__free--disabled');
        $(".pro-option__free").toggleClass('pro-option__free--disabled');
        billing_yearly = !billing_yearly
    })

    // Step 3:

    $(".add-online").on("click", function() {
        $(".add-online__checkbox").toggleClass('add-online__checkbox--enabled');
        $(".add-online").toggleClass('add-online--enabled');
        addon_online = !addon_online
    })
    $(".add-storage").on("click", function() {
        $(".add-storage__checkbox").toggleClass('add-storage__checkbox--enabled');
        $(".add-storage").toggleClass('add-storage--enabled');
        addon_storage = !addon_storage

    })
    $(".add-custom").on("click", function() {
        $(".add-custom__checkbox").toggleClass('add-custom__checkbox--enabled');
        $(".add-custom").toggleClass('add-custom--enabled');
        addon_custom = !addon_custom
    })

    // Step 4:

    $(".summary-plan__change").on("click", function() {
        $(".form-step4").addClass('form-step4--disabled');
        $(".form-step2").removeClass('form-step2--disabled')
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

