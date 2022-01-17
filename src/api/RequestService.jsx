const {REACT_APP_PORT, REACT_APP_DOMAIN} = process.env;


export default class RequestSrvice {

  static async registration(formData) {
    const response = await fetch(`http://${REACT_APP_DOMAIN}:${REACT_APP_PORT}/auth/registration`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        username: formData.login,
      })
    }).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error('Bad response from server');
      }
      return response;
    }).catch(reject => {
      console.log(reject);
    });
    return response;
  }

  static async login(email, password) {
    const response = await fetch(`http://${REACT_APP_DOMAIN}:${REACT_APP_PORT}/auth/login`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error('Bad response from server');
      }
      return response;
    }).catch(reject => {
      console.log(reject);
    });
    return response;
  };
}
