// import products from "./products.js";

document.addEventListener("DOMContentLoaded", function () {

    var products = [
        {
            image: "img/s7-1331298_lifestyle.jpg",
            name: "Nomn Sweater Dress",
            startPrice: 99.9,
            endPrice: 199.99,
            colors: ["black", "blue", "gray", "blus"],
            isNew: false
        },

        {
            image: "img/s7-1331308_lifestyle.jpg",
            name: "Nomn Sweater Dress",
            startPrice: 99.9,
            endPrice: 199.99,
            colors: ["black", "blue", "gray", "blus"],
            isNew: true
        },
        {
            image: "img/s7-1346228_alternate1.jpg",
            name: "Nomn Sweater Dress",
            startPrice: 99.9,
            endPrice: 199.99,
            colors: ["black", "blue", "gray", "blus"],
            isNew: false
        },
        {
            image: "img/s7-1346354_alternate1.jpg",
            name: "Nomn Sweater Dress",
            startPrice: 99.9,
            endPrice: 199.99,
            colors: ["black", "blue", "gray", "blus"],
            isNew: true
        },
        {
            image: "img/s7-1331298_lifestyle.jpg",
            name: "Nomn Sweater Dress",
            startPrice: 99.9,
            endPrice: 199.99,
            colors: ["black", "blue", "gray", "blus"],
            isNew: false
        },

        {
            image: "img/s7-1331308_lifestyle.jpg",
            name: "Nomn Sweater Dress",
            startPrice: 99.9,
            endPrice: 199.99,
            colors: ["black", "blue", "gray", "blus"],
            isNew: true
        },
        {
            image: "img/s7-1346228_alternate1.jpg",
            name: "Nomn Sweater Dress",
            startPrice: 99.9,
            endPrice: 199.99,
            colors: ["black", "blue", "gray", "blus"],
            isNew: false
        },
        {
            image: "img/s7-1346354_alternate1.jpg",
            name: "Nomn Sweater Dress",
            startPrice: 99.9,
            endPrice: 199.99,
            colors: ["black", "blue", "gray", "blus"],
            isNew: true
        },

    ];

    var productContainer = document.getElementById("product-container");

    products.forEach(function (product) {
        var productDiv = document.createElement("div");
        productDiv.className = "col-lg-4 col-md-6 col-12 d-flex justify-content-center mb-5";

        var cardDiv = document.createElement("div");
        cardDiv.className = "card cardEdit border-0";

        var img = document.createElement("img");
        img.className = "card-img-top";
        img.src = product.image;
        img.alt = "product-img";

        var loveIcon = document.createElement("i");
        loveIcon.className = "fa-regular fa-heart";
        loveIcon.style.position = "absolute";
        loveIcon.style.top = "10px";
        loveIcon.style.right = "10px";
        loveIcon.style.fontSize = "20px";
        cardDiv.appendChild(loveIcon);

        var cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "card-body";

        var namePara = document.createElement("p");
        namePara.className = "card-text-title";

        if (product.isNew) {
            var newLabel = document.createElement("p");
            newLabel.textContent = "New";
            newLabel.classList.add("new-label");
            cardBodyDiv.appendChild(newLabel);
        }

        namePara.textContent = product.name;

        var pricePara = document.createElement("p");
        pricePara.className = "product-price";
        pricePara.textContent = "$" + product.startPrice + " - $" + product.endPrice;

        var colorsDiv = document.createElement("div");
        colorsDiv.className = "d-flex gap-2 d-md-block colors justify-content-center";

        product.colors.forEach(function (color) {

            var button = document.createElement("button");
            if (color == "blus") {
                button.innerHTML = "";
            }
            button.className = "button " + color;
            button.type = "button";
            colorsDiv.appendChild(button);
        });

        cardBodyDiv.appendChild(namePara);
        cardBodyDiv.appendChild(pricePara);
        cardBodyDiv.appendChild(colorsDiv);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
        productDiv.appendChild(cardDiv);

        productContainer.appendChild(productDiv);
    });

    document.getElementById('showFilter').addEventListener('click', function () {
        var filtersDiv = document.querySelector('.allFilters');
        var button = document.getElementById('showFilter');
        if (filtersDiv.classList.contains('d-lg-none')) {
            filtersDiv.classList.remove('d-lg-none');
            filtersDiv.classList.add('d-lg-block');
            button.innerHTML = '<i class="fa-solid fa-bars"></i> HIDE FILTERS';
        } else {
            filtersDiv.classList.add('d-lg-none');
            button.innerHTML = '<i class="fa-solid fa-bars"></i> SHOW FILTERS';
        }
    });

    const showFiltersmallBtn = document.getElementById('showFiltersmall');
    const offCanvasSmall = new bootstrap.Offcanvas(document.getElementById('offcanvasFilterSmall'));

    showFiltersmallBtn.addEventListener('click', () => {
        offCanvasSmall.show();
    });
});
