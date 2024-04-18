$(document).ready(function() {

    let plan = ""
    let billing_yearly = false
    let addon_online = false
    let addon_storage = false
    let addon_custom = false

    // Validation plugin:

    var step1_name_form = $(".form-input");
    var step1_email_form = $(".email-input");

    $.validator.setDefaults({
        errorClass: "em",
        validClass: "vm",
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        highlight: function(element) {
            $(element).addClass("test")
        },
        unhighlight: function(element) {
        $(element).removeClass("test")
        }   
    });

    step1_name_form.validate({
        rules: {
            text: {
                required: true,
                minlength: 5
              }          
          } ,
          messages: {
              text: {
                  required: "This field is required",
                  minlength: "Please enter at least 5 characters"
              }
          } 
    })
    step1_email_form.validate({
        rules: {
            email: {
                required: true,
                email: true
              }          
          },
        messages: {
            email: {
                required: "This field is required",
                email: "Invalid email address"
            }
        }
    })

    // Next buttons:

    $(".form-step1__next-button").on("click", function() {
        if (step1_name_form.valid() && step1_email_form.valid()) {
            $(".form-step1").addClass('form-step1--disabled');
            $(".form-step2").removeClass('form-step2--disabled')
        }
    })

    $(".form-step2__next-button").on("click", function() {
        if (plan !== "") {
            $(".form-step2").addClass('form-step2--disabled');
            $(".form-step3").removeClass('form-step3--disabled')
        }
    })

    $(".form-step3__next-button").on("click", function() {

        $(".summary-hr").addClass('summary-hr--disabled');
        $(".summary-misc__online").addClass('summary-misc__online--disabled');
        $(".summary-misc__storage").addClass('summary-misc__storage--disabled');
        $(".summary-misc__custom").addClass('summary-misc__custom--disabled');

        let total = 0
        let plan_message = "None"
        let plan_price_message = "$0/mo"
        let total_message = "Total (per month)"
        let total_price_message = "+$0/mo"
       
        if (plan === "arcade") {
            total = total + 9
            plan_message = "Arcade"
            if (billing_yearly === true) {
                plan_price_message = "$90/yr"
            } else {
                plan_price_message = "$9/mo"
            }
        } else if (plan === "advanced") {
            total = total + 12
            plan_message = "Advanced"
            if (billing_yearly === true) {
                plan_price_message = "$120/yr"
            } else {
                plan_price_message = "$12/mo"
            }
        } else if (plan === "pro") {
            total = total + 15
            plan_message = "Pro"
            if (billing_yearly === true) {
                plan_price_message = "$150/yr"
            } else {
                plan_price_message = "$15/mo"
            }
        }

        if (addon_online === true) {
            total = total + 1
            $(".summary-hr").removeClass('summary-hr--disabled');
            $(".summary-misc__online").removeClass('summary-misc__online--disabled');
        }
        if (addon_storage === true) {
            total = total + 2
            $(".summary-hr").removeClass('summary-hr--disabled');
            $(".summary-misc__storage").removeClass('summary-misc__storage--disabled');
        }
        if (addon_custom === true) {
            total = total + 2
            $(".summary-hr").removeClass('summary-hr--disabled');
            $(".summary-misc__custom").removeClass('summary-misc__custom--disabled');
        }

        if (billing_yearly === true) {
            total = total * 10
            total_message = "Total (per year)"
            total_price_message = "$" + total + "/yr"
            plan_message = plan_message + " " + "(Yearly)"
            $(".summary-misc__online-price").text("+10/yr");
            $(".summary-misc__storage-price").text("+20/yr");
            $(".summary-misc__custom-price").text("+20/yr");

        } else {
            total_message = "Total (per month)"
            total_price_message = "+$" + total + "/mo"
            plan_message = plan_message + " " + "(Monthly)"
            $(".summary-misc__online-price").text("+1/mo");
            $(".summary-misc__storage-price").text("+2/mo");
            $(".summary-misc__custom-price").text("+2/mo");
        }

        $(".summary-plan__title").text(plan_message);
        $(".summary-plan__price").text(plan_price_message);
        $(".total-cost__title").text(total_message);
        $(".total-cost__price").text(total_price_message);
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
        $(".form-step2__next-button").removeClass('form-step2__next-button--disabled');
        plan = "arcade"
    })

    $(".advanced-option").on("click", function() {
        $(".advanced-option").toggleClass('advanced-option--active');
        $(".arcade-option").removeClass('arcade-option--active');
        $(".pro-option").removeClass('pro-option--active');
        $(".form-step2__next-button").removeClass('form-step2__next-button--disabled');
        plan = "advanced"
    })

    $(".pro-option").on("click", function() {
        $(".pro-option").toggleClass('pro-option--active');
        $(".advanced-option").removeClass('advanced-option--active');
        $(".arcade-option").removeClass('arcade-option--active');
        $(".form-step2__next-button").removeClass('form-step2__next-button--disabled');
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
})

