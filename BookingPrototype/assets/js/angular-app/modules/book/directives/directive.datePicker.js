app.directive('datePicker', function () {

    /**
    * @desc setup datepicker for date fields
    */
    var setDatePicker = function (scope, element, attributes) {
        $(function () {
            element.datepicker({
                dateFormat: 'dd/mm/yy',
                minDate: '+0d',
                onClose: function (dateText, inst) {
                    $(this).attr("readonly", false);
                },
                beforeShow: function (input, inst) {
                    $(this).attr("readonly", true).blur();
                }
            });

            $(document).on('click', '.ui-datepicker-calendar a', function (e) {
                e.preventDefault();
            });
        });
    };

    // Return the directive configuration.
    return ({
        link: setDatePicker,
        restrict: "A" // only match attr name
    });
});