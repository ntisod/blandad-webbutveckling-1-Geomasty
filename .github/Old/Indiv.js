$(document).ready(function() {
    $('select').change(function() {
        if ($('select option[value="' + $(this).val() + '"]:selected').length > 1) {
            $(this).val('-1').change();
            alert('You have already selected this option previously - please choose another.')
        }
    });
});


$(document).ready(function() {
    $("div.answer_list").hide();
    $("input[name$='answer']").click(function() {
        var test = $(this).val();
        $("div.answer_list").hide();
        $("#" + test).show();
    });
});