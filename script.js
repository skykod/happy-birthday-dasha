function startConfetti(){

    confetti({
        particleCount:200,
        spread:120,
        origin:{y:0.6}
    });

}



function startHearts(){

    function startHeartRain() {
        const totalDuration = 10000;   // ← сколько секунд всего будет идти дождь (здесь 10 сек)

        const interval = setInterval(() => {
            const count = 4 + Math.floor(Math.random() * 7); // 4–10 сердец за раз

            for (let i = 0; i < count; i++) {
                let heart = document.createElement("div");
                heart.className = "heart";
                heart.innerHTML = ["💖", "❤️", "💕", "💗"][Math.floor(Math.random()*4)];

                heart.style.left = Math.random() * 100 + "vw";
                heart.style.top = (-10 - Math.random() * 20) + "vh";
                heart.style.animationDuration = (3 + Math.random() * 3) + "s"; // 3–6 сек падения

                document.body.appendChild(heart);

                setTimeout(() => heart.remove(), 8000);
            }
        }, 120); // частота появления пачек (меньше = гуще)

        // ← вот это главное — останавливаем через заданное время
        setTimeout(() => {
            clearInterval(interval);
            console.log("Дождь сердец закончился 😊");
        }, totalDuration);
    }

    startHeartRain();

}