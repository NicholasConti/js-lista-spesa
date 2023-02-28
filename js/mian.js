"use strict";

const list = ['pane', 'carote', 'patate', 'burro'];

let i = 0;
while (i < list.length){
    const ul = document.getElementById('shoppig-list');
    const li = document.createElement('li');
    ul.append(li);
    li.append(list[i]);
    i++;
}