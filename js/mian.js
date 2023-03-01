"use strict";

const list = ['Pane', 'Carote', 'Patate', 'Burro'];
const ul = document.getElementById('shoppig-list');

//WHILE
let i = 0;
while (i < list.length){
    const li = document.createElement('li');
    ul.append(li);
    li.append(list[i]);
    i++;
}

//DO WHILE
i= 0;
do {
    const li = document.createElement('li');
    ul.append(li);
    li.append(list[i]);
    i++;
} while (i < list.length);