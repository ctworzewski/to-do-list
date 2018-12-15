const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $ul = document.querySelector('ul');
const $taskNumber = document.querySelector('span');
const $listElements = document.getElementsByClassName('task');

const addTask = (e) => {
    e.preventDefault();
    const titleTask = $input.value;

    if (titleTask === '') {
        alert('Podaj zadanie');
    } else {
        const task = document.createElement('li');
        task.className = 'task';
        task.innerHTML = titleTask;
        $ul.appendChild(task);
        $input.value = '';
        $taskNumber.textContent = $listElements.length;
    }
}

$form.addEventListener('submit', addTask);