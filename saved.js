let wishList = [];

function setup() {
    const products = document.querySelectorAll(".but");
    for (let i = 0; i < products.length; i++) {
        products[i].onclick = function (e) {
            addItem(e);
        }
    }
}



function addItem(e) {
    const productId = e.target.getAttribute("id");
    const productDiv = document.getElementById("product" + productId);

    const wishDiv = document.createElement("div");
    wishDiv.classList.add("product");

    wishDiv.setAttribute("id", "wish" + productId);
    wishDiv.setAttribute("class", "product");
    wishDiv.innerHTML=productDiv.innerHTML;

    const addToWishlistBtn = wishDiv.querySelector(".but");
    addToWishlistBtn.setAttribute("value", "x");
addToWishlistBtn.classList.add("add-x");
    addToWishlistBtn.classList.remove("add-to-saved");
    addToWishlistBtn.classList.add("remove-from-saved");
    addToWishlistBtn.onclick = function () { removeItem(productId) };

    const readHereLink = wishDiv.querySelector(".sec");
    readHereLink.remove();

    // const removeBtn = document.createElement("input");
    // removeBtn.setAttribute("type", "button");
    // removeBtn.setAttribute("value", "x");
    // removeBtn.onclick = function () { removeItem(productId) };
    // wishDiv.appendChild(removeBtn);

    const linkDiv = document.createElement("div");
    linkDiv.innerHTML = readHereLink.outerHTML;
    wishDiv.appendChild(linkDiv);

    let aside = document.getElementById("wishlist");
    aside.appendChild(wishDiv);

    wishList.push(productId);
    console.log(wishList);

    // Update button class and text
    e.target.setAttribute("value", "Remove from saved");
    e.target.classList.remove("add-to-saved");
    e.target.classList.add("remove-from-saved");
    e.target.onclick = function () { removeItem(productId) };
}

  




function removeItem(productId) {
    const product = document.getElementById("wish" + productId);
    product.remove();

    wishList = wishList.filter(item => item !== productId);
    console.log(wishList);

    // Update button class and text
    const addButton = document.getElementById(productId);
    addButton.setAttribute("value", "Add to save");
    addButton.classList.remove("remove-from-saved");
    addButton.classList.add("add-to-saved");
    addButton.onclick = function (e) { addItem(e) };

    wishList = wishList.filter(item => item !== productId);
console.log(wishList);
}



function toggleWishlist() {
    const wishlist = document.getElementById("wishlist");
    const button = document.getElementById("wishlist-btn");
  
    if (wishlist.style.display === "none") {
      wishlist.style.display = "block";
      button.innerText = "Saved";
    } else {
      wishlist.style.display = "none";
      button.innerText = "Saved";
    }
  }
  

  
window.addEventListener("load", setup);
