    let basket = ['Garten Salat', 'Salat Thunfisch', 'Lachs Gegrillt', 'Dorade Gefüllt', 'Ratatouille', 'Aubergine Gebacken'];
    let priceList = ['8.00', '12.00', '26.00', '26.00', '14.00', '20.00'];
    let amount = ['1', '1', '1', '1', '1', '1'];
    let shoppingCart = [];


    function addToBasket(index) {
        console.log("Hallo René");
        if (index >= 0 && index < basket.length) {
            const selectedItem = {
                name: basket[index],
                price: priceList[index],
                quantity: amount[index]
            };
            shoppingCart.push(selectedItem); // Füge das ausgewählte Gericht zum Warenkorb hinzu
            renderBasket(); // Aktualisiere den Warenkorb
        }
    }
    

    function generateBasketHTML(item, index) {
        return `
            <div class="basketItem">
                <div class="counter">${item.quantity}x</div>
                <div class="oName">${item.name}</div>
                <div class="basketImageBox">
                    <div onclick="addToBasket(${basket.indexOf(item.name)})" class="counterButton">
                        <img src="img/plus32.png">
                    </div>
                    <div onclick="decreaseQuantity(${index})" class="basketImgBoxDelete counterButton">
                        <img src="img/minus.png">
                    </div>
                    <div>
                        <img src="img/edit.png">
                    </div>
                </div>
                <div class="basketSinglePrice">
                    <div>${item.price}€</div>
                    <img onclick="totalDeleteFromBasket('${item.name}')" class="trashImg" src="img/trash.png">
                </div>
            </div>`;
    }
    

    function renderBasket() {
        let container = document.getElementById('list');
        container.innerHTML = ''; // Leere den Container, bevor neuen Inhalt hinzugefügt wird
        shoppingCart.forEach((item, index) => {
            container.innerHTML += generateBasketHTML(item, index);
        });
    }


    function deleteFromBasket(item) {
        console.log("löschen");
        let index = shoppingCart.findIndex(product => product.name === item); // Suchen Sie den Index des Elements im shoppingCart-Array
        if (index !== -1) {
            shoppingCart.splice(index, 1); // Löschen Sie das Element aus dem shoppingCart-Array
            renderBasket(); // Aktualisieren Sie den Warenkorb
        }
    }


    function totalDeleteFromBasket(item) {
        console.log("%cGanz löschen", 'color: green; font-size: 24px;');
        let index = shoppingCart.findIndex(product => product.name === item); // Suchen Sie den Index des Elements im shoppingCart-Array
        if (index !== -1) {
            shoppingCart.splice(index, 1); // Löschen Sie das Element aus dem shoppingCart-Array
            renderBasket(); // Aktualisieren Sie den Warenkorb
        }
    }
    

    function decreaseQuantity(index) {
        if (index >= 0 && index < shoppingCart.length) {
            if (shoppingCart[index].quantity > 1) {
                shoppingCart[index].quantity--; // Reduzieren Sie die Menge des Elements im Warenkorb
            } else {
                shoppingCart.splice(index, 1); // Entfernen Sie das Element aus dem Warenkorb, wenn die Menge 0 erreicht
            }
            renderBasket(); // Aktualisieren Sie den Warenkorb
        }
    }



    function total() {
        let sum = 0;
    
        for (let i = 0; i < shoppingCart.length; i++) {
            sum += parseFloat(shoppingCart[i]) * parseInt(amount[i]); // Berechne die Summe basierend auf dem Preis und der Menge des aktuellen Elements im Warenkorb
        }
    
        document.getElementById('bill').innerHTML = sum.toFixed(2) + " €"; // Runde die Summe auf zwei Dezimalstellen und füge "€" hinzu
    }


    function done() {
        console.log("bestellung weg");
        document.getElementById('wech').innerHTML = "Bestellung abgeschickt ...";
    }
    
    
    

    

    