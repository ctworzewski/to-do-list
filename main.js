const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $ul = document.querySelector('ul');
const $taskNumber = document.querySelector('span');
const $listElements = document.querySelector('li');

const addTask = (e) => {
e.preventDefault();
const titleTask = $input.value;
// console.log(titleTask);
if (titleTask === '') {
    alert('Podaj zadanie');
} else {
    const task = document.createElement('li');
    // console.log('teraz jest 1: ', task);
    task.innerHTML = titleTask;
    $ul.appendChild(task);
    // console.log('teraz jest 1: ', $ul);
    $input.value = '';
    }
}

$form.addEventListener('submit', addTask);