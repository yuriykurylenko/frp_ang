$(function() {
    var availability, strength;

    $('#username').keyup(function() {
        if ($('#username').val().length > 4) {
            availability = true;
            $('#availability').html('Available').addClass('text-success').removeClass('text-error');

            if (strength) {
                $('#button').removeAttr('disabled'); 
            }
        } else {
            availability = false;
            $('#availability').html('Not Available').addClass('text-error').removeClass('text-success');               

            if (strength) {
                $('#button').attr('disabled', 'disabled');    
            }      
        }
    });

    $('#password').keyup(function() {
        if ($('#password').val().length > 5) {
            $('#strength').html('Strong').addClass('text-success').removeClass('text-error');

            if (availability) {
                $('#button').removeAttr('disabled'); 
            }
        } else {
            strength = false;
            $('#strength').html('Weak').addClass('text-error').removeClass('text-success');

            if (availability) {
                $('#button').attr('disabled', 'disabled');    
            }                   
        }
    });

    $('#button').click(function() {
        $('#loader').removeClass('hidden');

        setTimeout(function() {
            $('#loader').addClass('hidden');
            $('#message').removeClass('hidden');
        }, 1000);
    });
});