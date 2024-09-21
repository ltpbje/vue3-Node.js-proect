import axios from "axios"

const upload = (path,userForm) => {
    const params = new FormData()
    for (let i in userForm) {
        params.append(i, userForm[i])
    }

    // axios.post('/adminapi/user/upload', params, {
    return axios.post(path, params, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res=> res.data)
}

export default upload