const scriptURL = "https://script.google.com/macros/s/AKfycbxj2OzRzciLrcHuWDwTkMqMLC7mQaTYAKs79i0d0e2qKMrTqbm06X9SDu5JBExR_oYfTw/exec";

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => {
        document.getElementById("responseMsg").innerHTML = "✅ Message sent successfully!";
        document.getElementById("contactForm").reset();
    })
    .catch(err => {
        document.getElementById("responseMsg").innerHTML = "❌ Error! Try again.";
    });
});