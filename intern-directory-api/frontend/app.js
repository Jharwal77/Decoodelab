const API_URL = "http://localhost:5000/api/jobs";

let allJobs = [];

const jobList = document.getElementById("jobList");
const form = document.getElementById("jobForm");
const themeBtn = document.getElementById("themeBtn");

async function loadJobs(status = "") {
  try {
    jobList.innerHTML = "<h2>Loading...</h2>";

    const response = await fetch(
      status ? `${API_URL}?status=${status}` : API_URL
    );

    const jobs = await response.json();

    allJobs = jobs;

    updateStats(jobs);

    renderJobs(jobs);
  } catch (error) {
    console.log(error);
    showToast("Failed to load jobs");
  }
}

loadJobs();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("jobId").value;

  const company = document.getElementById("company").value;
  const position = document.getElementById("position").value;
  const location = document.getElementById("location").value;

  try {
    if (id) {
      await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
          position,
          location,
        }),
      });

      showToast("Job updated successfully");
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
          position,
          location,
        }),
      });

      showToast("Job added successfully");
    }

    form.reset();
    document.getElementById("jobId").value = "";

    loadJobs();
  } catch (error) {
    showToast("Something went wrong");
  }
});

async function deleteJob(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  showToast("Job deleted");

  loadJobs();
}

async function updateStatus(id, status) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status,
    }),
  });

  showToast("Status updated");

  loadJobs();
}

function editJob(id, company, position, location) {
  document.getElementById("jobId").value = id;
  document.getElementById("company").value = company;
  document.getElementById("position").value = position;
  document.getElementById("location").value = location;
}

function searchJobs() {
  const search = document
    .getElementById("search")
    .value
    .toLowerCase();

  const filteredJobs = allJobs.filter((job) =>
    job.company.toLowerCase().includes(search)
  );

  renderJobs(filteredJobs);
}

function sortJobs() {
  const sortValue = document.getElementById("sortJobs").value;

  let sortedJobs = [...allJobs];

  if (sortValue === "company") {
    sortedJobs.sort((a, b) =>
      a.company.localeCompare(b.company)
    );
  }

  if (sortValue === "status") {
    sortedJobs.sort((a, b) =>
      a.status.localeCompare(b.status)
    );
  }

  renderJobs(sortedJobs);
}

function updateStats(jobs) {
  document.getElementById("totalJobs").textContent = jobs.length;

  document.getElementById("appliedJobs").textContent =
    jobs.filter((job) => job.status === "Applied").length;

  document.getElementById("interviewJobs").textContent =
    jobs.filter((job) => job.status === "Interview").length;

  document.getElementById("rejectedJobs").textContent =
    jobs.filter((job) => job.status === "Rejected").length;
}

function renderJobs(jobs) {
  jobList.innerHTML = "";

  if (jobs.length === 0) {
    jobList.innerHTML = "<h2>No Jobs Found</h2>";
    return;
  }

  jobs.forEach((job) => {
    jobList.innerHTML += `
      <div class="card">
        <h3>${job.company}</h3>

        <p><strong>Position:</strong> ${job.position}</p>

        <p><strong>Location:</strong> ${job.location || "N/A"}</p>

        <p><strong>Status:</strong> ${job.status}</p>

        <button onclick="updateStatus(${job.id}, 'Applied')">
          Applied
        </button>

        <button onclick="updateStatus(${job.id}, 'Interview')">
          Interview
        </button>

        <button onclick="updateStatus(${job.id}, 'Rejected')">
          Reject
        </button>

        <button onclick="editJob(
          ${job.id},
          '${job.company}',
          '${job.position}',
          '${job.location || ""}'
        )">
          Edit
        </button>

        <button onclick="deleteJob(${job.id})">
          Delete
        </button>
      </div>
    `;
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;

  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark")
      ? "dark"
      : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}