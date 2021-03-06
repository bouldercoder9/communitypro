const Auth = {
    isAuthenticated: false,
    username: null,
    login(callback) {
        this.isAuthenticated = true;
        setTimeout(callback, 100); //simulate asynchronous code
      },
      logout(callback) {
        this.isAuthenticated = false;
        setTimeout(callback, 100); //simulate asynchronous code
      }
  }
  export default Auth;