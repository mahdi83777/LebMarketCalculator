var scoreBtn = document.getElementById("submitScore");
var weight = document.getElementById("weight");
var length = document.getElementById("length");
var width = document.getElementById("width");
var height = document.getElementById("height");
var price = document.getElementById("price");
var calculation = document.getElementById("calculation");




// On click of the submit button, we run the function highscore that saves and stringifies the array of high scores already saved in local stoage
// as well as pushing the new user name and score into the array we are saving in local storage. Then it runs the function to show high scores.
scoreBtn.addEventListener("click", function highscore() {
    
    
    if (weight.value === "" || length.value === "" || width.value === "" || height.value === "" || price.value === "") {
        alert("Must enter value");
        return false;
    }
    else {

        var weight1 = weight.value.trim();
        weight1 = parseFloat(weight1);
        var length1 = length.value.trim();
        length1 = parseFloat(length1);
        var width1 = width.value.trim();
        width1 = parseFloat(width1);
        var height1 = height.value.trim();
        height1 = parseFloat(height1);
        var price1 = price.value.trim();
        price1 = parseFloat(price1);
        var maxw = 0;
        var shipandtax = 0;
        var total = 0;

        var dimw = (length1*width1*height1)/140;
        if (weight1 > dimw) {
            maxw = weight1;
        }
        else {
            maxw = dimw;
        }
        var shipping = Math.round(maxw*12);
        var taxes = Math.round(0.16*(price1 + maxw));
        shipandtax = (shipping + taxes);
        if (shipandtax < 23) {
            total = Math.round((price1 + 23));
        }
        else {
            total = Math.round((price1 + shipping + taxes));
        }

        console.log(total);


        calculation.innerHTML = "";

        var item = document.createElement("p");
        item.textContent = "Price of Item: $" + price1;
        calculation.appendChild(item);

        var ship = document.createElement("p");
        ship.textContent = "Shipping and Insurance: $" + shipping;
        calculation.appendChild(ship);

        var tax = document.createElement("p");
        tax.textContent = "Taxes and Services: $" + taxes;
        calculation.appendChild(tax);

        var tot = document.createElement("p");
        tot.setAttribute("class", "total");
        tot.textContent = "Total including shipping and tax: $" + total;
        calculation.appendChild(tot);



    }
    
});


