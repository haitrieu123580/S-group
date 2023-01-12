// const getData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("in setTimeout")
//         resolve("return data")
//         reject("error here")
//     })
// })
// getData.then((item)=>{
//     console.log(item)
//     return new Promise((resolve,reject) =>{
//         resolve("second")
//     }).then((item)=>{
//         console.log(item)
//     }).catch((item)=>{
//         console.log(item)
//     })
// })

// const getData2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("in setTimeout")
//         resolve("return data 2")
//         reject("error here 2")
//     })
// })

// async function test() {
//     let data = await getData;
//     console.log(data)
// }
// test()

// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))

// function getData(){
//     return fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
// }
// async function getResult() {
//     let x = await fetch('https://fakestoreapi.com/products')
//     x=>x.json()
//     let result = await x
//     console.log(result)
// }
// getResult()


//bt1
arr=[2,1,3]

function sort(arr, func){
    for(let i = 0; i < arr.length; i++){

        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(func(arr[j+1],arr[j])){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    }
    return arr
}

function compare(a,b){
    if(a<b){
        return true
    }
    else{
        return false
    }
}
function compare2(a,b){
    if(a<b){
        return false
    }
    else{
        return true
    }
}
console.log(sort(arr,compare))
console.log("min:"+ sort(arr,compare)[0])
console.log(sort(arr,compare2))
console.log("max:"+ sort(arr,compare2)[0])

//bt2

Array.prototype.myForEach = function(cb) {
   
     for(var index in this ) {
         if(this.hasOwnProperty(index)) {
             cb(this[index],index,this);
         } 
     }
  
}
const numbers = [1, 2, 3, 4];

numbers.myForEach(function (number) {
    console.log(number)
});

