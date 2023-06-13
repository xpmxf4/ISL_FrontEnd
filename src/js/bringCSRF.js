// lambda endpoints
const csrfApi = "https://ig6oli6355.execute-api.ap-northeast-2.amazonaws.com/dev";
// const csrfApi = 'http://127.0.0.1:3000';

if (localStorage.getItem("csrfToken") == null) {
    fetch(csrfApi + "/csrf-token")
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('csrfToken', data.csrfToken)
        })
        .catch(err => {
            console.log(err)
        });
}