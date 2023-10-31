var cartValue = document.getElementById("cart-value");
var button = document.getElementsByClassName("button");
var cart = document.getElementById("cart")
var items = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
];

for(let i=0;i<button.length;i++){
    button[i].onclick = (e)=>{
        items[i].quantity++;
        updateCart();
    };
}

function updateCart(){
    let cart = 0;
    for(i=0;i<items.length;i++){
        cart = cart + items[i].quantity;
    }
    cartValue.innerHTML = cart;
}

var totalDollars = 0;
var totalCents = 0;

function totalPrice(){
    var totalInCents = 0;
    for(i=0;i<items.length;i++){
        totalInCents += items[i].quantity * (items[i].dollars*100 + items[i].cents);

    }
    totalDollars = Math.floor(totalInCents/100);
    totalCents = totalInCents%100;
}

cart.onclick =()=> {
    totalPrice();
    whatsApp();
    window.open(whatsapp, "_blank")

    for(i=0;i<items.length;i++){
        if(items[i].quantity!==0){
            console.log("Item name: " + items[i].name + "- Quantity: " + items[i].quantity)
        }
    }

    console.log("The total amount is " + totalDollars + "$ and " + totalCents + "cents")
};

var whatsapp = "https://api.whatsapp.com/send?phone=+9538231005&text=Order%20details"

function whatsApp(){
    for(i=0;i<items.length;i++){
        if(items[i].quantity !=0){
            whatsapp += "%0A" + items[i].name + "%20" + items[i].quantity;
        }
    }
    whatsapp += "%0A" + "Total%20Price:%20" + totalDollars + "$%20" + totalCents + "%20cents";
}