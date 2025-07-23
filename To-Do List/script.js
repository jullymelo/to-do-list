const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Botão de remover
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover';
  removeBtn.addEventListener('click', () => li.remove());

  // Marcar como concluído
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = '';
});
