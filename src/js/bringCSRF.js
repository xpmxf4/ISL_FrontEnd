const csrfApi = 'http://127.0.0.1:3000/csrf-token'

fetch(csrfApi).then(res => {
    const csrfToken = res.data;
    console.log(csrfToken);
}).catch(err => {
    console.log(err)
})