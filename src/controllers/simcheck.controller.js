/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install if you have not done that already.
 */
const axios = require("axios");
let qs = require('qs');
const base_URL = "https://eu.api.tru.id";
const trueCredentials = require("../../tru.json");

const check =  async (req, res, next) => {
  try {
    let { phone } = req.body;
    if (!phone) {
      return res
        .status(422)
        .json({ phone: "The phone number field is required" });
    }
    const checkRes = await simCheck(phone);
    
    res.json(checkRes);
  } catch (error) {
    return {error};
  }
}

const simCheck = async (phone) => {
  try {
    const reqObj = {
      URI: `${base_URL}/sim_check/v0.1/checks`,
      params: { phone_number: phone },
    };
    let token = (await getAccessToken()).access_token;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const simCheckRes = await axios.post(reqObj.URI, reqObj.params, {
      headers: headers,
    });

    return simCheckRes.data;
  } catch (error) {
    return{error};
  }
}

const getAccessToken = async () => {
  try {
    const reqObj = {
      URI: `${base_URL}/oauth2/v1/token`,
      //convert params to string suing qs package as recommended by the doc.
      params: qs.stringify({
        grant_type: "client_credentials",
        scope: "sim_check",
      }),
    };
    //convert credentials to base64
    // console.log(trueCredentials.credentials[0].client_id);
    let clientDetails = `${trueCredentials.credentials[0].client_id}:${trueCredentials.credentials[0].client_secret}`;
    let encoded_credentials = Buffer.from(clientDetails).toString("base64");

    const headers = {
      Authorization: `Basic ${encoded_credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const tokenRes = await axios.post(reqObj.URI, reqObj.params, {
      headers: headers,
    });
    //console.log(tokenRes.data);
    return tokenRes.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {check, simCheck, getAccessToken};
