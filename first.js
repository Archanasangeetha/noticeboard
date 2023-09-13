document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const noticeBoard = document.getElementById('notice-board');
    const userDisplay = document.getElementById('user-display');
    const noticeText = document.getElementById('notice-text');
    const noticeList = document.getElementById('notice-list');
    const postButton = document.getElementById('post-notice');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
     
      // You would need to implement proper authentication logic here
     
      userDisplay.textContent = username;
      loginForm.classList.add('hidden');
      noticeBoard.classList.remove('hidden');
    });
  
    postButton.addEventListener('click', function () {
      const newNotice = noticeText.value;
      const noticeItem = document.createElement('li');
      noticeItem.textContent = newNotice;
      noticeList.appendChild(noticeItem);
      noticeText.value = '';
    });
  });
  
  