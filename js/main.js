document.getElementById("h1").textContent = `Lost and Found`;

img = document.createElement("img");
img.src = "/images/Logo.jpg";
src = document.getElementById("img");
src.appendChild(img);

function Lost(username, phone, description) {
    this.userName = username;
    this.phone = phone;
    this.desc = description;
}

function clear(inputs) {
    for (let text of inputs) {
        if (text.value) {
            text.value = ""; 
        }
    }
}

function print() {
    var userName = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var desc = document.getElementById("desc").value;

    if (userName && phone && desc) {
        const obj = new Lost(userName, phone, desc);
        document.getElementById("result").innerHTML = `${obj.userName.split(" ")[0]}, someone will call you within one business day. Description: ${obj.desc}`;
        clear(document.getElementsByClassName("text"));
    } else {
        document.getElementById("result").innerHTML = `*** Please fill out all fields ***`;
    }
}