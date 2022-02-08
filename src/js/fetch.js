const url = 'http://localhost:4000/api/auth/signup/';
const urlLogin = 'http://localhost:4000/api/auth/login/';
const urlPost = 'http://localhost:4000/api/post/post/';
const urlResponse = 'http://localhost:4000/api/post/response/';
const urlGetUserId = 'http://localhost:4000/api/auth/getUserId/';
const urlGetImg = 'http://localhost:4000/api/auth/getImgById/';
const urlChange = 'http://localhost:4000/api/auth/changeInfo/';

// Création de la requête POST pour la connexion :
export function login(options) {
    fetch(urlLogin, options)
        .then(resp => resp.json())

        .then((data) => {
            console.table(data);
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("userId", data.userId);
            window.location.href = `/homepage`;
        })
};

// Création de la requête POST pour l'inscription :
export function signin(options) {
    fetch(url, options)
        .then(resp => resp.json())
  
        .then((data) => {
            console.table(data);
            window.location.href = `/register`;
        })
};


// Création de la requête POST pour les posts (message): addMessage()
export function post(options) {
    fetch(urlPost, options)
        .then(resp => resp.json())

        .then((data) => {
            console.table(data)
        })
};

// Création de la requête POST pour les posts (reponse): sendAnswer
export function reponse(optionsR) {
    fetch(urlResponse, optionsR)
        .then(resp => resp.json())

        .then((data) => {
            console.table(data)
        })
};

// Création de la requête GET de récupération de l'userId :
export function getUserId() {
    fetch(urlGetUserId)
        .then(resp => resp.json())
};

// Création de la requête GET de récupération d'image de profil :
export async function getImgById(userId) {
    return fetch(urlGetImg + userId)
        .then(resp => resp.json())

        .then((data) => {
            return data.image
        })
};

// Création de la requête POST de changement d'image & Password : updateProfil()
export function change(options) {
    fetch(urlChange, options)
        .then(resp => resp.json())

        .then((data) => {
            console.table(data)
        })
};

