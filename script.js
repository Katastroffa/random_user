function start() {
    axios.get('https://randomuser.me/api')
        .then(function (response) {
            console.log(response.data.results[0]);
            render(response.data.results[0])
        })
        .catch(function (error) {
            console.log(error);
        })
}

    function render(obj) {
        document.getElementById('h1').innerText = obj.email;
    }