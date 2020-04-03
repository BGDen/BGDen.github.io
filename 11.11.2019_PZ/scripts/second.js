const   dom = {
        allUsers : document.querySelector('.all_users'),
        usersInfo : document.querySelector('.user_info'),
        usersPosts : document.querySelector('.users_posts'),
        btnShow : document.querySelector('.btnSwowPosts'),
        table : document.querySelector('.table_info')
};

let activeUser = null;

function getAllUsers() {
          fetch('https://jsonplaceholder.typicode.com/users') 
          .then((response) => response.json())
          .then((result) => renderAllUsers(result)); // тянем инфу об юзерах
}

function getUserPosts(userId) {
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then((response) => response.json())
          .then((result) => renderUserPosts(result)); // тянем инфу постов
}


function renderAllUsers(data) {
            data.forEach((el) => {  // рендер юзеров
            const user = new User(el);
            dom.allUsers.append(user.div);
            });    
}

function renderUserInfo(data){
          activeUser = data.id;
          dom.usersPosts.innerHTML = '';
          dom.usersInfo.style.display = 'flex';
          [...dom.table.rows].forEach((row, i) =>{ // наполнение таблицы
          [...row.cells].forEach((col, j) =>{
            if (j == 1) {
                switch (i) {
                    case 0:
                        col.innerText = data.name;
                        break;
                    case 1:
                        col.innerText = data.username;
                        break;
                    case 2:
                        col.innerText = `${data.address.city}, ${data.address.street}`;
                        break;
                    case 3:
                        col.innerText = data.email;
                        break;
                    case 4:
                        col.innerText = data.phone;
                        break;
                    case 5:
                        col.innerText = data.website;
                        break;

                    default:
                        break;
                }
            }
          });
          });
}

function renderUserPosts(data) {
          dom.usersPosts.style.display = 'flex';
          dom.usersPosts.innerHTML = '';

          data.forEach((el)=>{  // рендер постов с наполнением
                const div = document.createElement('div'),
                      titlePost = document.createElement('p');
                div.classList.add('post');
                titlePost.classList.add('title_post');

                titlePost.innerHTML = el.title;
                div.append(titlePost);
                div.innerHTML += el.body;
                dom.usersPosts.append(div);
          });
}

dom.btnShow.addEventListener('click', () => getUserPosts(activeUser));

class User{
      constructor(data){
        this.data = data;
        this.div = document.createElement('div');
        this.div.classList.add('user_block');
        this.div.innerText = data.name;
        this.div.addEventListener('click', () => renderUserInfo(data)); // рендерим таблицу
      }
}

getAllUsers();