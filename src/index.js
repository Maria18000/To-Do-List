import './index.css';

const items = [
  {
    description: 'wash dishes',
    completed: true,
    index: 3,
  },
  {
    description: 'Laundary',
    completed: true,
    index: 1,
  },
  {
    description: 'cleaning the house',
    completed: true,
    index: 0,
  },
  {
    description: 'shopping',
    completed: true,
    index: 2,
  },
];

const sortedItems = items.sort((a, b) => a.index - b.index);
const wrapper = document.getElementById('task-wrapper');
sortedItems.forEach((item) => {
  const task = document.createElement('li');
  const desc = document.createElement('p');
  desc.classList = 'task-desc';
  const checkboxx = document.createElement('input');
  const icon = document.createElement('p');
  icon.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
  checkboxx.type = 'checkbox';
  desc.innerHTML = item.description;
  task.appendChild(checkboxx);
  task.appendChild(desc);
  task.appendChild(icon);
  wrapper.appendChild(task);
});
