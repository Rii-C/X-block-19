//store the products array in localstorage as "data"
function getData(){
    let brand = document.querySelector("#product_brand").value
    let name = document.querySelector("#product_name").value
    let price = +document.querySelector("#product_price").value
    let image = document.querySelector("#product_image").value


    let p1 = new productData (brand, name, price, image)

    let data = JSON.parse(localStorage.getItem("data")) || [];

    data.push(p1)

    localStorage.setItem("data", JSON.stringify(data))
    console.log(data)
    window.location.reload()
}

function productData (b, n, p, i){
    this.brand = b;
    this.name = n;
    this.price = p;
    this.image = i;
} 