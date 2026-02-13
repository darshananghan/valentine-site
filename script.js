const photos = [
"1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg",
"6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg",
"11.jpeg","12.jpeg","13.jpeg","15.jpeg",
"16.jpeg","17.jpeg","19.jpeg","20.jpeg",
"21.jpeg","22.jpeg","23.jpeg","24.jpeg","25.jpeg",
"26.jpeg","27.jpeg"
];

let currentIndex = 0;
const batchSize = 5;

function startMemories() {
    document.getElementById("gallery").style.display = "block";
    document.getElementById("music").play();
    renderBatch(true);
}

function renderBatch(scrollToTop = false) {
    const container = document.getElementById("photoContainer");
    container.innerHTML = "";

    let end = currentIndex + batchSize;

    for (let i = currentIndex; i < end && i < photos.length; i++) {
        let img = document.createElement("img");
        img.src = photos[i];
        container.appendChild(img);
    }

    // ⭐ MOBILE UX FIX → Focus first photo of batch
    if (scrollToTop && container.firstChild) {
        container.firstChild.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function nextBatch() {
    if (currentIndex + batchSize < photos.length) {
        currentIndex += batchSize;
        renderBatch(true);
    } else {
        showLetter();
    }
}

function prevBatch() {
    if (currentIndex - batchSize >= 0) {
        currentIndex -= batchSize;
        renderBatch(true);
    }
}

const text = `
From the moment you came into my life,
everything became brighter, happier, and more meaningful.

Thank you for being my smile, my peace, and my best friend.

I promise to stand with you in every moment of life.

I love you ❤️
`;

let i = 0;

function showLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "block";

    letter.scrollIntoView({ behavior: "smooth" });

    typeWriter();
}

function typeWriter() {
    if (i < text.length) {
        document.getElementById("loveText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}