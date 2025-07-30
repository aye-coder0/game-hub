import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ccc1e228ae7b4a0fb11dd402a5c9555a'
    }
});