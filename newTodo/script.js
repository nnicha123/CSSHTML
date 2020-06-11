class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }
    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item')

        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
        removeButton.classList.add('removeButton');

        document.querySelector('.container').appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }
    remove(item) {
        document.querySelector('.container').removeChild(item);
    }
}
new item('Example'); //Add example element

document.querySelector(".addButton").addEventListener('click', () => {
    if (document.querySelector(".input").value) {
        newItem = new item(document.querySelector(".input").value)
        document.querySelector(".input").value = "";
    }
});