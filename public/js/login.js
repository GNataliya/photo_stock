
const authEl = document.querySelector('.auth');


// check auth of user
const authFormEl = document.forms.auth;
authFormEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/authorisation/login', formData);
    console.log('front login:', data);

    if(data.status === 'fail authorisation'){
        authEl.innerHTML = `<h3 style="color:white" align="center">Uncorrect login or password</h3>`
    } else if(data.status === 'ok'){
        localStorage.setItem('userAccessKey', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        window.location.href = '/user'
    };

});


