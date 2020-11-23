function fetchProfile(url) {
    fetch(url).then(function(res) {
        return res.json();
    }).then(function(data) {
        // get output div 
        const profileOutput = document.querySelector('.profile-output');
        console.log(data);
        let htmlOutput = "";

        data.forEach(function(item) {
            htmlOutput += `
            <div class="col-lg-3">
                <div class="border rounded border-primary p-2 profile mt-4">
                    <img src="${item.avatar_url}" class="w-75 rounded-circle mb-2">
                    <h5>Login: ${item.login}</h5>
                    <p>ID: ${item.id}</p>
                    <a href="${item.html_url}" class="btn btn-outline-primary">Visit Profile</a>
                </div>
            </div>`;
        });

        profileOutput.innerHTML = htmlOutput;
    });
}

fetchProfile('https://api.github.com/users');