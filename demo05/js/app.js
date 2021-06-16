
var fs= require('fs');

fs.readFile('demo.html' ,function(err,data){
    if(err){
        console.log("Error is : "+err);
    }
    else{
        console.log("Data is : "+data);
    }
});



fs.writeFile('demo.html' ,'Hello me !',function(err){
    if(err){
        console.log("Error is : "+err);
    }
    else{
        console.log("Saved !");
    }
});


fs.appendFile('demo.html','Hello123' ,function(err,data){
    if(err){
        console.log("Error is : "+err);
    }
    else{
        console.log("Updated !");
    }
});