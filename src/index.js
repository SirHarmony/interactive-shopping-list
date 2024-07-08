//Global variables
let shoppingList = [];
const ul = document.querySelector(".shopping_items-list");

//Create shopping items from
function renderList(listArray) {
  shoppingList = [];
  listArray.map((item) => {
    //Append list item
    const shoppingItem = document.createElement("li");
    const shoppingP = document.createElement("span");
    shoppingP.textContent = item;
    shoppingItem.append(shoppingP);
    shoppingItem.classList.add("shopping_item");
    ul.append(shoppingItem);

    //Append mark purchased
    const mark = document.createElement("div");
    mark.textContent = "Mark Purchased";
    mark.classList.add("Shopping_item-mark-btn");
    shoppingItem.append(mark);

    //Append remove btn
    const remove = document.createElement("div");
    remove.textContent = "X";
    remove.classList.add("Shopping_item-remove-btn");
    shoppingItem.append(remove);

    //Mark purchased event listener
    mark.addEventListener("click", handleMarkPurchased);

    //Remove item
    remove.addEventListener("click", handleDelete);
  });
}

//Form submit event (add item to shopping array)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = document.getElementById("shopping_input-item");
  const formInputValue = form.value;
  if (formInputValue === "") {
    return;
  } else {
    handleShopping(formInputValue);
  }
  form.reset();
});

//Add item to shopping list array
function handleShopping(submitValue) {
  shoppingList.push(submitValue);
  renderList(shoppingList);
  console.log(shoppingList);
}

//Mark item as purchased
function handleMarkPurchased(e) {
  e.preventDefault(e);
  e.target.style.background = "orange";
  e.target.textContent = "Purchased";
}

//Delete Item
function handleDelete(e) {
  e.preventDefault();
  e.target.parentNode.remove();
}

//Clear list
const clearBtn = document.querySelector(".Shopping_item-clear-btn");
clearBtn.addEventListener("click", clearList);

function clearList(e) {
  e.preventDefault();
  const ul = document.querySelector(".shopping_items-list");
  ul.innerHTML = "";
  shoppingList = [];
}
