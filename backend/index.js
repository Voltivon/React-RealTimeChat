const express = require("express");
const cors = require("cors");
const {default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "3d6ef38e-dffe-449d-99bc-8b2aefc7db14"}}
        )
        
        return res.status(r.status).json(r.data);
    } catch(e){
        if (e.response) {
            return res.status(e.response.status).json(e.response.data);
        } else {
            // handle error without response object
            return res.status(500).json({ message: "Internal server error" });
        }
    }


  
});

app.listen(3001);