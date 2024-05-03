document.addEventListener("DOMContentLoaded", function() {
    const terminal = document.querySelector('.terminal');
    const output = document.querySelector('.output');
    const input = document.querySelector('.input');

    input.focus();

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            input.value = '';
            output.innerHTML += `<div>> ${command}</div>`;
            executeCommand(command);
            terminal.scrollTop = terminal.scrollHeight;
        }
    });

    function executeCommand(command) {
        // Add your command execution logic here
        if (command === 'help') {
            output.innerHTML += '<div>Available commands:</div>';
            output.innerHTML += '<div>- help: Display available commands</div>';
            output.innerHTML += '<div>- [your_command]: Your custom command</div>';
        } else {
            output.innerHTML += `<div>'${command}' is not recognized as a command. Type 'help' for available commands.</div>`;
        }
    }
});
