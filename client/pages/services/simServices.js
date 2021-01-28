import axios from "axios";

 const simCheck = async (phone) => {
    const res = await axios.post("api/v1/sims/sim-check", {phone});
    //return res.data;
    console.log(res);
}

export default simCheck;