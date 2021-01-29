import axios from "axios";

const simCheck = async (phone) => {
  const res = await axios.post("/api/v1/sims/sim-check", { phone: phone });
  return res.data;
};

export default simCheck;
