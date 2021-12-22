const registrEl = document.querySelector('.signup');


// signUp, send user info for create profile in db
const signUpEl = document.forms.signup;
signUpEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/authorisation/signup', formData);
    // console.log('front signup:', data);

    if(data.status === 'dublicate_email'){
        registrEl.innerHTML = `<h3 style="color:white" align="center">Email is already declarated</h3>`
    } 
    else if(data.status === 'ok'){
        localStorage.setItem('userAccessKey', data.accessToken);
        //localStorage.setItem('refreshToken', data.refreshToken);
        window.location.href = '/user';
    };

});