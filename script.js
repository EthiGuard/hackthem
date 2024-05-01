document.addEventListener('DOMContentLoaded', function () {
    const text = "hackthem";
    const delay = 200; // milliseconds
    const cursor = document.getElementById('cursor');
    let i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById('hack-text').textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }

    type();
});
