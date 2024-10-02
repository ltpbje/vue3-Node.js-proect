import axios from "axios"

const upload = (path,userForm) => {
    const params = new FormData()
    // console.log(params)

    for (let i in userForm) {
        // console.log(userForm[i])
        
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