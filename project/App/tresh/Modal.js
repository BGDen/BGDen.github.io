// export const
  myLink = {
  openBtn: document.querySelector('.openModal'),
  closeBtn: document.querySelector('.closeModal'),
  modal: document.querySelector('.main_modal')

  // openModLog: document.querySelector('.openModalLogin'),
  // closeModLog: document.querySelector('.closeModal_login'),
  // modalLogin: document.querySelector('.modal_login_container'),

  // openModSign: document.querySelector('.openModalSign'),
  // closeModSign: document.querySelector('.closeModal_sign'),
  // modalSign: document.querySelector('.modal_sign_container')

}

myLink.openBtn.addEventListener('click', () => myLink.modal.style.display = 'flex');
myLink.closeBtn.addEventListener('click', () => myLink.modal.style.display = 'none');

// myLink.openModLog.addEventListener('click', () => myLink.modalLogin.style.display = 'flex');
// myLink.closeModLog.addEventListener('click', () => myLink.modalLogin.style.display = 'none');

// myLink.openModSign.addEventListener('click', () => myLink.modalSign.style.display = 'flex');
// myLink.closeModSign.addEventListener('click', () => myLink.modalSign.style.display = 'none');