import axios from "axios";

// export default {
//     getRandomDog: function() {
//       return axios.get("https://dog.ceo/api/breeds/image/random");
//     },

export default {
    getUsers: function(){
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
}