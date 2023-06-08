const csrfApi = 'http://127.0.0.1:3000/csrf-token'
const csrfToken = null;

fetch(csrfApi).then(res => {
    csrfToken = res.data.csrfToken;
}).catch(err => {
    console.log(err)
})