$(document).ready(function(){
    var array = ["2025-09-10"];

    $('#Booking0').datepicker({
        minDate: '0',
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [ array.indexOf(string) == -1 ]
        }
    });
    $('#Booking1').datepicker({        
        minDate: '0',
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [ array.indexOf(string) == -1 ]
        }
    });

    $('#Booking2').datepicker({
        minDate: '0',
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [ array.indexOf(string) == -1 ]
        }
    });
    
});