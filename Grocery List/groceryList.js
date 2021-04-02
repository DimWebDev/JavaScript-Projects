const form = document.querySelector('form');
const itemsList=document.getElementById('list');
form.addEventListener('submit', function(e){
    e.preventDefault();
    

const product1 = form.elements.product;
const quantity = form.elements.qty;


// const newItem=document.createElement('li');
// newItem.append(quantity);
// newItem.append(product1);
// itemsList.append(newItem);
const newItem=document.createElement('li');
newItem.innerHTML=(`${quantity.value} ${product1.value}`)
itemsList.appendChild(newItem);
quantity.value="";
product1.value="";

})
    
