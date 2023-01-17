
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY', 'h:mm A'));

function timeAdjust() {
    
    var totalHours = dayjs().hour();

  
    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr('id').split('-')[1]);

       
        if (timeBlock < totalHours) {
            $(this).addClass('past');
        } else if (timeBlock === totalHours) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

timeAdjust();

$(document).ready(function () {
   
    $('.saveBtn').on('click', function () {
     
        var saveSiblings = $(this).siblings('.description').val();
        var saveParent= $(this).parent().attr('id');

        localStorage.setItem(saveParent, saveSiblings);

        $('.scheduling').addClass('scheduled');
        // Shows the event scheduled header for 3 seconds 
        setTimeout(function () {
            $('.scheduling').removeClass('scheduled');
        }, 3000);
    });

    setInterval(timeAdjust, 15000);

    //gets the value from local storage

    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
    $('#hour-19 .description').val(localStorage.getItem('hour-19'));
    $('#hour-20 .description').val(localStorage.getItem('hour-20'));
    $('#hour-21 .description').val(localStorage.getItem('hour-21'));


});