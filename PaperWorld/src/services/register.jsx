import axios from 'axios';

class RegisterService {
    registerUser(user) {
        return axios.post('https://paperworld-production.up.railway.app/api/visitors', user);
    }

    registerExhibitor(user) {
        return axios.post('https://paperworld-production.up.railway.app/api/exhibitors?populate=spot', user);
    }

    getRegisteredExhibitorsSpots() {
        return axios.get('https://paperworld-production.up.railway.app/api/exhibitors');
    }

    getSpots() {
        return axios.get('https://paperworld-production.up.railway.app/api/spots?populate=exhibitor');
    }
}

export default new RegisterService();
