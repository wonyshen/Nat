
$(document).ready(function () {

    $('.card_portfolio').click(function () {
        var url = $(this).find('.view_project').attr('href');
        window.location.href = url;
    });

    $('.icon-custom').click(() => {
        $('.ul_menu').toggle(500);
        $('.icon-custom').toggleClass('active_custom');
    });


    $('.scroll_content').click(function (event) {
        event.preventDefault();

        var targetScroll = $(this).attr('href');
        if (targetScroll) {
            if ($(window).width() <= 765) {
                $('html, body').animate({
                    scrollTop: $(targetScroll).offset().top
                }, 1000);
            } else if ($(window).width() > 765) {
                $('html, body').animate({
                    scrollTop: $(targetScroll).offset().top - 43
                }, 1000);
            }
        }

    });

    $('.scroll_content_page').click(function (event) {

        var targetScroll = $(this).attr('href');
        if (targetScroll) {
            if ($(window).width() <= 765) {
                $('html, body').animate({
                    scrollTop: $(targetScroll).offset().top
                }, 1000);
            } else if ($(window).width() > 765) {
                $('html, body').animate({
                    scrollTop: $(targetScroll).offset().top - 43
                }, 1000);
            }
        }

    });


    $('.menu_select .content_item').hover(

        function () {
            if (!$(this).hasClass('active')) {
                $('.active').css('box-shadow', '0px -2px 0px 0px rgba(0, 0, 0, 0.25) inset')
                $('.active img').css('visibility', 'hidden')
                $('.item_04').addClass('hover_04');
            }

        },
        function () {

            $('.active').css('box-shadow', '-3px 1px 0px 0px #00000040 inset, 2px 0px 0px 0px #00000040 inset')
            $('.active img').css('visibility', 'visible');
            $('#portfolio_hover').css('box-shadow', '-3px 1px 0px 0px #00000040 inset');
            $('.item_04').removeClass('hover_04');

        }
    )


    var menuContent = $('.menu_content');
    var fixMenuSelect = $('.menu_select');
    if (menuContent.length) {
        var menuContentOffset = menuContent.offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() >= menuContentOffset) {
                fixMenuSelect.addClass('fix_menu_select');
            } else {
                fixMenuSelect.removeClass('fix_menu_select');
            }
        });
    }
    $('#frmContactForm').submit(function (e) {
        e.preventDefault(); // Prevent normal form submission
        var emailInput = $('.email');
        var requiredIcon = $('.required-icon');

        if (!emailInput.val()) {

            requiredIcon.addClass('hide');
            return false;
        } else {
            requiredIcon.removeClass('hide');
        }
        // Serialize form data
        var formData = $(this).serialize();
        $('#frmSubmit').val('Sending...')
        $('#frmSubmit').prop('disabled', true);
        // AJAX call
        $.ajax({
            type: 'POST',
            url: 'submit.php', // PHP script to handle form submission
            data: formData,
            success: function (response) {
                // Handle success response
                $('.form-result').show();
                $('#frmSubmit').val('Submit')
                $('#frmSubmit').prop('disabled', false);
                if (response == 1) {
                    $('.form-result').addClass('success');
                    $('.form-result').text('Your message has been sent.')
                }
                else {
                    $('.form-result').addClass('error');
                    $('.form-result').text('Oops! Something went wrong.')
                }

            },
            error: function (xhr, status, error) {
                // Handle errors
                console.error(xhr.responseText);
            }
        });
    });
});
$(window).on('scroll', function () {
    var scrollPosition = $(window).scrollTop();
    var menu = $('.menu_custom');


    var scrollPos = $(window).scrollTop();
    var temp = ""
    $('.ul_menu a').each(function () {
        var target = $(this).attr('href');

        if ($(target).length) {
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();

            if (scrollPos + 30 >= targetPos && scrollPos < targetPos + targetHeight - 30) {
                $(this).find('.hover_show').css('opacity', '1');
                temp = ""
                temp = target + '_id';

            } else {

                $(this).find('.hover_show').css('opacity', '0');

            }
        }

    });


    $(function () {

        $(".popup-content-images img").click(function () {
            var $src = $(this).attr("src");
            $(".popupContainer").fadeIn();
            $(".popImage img").attr("src", $src);
        });

        $(".bi-x, .popUpBackground").click(function () {
            $(".popupContainer").fadeOut();
        });

    });


});

