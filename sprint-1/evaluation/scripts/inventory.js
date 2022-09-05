let data = JSON.parse(localStorage.getItem("data")) || [];

window.addEventListener("load", ()=>appendData(data))
let appendData = (data) =>{
    let container = document.querySelector("#products_data")
    container.innerHTML = null;

    data.forEach((el,i) => {
        let div = document.createElement("div")

        let brand = document.createElement("h3")
        brand.innerText = el.brand;

        let name = document.createElement("h4")
        name.innerText = el.name;

        let price = document.createElement("h5")
        price.innerText = el.price;

        let img = document.createElement("img")
        img.src = el.image;

        let remove = document.createElement("button")
        remove.innerText = "DELETE";
        remove.setAttribute("id", "remove_product")
        remove.addEventListener("click", ()=>{
            removeData(el,i)
        })

        div.append(img, brand, name, price, remove)
        container.append(div);
    });

    let removeData = (i)=>{
        data.splice(i,1)
        localStorage.setItem("data",JSON.stringify(data))
        window.location.reload()
    }
}