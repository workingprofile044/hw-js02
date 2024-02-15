document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    const clickerCounter = document.getElementById('clicker__counter');
    const cookie = document.getElementById('cookie');

    cookie.addEventListener('click', function() {
        clickCount++;
        clickerCounter.textContent = clickCount;
        changeCookieSize();
    });

    function changeCookieSize() {
        const currentWidth = parseInt(cookie.width);
        const currentHeight = parseInt(cookie.height);

        // Чередование увеличения и уменьшения размера печеньки при каждом клике
        if (clickCount % 2 === 0) {
            cookie.style.width = (currentWidth + 10) + 'px';
            cookie.style.height = (currentHeight + 10) + 'px';
        } else {
            cookie.style.width = (currentWidth - 10) + 'px';
            cookie.style.height = (currentHeight - 10) + 'px';
        }
    }
});
