const deleteButtons = document.querySelectorAll('.delete');
const messageBlock = document.getElementById('message');

const messageBlockType = {
  SUCCESS: 'success',
  FAILURE: 'failure',
}

const showMessageBlock = (type, message) => {
  messageBlock.innerHTML = message;
  messageBlock.classList.add(type);
  messageBlock.style.display = 'block';

  hideMessageBlock();
}

const hideMessageBlock = () => {
  setTimeout(() => {
    messageBlock.style.display = 'none';
  },4000);
}

deleteButtons.forEach(button => button.addEventListener('click', (e) => {
  const todoId = e.target.closest('button').dataset.id;

  fetch(`/delete/${todoId}`, {
    method: 'DELETE'
  })
    .then( async (res) => {
      if(res.status !== 200) throw new Error();

      window.location.reload();
    })
    .catch((e) => {
      console.log(`Error by deleting ${todoId}: ${e}`);

      showMessageBlock(messageBlockType.FAILURE, 'Something went wrong!');
    })
}));
