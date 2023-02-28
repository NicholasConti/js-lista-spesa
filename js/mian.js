"use strict";

const list = ['Pane', 'Carote', 'Patate', 'Burro'];

let i = 0;
while (i < list.length){
    const ul = document.getElementById('shoppig-list');
    const li = document.createElement('li');
    ul.append(li);
    li.append(list[i]);
    i++;
}