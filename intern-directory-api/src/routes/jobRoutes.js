const express = require("express");
const prisma = require("../prisma");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { status } = req.query;

    const jobs = await prisma.job.findMany({
      where: status
        ? {
            status,
          }
        : {},
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const { status } = req.body;

    const updatedJob = await prisma.job.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update status",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    const updatedJob = await prisma.job.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.job.delete({
      where: {
        id,
      },
    });

    res.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete job",
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const { company, position, location } = req.body;

    const updatedJob = await prisma.job.update({
      where: {
        id,
      },
      data: {
        company,
        position,
        location,
      },
    });

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;