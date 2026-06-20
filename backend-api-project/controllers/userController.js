const users = require("../data/users");

const getUsers = (req, res) => {
    res.status(200).json(users);
};

const addUser = (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            message: "Name and Age are required",
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        age,
    };

    users.push(newUser);

    res.status(201).json({
        message: "User added successfully",
        user: newUser,
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json(user);
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(index, 1);

  res.status(200).json({
    message: "User deleted successfully",
    user: deletedUser[0],
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (!name || !age) {
    return res.status(400).json({
      message: "Name and Age are required",
    });
  }

  user.name = name;
  user.age = age;

  res.status(200).json({
    message: "User updated successfully",
    user,
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
};