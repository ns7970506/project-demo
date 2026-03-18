
let products = {
    data:[
        {
            ProductName : "Regular white T-shirt",
            category: "Topwear",
            price: "30",
            image: "JavaScript_Projects/Product Filter and search/white tshirt.jpg"
        },
        {
            ProductName : "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "JavaScript_Projects/Product Filter and search/short skirt.jpg"
        },
        {
            ProductName : "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "JavaScript_Projects/Product Filter and search/smart watch.jpg"
        },
        {
            ProductName : "Basics Knitted Top",
            category: "Topwear",
            price: "99",
            image: "JavaScript_Projects/Product Filter and search/knitted.jpg"
        },
        {
            ProductName : "Black Leather Jacket",
            category: "Jacket",
            price: "129",
            image: "JavaScript_Projects/Product Filter and search/black leather jacket.jpg"
        },
        {
            ProductName : "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "89",
            image: "JavaScript_Projects/Product Filter and search/black leather jacket.jpg"
        },
        {
            ProductName : "Brown Men's Jacket",
            category: "Jacket",
            price: "189",
            image: "JavaScript_Projects/Product Filter and search/brown jacket.jpg"
        },
        {
            ProductName : "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "JavaScript_Projects/Product Filter and search/grey pants.jpg"
        },
    ],
};

for (let i of products.data){
    // create card
    let card = document.createElement("div")
    // card should have categort and should stay hidden initially
    card.classList.add("card",i.category,"hide")
    // Image div
    let imgContainer = document.createElement("div")
    // we add image-container properties to image-container div
    imgContainer.classList.add("image-container")
    // create image tag
    let image = document.createElement("img")
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)
    // create container
    let container = document.createElement("div")
    container.classList.add("container")
    // product name
    let name = document.createElement("h5")
    name.classList.add("product-Name")
    name.innerText= i.ProductName.toUpperCase();
    container.appendChild(name);
    // price
    let price = document.createElement("h6")
    price.innerText= "$"+i.price
    container.appendChild(price)

    card.appendChild(container)
    document.getElementById("products").appendChild(card)
}

// parameter passed from button in html 
function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value")
    buttons.forEach((button)=>{
        if(value.toUpperCase()==button.innerText.toUpperCase()){
            button.classList.add("active")
        }
        else{
            button.classList.remove("active")
        }
    });


let elements = document.querySelectorAll(".card")

elements.forEach((elem)=>{
    if(value=="all"){
        elem.classList.remove("hide")
    }
    else{
      if  (elem.classList.contains(value)){
        elem.classList.remove("hide")
        }
        else{
            elem.classList.add("hide")
        }
    }
});
}

document.getElementById("search").addEventListener("click",()=>{
    // intialization
    let searchInput = document.getElementById("search-input")
    let elements = document.querySelectorAll(".product_name")
    let cards = document.querySelectorAll(".card")
    // loop ke through all elements
    elements.forEach((element,index)=>{
        // check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            // display matching card
            cards[index].classList.remove("hide");
        }
        else{
            // hide others
            cards[index].classList.add("hide");
        }
    });

});

// intially display all products
window.onload=()=>{
    filterProduct("all")
};
