// Update the 'Apples' item to say 'Granny Smith Apples'
let grocerylist = document.querySelector('#list').children;
grocerylist[1].innerHTML = 'Granny Smith Apples'

// 2. Remove 'Oat Milk' from the list
grocerylist[3].remove();

// Add an item 'Kombucha'
let Kombucha = document.createElement('li');
Kombucha.innerHTML = "Kombucha";
const List2 = document.querySelector('ul')
List2.appendChild(Kombucha);


// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
let items = ['protein bars', 'almonds', 'peanut butter'];
let list = document.querySelector('#list');
list.innerHTML = ''; //clears the list
items.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
});


// Add the class 'important' to the almonds item.
let almonds = document.querySelectorAll("li")[1];
    almonds.classList = "important";