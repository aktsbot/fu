const rs = require("randomstring");
const path = require("path");
const config = require("./config");

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

    /**
     * I need a file name that is of the form
     * filename_<randomstring>.ext
     * ex -> file_3rt56Y7ueO90.txt
     */
    const randomExtension = rs.generate({
      length: 12
    });

    /**
     * we send payload=file.txt
     * payload.name gives us file.txt
     * path.extname will give us .txt
     */
    const payloadExtension = path.extname(payload.name);

    /**
     * the file_ in comment line 25 is a start pattern
     * for saving all files uploaded to our server
     * newFileName will have a value similar to line 25
     */
    const newFileName = `${
      config.defaultFileNamePattern
    }_${randomExtension}${payloadExtension}`;

    // we move the new file to the default server upload location
    let mvStat = payload.mv(`${config.uploadLocation}/${newFileName}`);
    if (!mvStat) {
      return res.status(500).send("error");
    }

    /**
     * return the default access location for the file,
     * so that users can do stuff with it later.
     * The location is send via the header, as I wanted
     * fu to replicate thumbor's default behaviour *sigh*
     */
    res.set("Location", `${config.fileGetEndpoint}/${newFileName}`);
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
