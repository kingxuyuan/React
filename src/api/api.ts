import request from '../tools/request';

const api = {
    config: () => request({ url: 'http://127.0.0.1:5000/users' })
}

export default api;