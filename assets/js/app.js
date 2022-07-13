{/* 
<ul class="list">
    <li>
        <p>lista</p>
        <span>
            <button class="btn-warning btn-sm">Editar</button>
            <button class="btn-danger btn-sm">Remover</button>
        </span>
    </li>
</ul> 
*/}

const input = document.querySelector('#inputText'); // input 
const btnAction = document.querySelector('#btnAction'); // button 
const ul = document.querySelector('.list');

btnAction.addEventListener('click', function(){
    let li = document.createElement('li');
    let p = document.createElement('p');
    p.textContent = input.value;
    input.value = '';
    li.appendChild(p);
    ul.appendChild(li);
}) 