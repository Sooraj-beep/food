import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1NBFOf4q0u8AeQTb6tQCCL5Gi7l8Y_dC1ae8qfTIiP7IjO-DqO7GLTw1SR50Yk9d0ANn4RCO0lgME3V6nssFy_2LY3obYT1zvjboTfHdIznuivGdrpU3Mc796vXGYHYx'
    }
});