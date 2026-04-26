
  // jQuery() = $()

// let le = $("li:nth-child(1)");
// console.log(le);

// let list = $("li").last()
// console.log(list);
// let item = $("li:contains(A)");
// // let element = $("li[id = one]").hide()
// // let element = $("li[id= one]").show()

// // let value = $("ul")
// // value.append("<li><h1> Ice cream </h1></li>")
// // console.log(value);


// let val = $("#one");
// //val.css("background-color", "blue")
// $("#one").css({
//     backgroundColor: "blue",
//     color: "white",
//     padding: "30px"
// })



// let listOfElement = $("ul")
// listOfElement.css("backgroundColor": "pink")

// attr()
// let add = $("#one").attr("name", "company")
// console.log(add);


// let email = $("email")
// let password = $("pass")
// $(".btn").on("click", background)

// function background() {
//     if (
//         email.val() === "" &&
//         password.val() === ""
//     ) 
//     {
//     $("#email").css("background-color", "red")
//     }
// }


/// synchronous Asynchronous

// function orderPizza(callBack) {
// console.log("order pizza");
// setTimeout(() => {
//     const pizza = "p"
//     console.log(`your ${pizza} is ready`);
//     callBack("pizza")
    
// }, 3000)

// }

// function pizzaReady () {
//     console.log(`Eat your ${pizza}`);
    
// }
// orderPizza(pizzaReady)

// console.log("call yor friend");


// function step1(step2) {
//     console.log("step-1 done");
//     step2()
    
// }
// step1(function () {
//     console.log("step2 done");
    
// })


// promise

// fetch("https://random.me").then((data) => {
//     let result = data.json()
//     return result
// }).then((data) => console.log(data.result[0])).catch((error) => console.log("handel error:", error));

// regex

let exa = "abebe beso bela"
let n = exa.search(/BELA/ig)
console.log(n);


let example = "abebe beso bela";
let pattern = /bela/i;
let result = pattern.test(example)
console.log(result);

let it = "abebe beso bela";
let pat = /be/g;
let res = pat.exec(it)
console.log(res);

// 
let define = new String("abebe");
console.log(define);
