function moveItems(firstListId, secondListId) {
    const firstList = document.getElementById(firstListId);
    const secondList = document.getElementById(secondListId);

    const checkedItems = firstList.querySelectorAll('input[type="checkbox"]:checked');

    checkedItems.forEach((item) => {
        const newItem = document.createElement('li');
        newItem.innerHTML = `<input type="checkbox" value="${item.value}"> ${item.value}`;

        secondList.appendChild(newItem);
        item.parentElement.remove();
    });

    sortList(secondListId);
}

function moveRightItems() {
    moveItems("list-first", "list-second");
}

function moveLeftItems() {
    moveItems("list-second", "list-first");
}

function sortList(listId) {
    const list = document.getElementById(listId);
    const items = Array.from(list.getElementsByTagName('li'));

    items.sort((a, b) => {
        const nameA = a.querySelector('input').value.toLowerCase();
        const nameB = b.querySelector('input').value.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    list.innerHTML = '';

    items.forEach(item => {
        list.appendChild(item);
    });
}