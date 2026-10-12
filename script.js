const music = document.getElementById("bgMusic");

function startLove() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    music.play();
    typeWriter();
}

function toggleMusic() {
    music.paused ? music.play() : music.pause();
}

const text = `Hey Teams,
Being with you feels natural and beautiful.
These moments, these smiles, they mean a lot to me.
I’m really happy you guys're in my life.`;

let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
