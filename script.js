const evidence = {
  1: {
    title: "Surface Facts",
    text: "The public story is always the easiest layer to find. This file contains the basic facts surrounding Duff Beer—the version most people accept without asking what sits underneath it."
  },
  2: {
    title: "Strange Details",
    text: "Small inconsistencies begin to appear here. Dates, claims, and stories don't always line up. None of them prove anything on their own, but together they make the surface story harder to trust."
  },
  3: {
    title: "Buried Records",
    text: "Older reports point toward details that were overlooked or forgotten. Some accounts contradict the official version, leaving investigators with more questions than answers."
  },
  4: {
    title: "The Deep",
    text: "The deeper the investigation goes, the less certain the evidence becomes. Rumor, speculation, and fragments of information start mixing together. Treat everything here as unverified until proven otherwise."
  },
  5: {
    title: "UNKNOWN",
    text: "You've reached the bottom of the known iceberg. There may be another layer below this one—but if there is, nobody has produced enough evidence to map it yet."
  }
};

const modal = document.getElementById("levelModal");
const modalTitle = document.getElementById("modalTitle");
const modalNumber = document.getElementById("modalNumber");
const modalText = document.getElementById("modalText");
const closeButtons = document.querySelectorAll("[data-close]");
const levelButtons = document.querySelectorAll(".level-card");
const soundToggle = document.getElementById("soundToggle");

function openEvidence(level) {
  const item = evidence[level];
  if (!item) return;

  modalNumber.textContent = `EVIDENCE ${String(level).padStart(2, "0")}`;
  modalTitle.textContent = item.title;
  modalText.textContent = item.text;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeEvidence() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => openEvidence(button.dataset.level));
});

closeButtons.forEach((button) => button.addEventListener("click", closeEvidence));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeEvidence();
  }
});

soundToggle.addEventListener("click", () => {
  const enabled = soundToggle.getAttribute("aria-pressed") === "true";
  soundToggle.setAttribute("aria-pressed", String(!enabled));
  soundToggle.textContent = enabled ? "◉ AMBIENT: OFF" : "◉ AMBIENT: ON";
});

// Give the page a subtle depth effect as the investigator descends.
window.addEventListener("scroll", () => {
  const depth = Math.min(window.scrollY / 1800, 1);
  document.documentElement.style.setProperty("--depth", depth.toFixed(3));
}, { passive: true });
