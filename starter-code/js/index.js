function deleteItem(e){
  // DGG: Se elimina el producto
  var toDelete = e.currentTarget.parentNode.parentNode;
  var toDiscount = toDelete.querySelector('.total-price').textContent.substr(1);
  var toDeleteParent = e.currentTarget.parentNode.parentNode.parentNode;
  toDeleteParent.removeChild(toDelete);

  // DGG: Se descuenta el precio del producto eliminado
  var toPay = document.querySelector('.total').textContent.substr(1);
  toPay -= toDiscount;
  var updateToPay = document.querySelector('.total').textContent = '$' + toPay.toFixed(2);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
  // DGG: Para obtener las cantidades
  const qt = document.getElementsByTagName('input');
  var arrQty = [].slice.call(qt).map( input => parseInt(input.value) );

  // DGG: Para obtener los precios
  const priceX = document.getElementsByClassName('product-price');
  var arrPrice = [].slice.call(priceX).map( price => parseFloat( price.textContent.substr(1) ) );

  // DGG: Para actualizar precios
  var totalPriceArray = [];
  for (var i= 0; i < arrPrice.length; i++) {
    totalPriceArray[i] = arrPrice[i] * arrQty[i];
  }
  
  const spanTotalParcial = document.getElementsByClassName('total-price');
  var arrTP = [].slice.call(spanTotalParcial);

  for (var i= 0; i < totalPriceArray.length; i++) {
    spanTotalParcial[i].textContent = '$' + totalPriceArray[i].toFixed(2);
  }

  var toPay = totalPriceArray.reduce((acc, value) => {
    return acc + value;
  })

  var updateToPay = document.querySelector('.total').textContent = '$' + toPay.toFixed(2);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  console.log(deleteButtons);

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
