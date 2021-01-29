const {getAccessToken} = require("../controllers/simcheck.controller");

describe("Sim check api test", () => {
    beforeAll(async () => {
    });

    test("Get access token", async() => {
        const token = await getAccessToken();
        //console.log(token);
        expect(token).toEqual(expect.objectContaining(token)); 
        expect(token.scope).toEqual("sim_check");
    });
})