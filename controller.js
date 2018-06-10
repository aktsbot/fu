let getHealth = async (req, res) => {
  try {
    return res.send(`OK`);
  } catch (e) {
    console.log(`[server] get health end point met an error`);
  }
};

module.exports = {
  getHealth
};
