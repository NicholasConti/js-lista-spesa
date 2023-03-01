"use strict";

const list = ['Pane', 'Carote', 'Patate', 'Burro'];
const ul = document.getElementById('shoppig-list');

let i = 0;
while (i < list.length){
    const li = document.createElement('li');
    ul.append(li);
    li.append(list[i]);
    i++;
}