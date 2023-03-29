export const authentication = async ({ email, password }) => { //mi componente tiene que esperar a que mi servicio se ejecute por completo para que el token no me lo devuelva en blanco
    let token = null;
    await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json", 
  
        // "Authorization": "Bearer "     
      },
      
      body: JSON.stringify({ email, password }) //JSON a texto plano
    })
      .then(res => {
        console.log('res', res)
        token = {
          ...res,
          ok: false,
          status: res.status
        }
        return res.json()
      })
      .then(res => {
  
        console.log('res', res)
        token = {
          ok: (token.status == 200) ? true : false, //respuesta correcta
          message: (token.status == 200) ? "Login ejecutado de forma correcta" : res,
          token: (token.status == 200) ? res : null
        };
        localStorage.setItem('access', JSON.stringify(res))
      })
      .catch(error => {
        console.log(error, error.response)
        token = {
          ok: false,
          message: "Error de logueo",
          token: null
  
        }
      });
    return token;
  
  }