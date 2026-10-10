document.addEventListener("DOMContentLoaded", async function () {
const content = document.getElementById("website-content");
const pages = ["about.html","skills.html", "projects.html","resume.html", "contact.html"
];
for (const page of pages) {
try {
 const response = await fetch(page);
if (!response.ok) {throw new Error("Cannot load: " + page);
 }
const html = await response.text();
 content.insertAdjacentHTML("beforeend", html);
} catch (error) { console.error(error);
 }
}
const links = document.querySelectorAll("nav a");
links.forEach(function (link) {
link.addEventListener("click", function (event) {
const href = link.getAttribute("href");
if (href && href.startsWith("#")) {
 event.preventDefault();
const section = document.querySelector(href);
if (section) {
section.scrollIntoView({behavior: "smooth", block: "start"
 });

}
}
 });
});
const projectButton = document.querySelector('.home .btn' );
if (projectButton) {
 projectButton.addEventListener("click", function (event) {
 const href = projectButton.getAttribute("href");
if (href && href.startsWith("#")) {
event.preventDefault();
 const section = document.querySelector(href);
if (section) {
section.scrollIntoView({
behavior: "smooth",
 block: "start"
});
}
}
});
}
});
