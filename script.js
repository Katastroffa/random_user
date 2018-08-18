document.getElementById('start').addEventListener('click', start);

function start() {
    axios.get('https://randomuser.me/api')
        .then(function (response) {
            console.log(response.data.results[0]);
            render(response.data.results[0]);
        })
        .catch(function () {
                console.log(error);
            }
        );

}

function render(obj) {
    let userDiv = document.getElementById('userall');
    userDiv.innerHTML = '';
    let user = document.createElement('div');
    userDiv.appendChild(user);
    user.setAttribute('id', 'user');
    let photo = getImg(obj);
    user.appendChild(photo);
    let userData = getUserInf(obj);
    user.appendChild(userData);
}

function getImg(obj) {
    let photo = document.createElement('div');
    let userImage = document.createElement('img');
    userImage.setAttribute('src', obj.picture.large);
    photo.appendChild(userImage);
    return photo;
}

function getUserInf(obj) {
    let userInf = document.createElement('div');
    userInf.setAttribute('id', 'data');
    let name = document.createElement('p');
    name.innerText = ('Name: ' +
        obj.name.title[0].toUpperCase() +
        obj.name.title[1].toLowerCase()+ ', ' +
        obj.name.first[0].toUpperCase() +
        obj.name.first.slice(1) + ' ' +
        obj.name.last[0].toUpperCase() +
        obj.name.last.slice(1));
    userInf.appendChild(name);
    let gender = document.createElement('p')
    gender.innerText = ( 'Gender: ' +
        obj.gender);
    userInf.appendChild(gender);
    let adress = document.createElement('p');
    adress.innerText = 'Adress: ' +
        obj.location.street[0].toUpperCase() +
        obj.location.street.slice(1) + ', ' +
        obj.location.city[0].toUpperCase() +
        obj.location.city.slice(1)+ ', ' +
        obj.location.state[0].toUpperCase() +
        obj.location.state.slice(1)+ ', ' +
        obj.location.postcode;
    userInf.appendChild(adress);
    let date = document.createElement('p');
    date.innerText = 'Date: ' +
        obj.dob.date[0] +
        obj.dob.date.slice(1)
    userInf.appendChild(date);
    let age = document.createElement('p');
    age.innerText = 'Age: ' +
        obj.dob.age;
    userInf.appendChild(age);
    let email = document.createElement('p');
    email.innerText += 'Email: ' +
        obj.email;
    userInf.appendChild(email);
    let phone = document.createElement('p');
    userInf.appendChild(phone);
    phone.innerText = 'Phone numer: ' +
        obj.cell;
    return userInf;
}