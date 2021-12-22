// // const linkSignIn = document.querySelector('.linkSignIn');

const checkUserAccess = async () => {
    const accessToken = await localStorage.getItem('userAccessKey');
    
    const { data } = await axios.post('/authorisation/checkUserToken', accessToken );
    console.log('19 - USER checkUser', data);
    if(data.status === 'unauthorisate'){
        window.location.href = '/authorisation/signup'
    } 
    // else if (data.status === 'ok'){
    //     // linkSignIn.classList.add('hidden');
    //     // window.location.href = '/user'
    //     // linkSignIn.innerHTML = `<h2>${data.userName}</h2>`;
    //     // console.log('after status', data)
    // }
}
checkUserAccess();

const checkAccessToken = async () => {
    const accessToken = await localStorage.getItem('userAccessKey');
    const refreshToken = await localStorage.getItem('refreshToken');
    const { data } = await axios.post('/authorisation/refreshToken', {accessToken, refreshToken} );
    console.log('20 - checkAcsessToken', data)

    if(data.status === 'fail authorisation'){
        authEl.innerHTML = `<h3 style="color:white" align="center">Uncorrect login or password</h3>`
    } else if(data.status === 'ok'){
        localStorage.setItem('userAccessKey', data.payload.payload.accessT);
        localStorage.setItem('refreshToken', data.payload.payload.refreshT);
        // window.location.href = '/'
    };
}
checkAccessToken();



// get ser info for update profile in db
const profileEl = document.forms.profile;
profileEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const accessToken = await localStorage.getItem('userAccessKey');
    const token = await axios.post('/authorisation/checkUserToken', accessToken );
    const id = token.data.payload.result.id;
    console.log('front user token', id)

    const formData = new FormData(ev.target);
    formData.append('id', id)
    // console.log('formData', formData)
    const { data } = await axios.post('/user/profile',  formData );
    console.log('front signup:', data);

    
    

});