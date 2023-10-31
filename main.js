function returnUsersArray() {
    const users =  [
    {
     id: 1,
     name: 'Грошилин Даниил',
     login: '12-34-1111'
    },
    {
     id: 2,
     name: 'Сергевв Никита.',
     login: "12-34-1112"
    },
    { 
     id: 3,
     name: 'Куркин Вадим',
     login: '12-34-1113'
    },
    {
    id: 4,
    name: 'Лутай Илья Олегович',
    login: '12-34-1114'
    },    
    {
    id: 5,
    name: 'Топин Ярослав',
    login: '12-34-1115'
    }
  ];
  return users;
}
function renderUsersToTable(){
    let buffer="";
    let usersArray = returnUsersArray();

    usersArray.forEach((user) => {
       buffer += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.login}</td></tr>`;
    });

    return buffer;
}

function appendDateToTable(){
    const tbodyTable = document.querySelector(".table_content")
    tbodyTable.innerHTML = renderUsersToTable();

}
function searchUser(){
    let usersArray = returnUsersArray();
    let loginInput = document.querySelector(".login_input").value;
    let result = "";
    let searchField = document.querySelector(".search_field");

    usersArray.forEach((user) =>{
        if (loginInput == user.login) {
            result = `Здравствуйте, ${user.name}!`;
        }
    });
    
    if(result){
        searchField.innerHTML=result;
    } else {
        searchField.innerHTML ='Пользователь не найден!';
    }

    
}
document.addEventListener('DOMContentLoaded',() =>{
    appendDateToTable();
    const executeButton = document.querySelector('.main_button');
    executeButton.addEventListener("click",()=>{
        searchUser();
    })
});