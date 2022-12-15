$(document).ready(function(){

// Set today's date 
function currentday(){
  var today = moment().hours();
$('#currentDay').text(moment().format('dddd, MMMM Do'));
}
currentday()


//Logic for past, current, and past 





//Logic to collect user input 
$(saveBtn).on('click',function(){
  var container = $(this).parent().parent();  
    var inputValue = container.find("input").val();
    var inputId = container.find("input").attr("id")
})


//Logic to save into local storage 


//



























})