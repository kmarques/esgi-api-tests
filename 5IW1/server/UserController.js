module.exports = function UserController(User) {
  this.cget = (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(users);
    });
  };
  this.get = (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
    });
  };
  this.create = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
    });
  };
  this.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
    });
  };
  this.update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
    });
  };
};
