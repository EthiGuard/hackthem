document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("input");
    const outputElement = document.getElementById("output");

    inputElement.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = inputElement.value.trim().toLowerCase();
            inputElement.value = ""; // Clear input field
            
            // Send command to backend
            fetch("/execute", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ command: command })
            })
            .then(response => response.json())
            .then(data => {
                outputElement.innerHTML += data.output + "<br>";
                outputElement.scrollTop = outputElement.scrollHeight; // Scroll to bottom
            })
            .catch(error => {
                console.error("Error:", error);
            });
        }
    });
});
