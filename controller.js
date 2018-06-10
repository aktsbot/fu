let getHealth = async (req, res) => {
  try {
    return res.status(200).send(`ok`);
  } catch (e) {
    console.log(e);
    console.log(`[server] get health end point met an error`);
  }
};

let uploadFile = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).send("Payload not found!");
    }

    let payload = req.files.payload;
    let mvStat = payload.mv("/home/akts/tmp/file");
    if (!mvStat) {
      return res.status(500).send("error");
    }

    res.set("Location", "/var/foo.jpg");
    return res.status(200).send("success");
  } catch (e) {
    console.log(e);
    console.log(`[server] upload file end point met an error`);
  }
};

module.exports = {
  getHealth,
  uploadFile
};
