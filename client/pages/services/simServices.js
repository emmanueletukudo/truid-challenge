import axios from "axios";

 const simCheck = async (phone) => {
    await axios.post("/api/v1/sims/sim-check", phone)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

export default simCheck;