const Subscriber = require("../model/subscriber");

exports.makeSubscribe = async (req, res) => {
  const { email } = req.body;

  //Check if user exists
  const subsribedUser = await Subscriber.findOne({ email: req.body.email });
  if (subsribedUser) return res.status(400).send("Subsriber Already Exists");

  //Create New User
  const subscriber = new Subscriber({
    email: email,
  });

  try {
    const savedSubscriber = await subscriber.save();
    res.send(savedSubscriber);
    console.log(savedSubscriber);
  } catch (err) {
    console.log(err);
  }
};
