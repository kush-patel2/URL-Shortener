// const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken');
const secret ="KUSH$123@";

function setUser(user) {
    // sessionIdToUserMap.set(id,user);
    // const payload = {
        
    //     ...user,
    // };
    return jwt.sign({
        _id: user._id,
        email: user.email,
    },secret);
};

function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secret);    
    } catch (error) {
        return null;
    }
    
    // return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
};