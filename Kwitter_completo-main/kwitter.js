//função addUser
function addUser() 
{
// Obtenha o nome do usuário da caixa de entrada e o armazene dentro de uma variável
user_name = document.getElementById("user_name").value;
// Armazene o valor da variável user_name no armazenamento local com a chave user_name
localStorage.setItem("user_name", user_name);
// Redirecione os usuários para kwitter_room.html.
window.location = "kwitter_room.html";
}

