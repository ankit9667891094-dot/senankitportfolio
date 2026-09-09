// Contact Form
function sendMsg(e) {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
}


// Light / Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = "☀️ Light";
    } else {
        themeBtn.innerHTML = "🌙 Dark";
    }
});
