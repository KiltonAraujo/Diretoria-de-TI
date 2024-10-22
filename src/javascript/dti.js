function animateCounter(target, elementId, duration) {
    const element = document.getElementById(elementId);
    const start = 0;
    const end = target;
    let current = start;

    const timer = setInterval(() => {
        current++;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, duration);
}

animateCounter(10, 'counter', 200);
animateCounter(10, 'counter2', 200);