const items = [
  {
    description: 'test1',
    completed: true,
    index: 1,
  },
  {
    description: 'test2',
    completed: true,
    index: 0,
  },
];

const wrapper = document.getElementById('task-wrapper');
items.forEach((item) => {
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
