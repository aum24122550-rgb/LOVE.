const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const stars = [];

for (let i = 0; i < 900; i++) {
    stars.push({
        x: (Math.random() - 0.5) * canvas.width,
        y: (Math.random() - 0.5) * canvas.height,
        z: Math.random() * canvas.width
    });
}

function drawStars() {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const s of stars) {

        s.z -= 18;

        if (s.z <= 1) {
            s.x = (Math.random() - 0.5) * canvas.width;
            s.y = (Math.random() - 0.5) * canvas.height;
            s.z = canvas.width;
        }

        const k = 128 / s.z;

        const x = s.x * k + canvas.width / 2;
        const y = s.y * k + canvas.height / 2;

        const size = (1 - s.z / canvas.width) * 5;

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x, y, Math.max(size, 0.5), 0, Math.PI * 2);
        ctx.fill();
    }

    requestAnimationFrame(drawStars);
}

drawStars();

const words = [
    { text: "3", color: "#ff4db8" },
    { text: "2", color: "#ff4db8" },
    { text: "1", color: "#ffd84d" },
    { text: "I", color: "#ffffff" },
    { text: "LOVE", color: "#ff3399" },
    { text: "YOU", color: "#ff66cc" }
];

const text = document.getElementById("text");

let index = 0;ฃ
function showWord() {

    text.innerText = words[index].text;
    text.style.color = words[index].color;

    // รีเซ็ต Animation
    text.classList.remove("fade");
    void text.offsetWidth;
    text.classList.add("fade");

    index++;

    if (index < words.length) {

        setTimeout(showWord, 900);

    } else {

        setTimeout(() => {

            const flash = document.getElementById("flash");

            flash.style.opacity = "1";

            setTimeout(() => {

                // เปลี่ยนไปหน้าถัดไป
                window.location.href = "name.html";

            }, 500);

        }, 800);

    }

}

// เริ่มหลังจากโหลด 0.5 วินาที
setTimeout(showWord, 500);
