$(document).ready(function(){
var userinput =[]
var time = moment().hour();
var textarea = document.querySelector("#text")
// Set today's date 
function currentday(){ 
var today = moment().format('dddd, MMMM Do')
$('#currentDay').text(today);
}
currentday()
console.log(time)
//Logic for past, current, and past 
for (var i=0;i<timeids.length; i++){
  var timeids2 = parseInt(["9", "10", "11", "12", "13", "14", "15", "16","17"])
  if (timeids2 < time) {
    $(timeids).addClass('past');
  }
  else if (timeids2 === time){
$(timeids).addClass('present');
  }
  else{
    $(timeids).addClass('future');
  }
  console.log(timeids2)
}
//Logic to collect user input 
$(".saveBtn").on('click',function(){
  // this is to save indivudally 
  // console.log(this) 
  // var $row = $(this).closest(".row")  
  //   var inputValue = $row.find("input").val();
  //   var inputId = $row.find("input").attr("id")
  //   console.log(inputId)

var $container = $("#hours")
var $taskInputs = $container.find("textarea")
console.log($taskInputs)
var tasktexts = []
var tasks = $taskInputs.map(function(a, textarea){
  // console.log(a,b)
  tasktexts.push(textarea.value)
  return textarea.value
  
})
// console.log(tasktexts)
localStorage.setItem("tasks", JSON.stringify(tasktexts))

})
//Logic to save into local storage 

var loaded = localStorage.getItem("tasks")
if (loaded){
var loadedtasks =  JSON.parse(loaded)
for (var i = 0; i< loadedtasks.length; i++){
  var loadedtask = loadedtasks[i]
  $(".row").find("textarea").eq(i).val(loadedtask)
}
}
//



























})




// localStorage.getItem("pokeball")
// null
// var caught = localStorage.getItem("pokeball")
// undefined
// caught
// null
// if (caught)console.log(caught)
// undefined
// localStorage.setItem("pokeball", "pikachu")
// undefined
// var caught = localStorage.getItem("pokeball")
// undefined
// if (caught)console.log(caught)
// VM501:1 pikachu
// undefined
// localStorage.setItem("box", ["cup", "pencil", "peanuts", "", "choclate"])
// undefined
// localStorage.getItem("box")
// 'cup,pencil,peanuts,,choclate'
// localStorage.setItem("box", JSON.stringify(["cup", "pencil", "peanuts", "", "choclate"]))
// undefined
// localStorage.getItem("box")
// '["cup","pencil","peanuts","","choclate"]'
// JSON.parse(localStorage.getItem("box"))
// (5) ['cup', 'pencil', 'peanuts', '', 'choclate']