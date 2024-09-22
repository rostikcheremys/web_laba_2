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
}

function moveRightItems() {
    moveItems("list-first", "list-second");
}

function moveLeftItems() {
    moveItems("list-second", "list-first");
}