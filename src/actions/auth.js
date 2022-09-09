import axios from 'axios'

export const signin = async (formData, navigate) => {
    try {
        const { data } = await axios.post('http://localhost:5000/user/signin', formData)
        localStorage.setItem('profile', JSON.stringify({ ...data }))
        //navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = async (formData, navigate) => {
    try {
        const { data } = await axios.post('http://localhost:5000/user/signup', formData)
        localStorage.setItem('profile', JSON.stringify({ ...data }))
        //navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const logout = (setUser, navigate) => {
    try {
        localStorage.clear()
        //setUser(null)
        //navigate('/')
    } catch (error) {
        console.log(error)
    }
}