document.addEventListener('DOMContentLoaded', function () {
    const text = "█hackthem█";
    const delay = 200; // milliseconds
    const cursor = document.getElementById('cursor');
    let i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById('hack-text').textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else {
            // Animation finished, show menu after a delay
            setTimeout(function() {
                document.getElementById('menu').style.display = 'block';
            }, 1000); // Adjust the delay as needed
        }
    }

    type();
});
