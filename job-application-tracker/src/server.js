const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Job Tracker API Running");
});

app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email, password } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.user.delete({
      where: { id },
    });

    res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});