class Auth {
    constructor(){
        this.authenticated = false;
   }
    login(data, callback) {
        localStorage.setItem('token', data.token);
        this.authenticated = true;
        callback();
    }
    logout(callback) {
        localStorage.removeItem('token');
        this.authenticated = false;
        callback();
    }
    isAuthenticated(){
        this.authenticated = false;
        if(localStorage.getItem('token')){
            this.authenticated = true;
        }
        return this.authenticated;
    }
   }
   export default new Auth()