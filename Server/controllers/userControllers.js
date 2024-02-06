const registerUser = (req, res, next) => {
    res.json("Register User")
}


const loginUser = (req, res, next) => {
    res.json("Login User")
}


const getUser = (req, res, next) => {
    res.json("User Profile")
}

const changeAvatar = (req, res, next) => {
    res.json("Change User Avatar")
}

const editUser = (req, res, next) => {
    res.json("Edit user details")
}

const getAuthors = (req, res, next) => {
    res.json("Get all users/authors")
}


module.exports = {registerUser, loginUser, changeAvatar, editUser, getUser, getAuthors}
