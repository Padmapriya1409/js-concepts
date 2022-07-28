// variables --> to declare a data and also associate some memory allocation

// three Datatypes --> var, let ,const
// var --> can reassign and redeclare
// let --> can't redeclare but reassign a name 
// const --> can't declare and reassign

// var keyword || variable name = variable value ,It can reassign the value

var movie = "GreyMan"
var age = 39
var isTrue = true
var myData = undefined
var obj = {id:1,itData:true,toData:"padhu",toData1:["priya","padma"],hee:undefined}
var arr =["padmapriya","value","card"]
var arr =[{name:"padmapriya"},{name:"value"},{name:"card"}]
// var movie = "IronMan"

// let doesn't redeclare anymore ,it cam only error || orelse we can not mention keyword let ,can use only name ,it came output
let movie = "IronMan"

movie ="DuckMan"

console.log(movie)

// const can assign once only ,doesn't reassign and to redeclare name to ,can modify any changes
const movie ="PartyPool"


hello;
console.log(hello)  //not defined

var hello;
console.log(hello)  //undefined

console.log(obj.toData)
console.log(obj.toData1[1]) //can represent a index value also,which specific value has to be needed

console.log(arr[1])
console.log(arr[1].name) //array of objects