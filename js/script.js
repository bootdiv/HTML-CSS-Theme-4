$(document).ready(function () {

    // Scroll to fixed header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('#header').addClass('header-fixed');
        } else {
            $('#header').removeClass('header-fixed');
        }
    });

    // Navigation scrolls
    $(".menu-sp li a").on('click', function (event) {
        $('.menu-sp li a').removeClass('active');
        $(this).closest('li a').addClass('active');
    });

    // Book Form Validation
    $("#submit").click(function () {
        var form = $("#book_form");
        form.validate({
            errorElement: 'div',
            errorClass: 'invalid-feedback',
            highlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').addClass("has-error");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).closest('.form-group').removeClass("has-error");
            },
            rules: {
                name1: {
                    required: true,
                },
                name2: {
                    required: true,
                },
                email: {
                    required: true,
                },
                phone: {
                    required: true,
                },
                date: {
                    required: true,
                },
                time: {
                    required: true,
                },
                service: {
                    required: true,
                },
                like: {
                    required: true,
                },
                location: {
                    required: true,
                },

            }
        });
        if (form.valid() === true) {
            $(".msg-success").removeClass('d-none');
            window.location.href = 'thank-you.html';
        }
    });

    // Book Form
    $('#book_form').submit(function () {
        var fname = $("#name1").val();
        var lname = $("#name2").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var date = $("#date").val();
        var time = $("#time").val();
        var service = $("#service").val();
        var like = $("#like").val();
        var location = $("#location").val();
        var dataString = 'fname=' + fname + '&lname=' + lname + '&email=' + email + '&phone=' + phone + '&date=' + date + '&time=' + time + '&service=' + service + '&like=' + like + '&location=' + location;
        $.ajax({
            type: "POST",
            url: "php/book-now.php",
            data: dataString,
            cache: false,
            success: function () {}
        });
        return false;
    });

});
