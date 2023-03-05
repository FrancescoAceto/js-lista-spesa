const ListaSpesa = [];

let ShoppingList = document.getElementById("Spesa");

while ( ListaSpesa.length < 4) {
    ListaSpesa.push(" latte", " banane", " miele", " pane",);

    ShoppingList.innerHTML = `Lista della spesa: ${ListaSpesa}`;
};

