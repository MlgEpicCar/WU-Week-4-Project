document.getElementById("h1").textContent = `Lost and Found`;

img = document.createElement("img");
img.src = "/images/Logo.jpg";
src = document.getElementById("img");
src.appendChild(img);

function print() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const desc = document.getElementById("desc").value.trim();

    if (!name || !phone || !desc) {
        document.getElementById("h3").textContent = `*** Please fill out all fields ***`;
    } else {
        document.getElementById("h3").textContent = `${name}, someone will call you within one business day. Description: ${desc}`;
    }
}