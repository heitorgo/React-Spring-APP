import axios from "axios";


const url_usuario = "http://localhost:8080/usuario/all";

class UsuarioServicos {
    getUsuario(){
        return axios.get(url_usuario);
    }
}

export default new UsuarioServicos();