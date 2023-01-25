
// get data by using promise
let response = 
// 1. return fetchPromise variable contain Promise obj with status: "pending"
fetch('https://fakestoreapi.com/products')
// 2.using Promise's then() method to get Response object and get json data from it
.then(res => {
    console.log(res)
    return res.json()
})
.then(json => console.log(json))

// get data by using async/await
async function getData(){
    try {
        // return a fully complete response object
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        
    }
}
getData()