//your JS code here. If required.
document.getElementById('saveButton').onclick = function(event) {
    event.preventDefault(); // Prevent form submission
    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    // Set cookies
    document.cookie = `fontsize=${fontSize}; path=/`;
    document.cookie = `fontcolor=${fontColor}; path=/`;
}

window.onload = function() {
    const cookies = document.cookie.split('; ');
    let fontSize, fontColor;

    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name === 'fontsize') fontSize = value;
        if (name === 'fontcolor') fontColor = value;
    });

    if (fontSize) {
        document.body.style.fontSize = fontSize + 'px';
        document.getElementById('fontsize').value = fontSize;
    }
    if (fontColor) {
        document.body.style.color = fontColor;
        document.getElementById('fontcolor').value = fontColor;
    }
}