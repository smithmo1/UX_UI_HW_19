
console.log("Your index.js file is loaded correctly!");
$("#myID").on("click", function (){ console.log ("You clicked on #myID");});

$("#myID").on("click", function(){
    $(".fadeMe").fadeToggle("slow")
}