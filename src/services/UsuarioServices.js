import axios from "axios";

const url_todosusuarios = "http://localhost:8080/usuario/all";
const url_deleteusuario = "http://localhost:8080/usuario/delete";
const url_addusuario = "http://localhost:8080/usuario/add";
const url_editusuario = "http://localhost:8080/usuario/update"

class UsuarioServices{
    getUsuario(){
        return axios.get(url_todosusuarios);
    }

    createUsuario(usuario){
        return axios.post(url_addusuario, usuario);
    }

    editUsuario(usuario){
        return axios.put(url_editusuario+"/"+usuario.id_usuario, usuario);
    }

    deleteUsuario(id_usuario){
        return axios.delete(url_deleteusuario+"/"+id_usuario);
    }
}

export default new UsuarioServices();