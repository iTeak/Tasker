$(document).ready(function(){
var userinput =[]
var time = moment().hour();
// Set today's date 
function currentday(){
  
  var today = moment().format('dddd, MMMM Do')
$('#currentDay').text(today);
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

localStorage.setItem(inp, inputId);
//



























})