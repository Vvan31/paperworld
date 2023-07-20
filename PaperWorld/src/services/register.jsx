import axios from 'axios';

class RegisterService {
    registerUser(user) {
        return axios.post('https://paperworld-production.up.railway.app/api/visitors', user);
    }
}

export default new RegisterService();
