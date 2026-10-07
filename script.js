let heinCount = 0;


/* =========================
   HEIN BUTTON
========================= */

function sayHein() {

    heinCount++;

    const counter =
        document.getElementById("heinCount");

    const word =
        document.getElementById("heinWord");


    counter.textContent = heinCount;


    const versions = [
        "HEIN?",
        "HEIN?!",
        "HEINNN?",
        "HEIN.™",
        "HEIN?! 😭"
    ];


    word.textContent =
        versions[heinCount % versions.length];


    word.style.transform =
        `scale(1.08) rotate(${Math.random() * 8 - 4}deg)`;


    setTimeout(() => {

        word.style.transform =
            "scale(1) rotate(0deg)";

    }, 150);

}


/* =========================
   CONFETTI
========================= */

function celebrate() {

    const canvas =
        document.getElementById("confetti");

    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const colors = [
        "#ff4f8b",
        "#8b5cf6",
        "#ffffff",
        "#ffd166",
        "#60a5fa"
    ];


    const pieces =
        Array.from(
            { length: 250 },
            () => ({

                x:
                    window.innerWidth / 2,

                y:
                    window.innerHeight * 0.55,

                vx:
                    (Math.random() - 0.5) * 14,

                vy:
                    Math.random() * -15 - 3,

                size:
                    Math.random() * 8 + 3,

                rotation:
                    Math.random() * Math.PI

            })
        );


    let frame = 0;


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(piece => {

            piece.x += piece.vx;

            piece.vy += 0.35;

            piece.y += piece.vy;

            piece.rotation += 0.1;


            ctx.save();


            ctx.translate(
                piece.x,
                piece.y
            );


            ctx.rotate(
                piece.rotation
            );


            ctx.fillStyle =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size
            );


            ctx.restore();

        });


        frame++;


        if (frame < 200) {

            requestAnimationFrame(
                animate
            );

        } else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        }

    }


    animate();


    document.getElementById(
        "heinWord"
    ).textContent =
        "HEINNNNN?!";
}


/* =========================
   IMAGE ERROR HANDLING
========================= */

document
    .querySelectorAll(".memory-card img, .profile-image img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

                image.parentElement.classList.add(
                    "image-missing"
                );

            }
        );

    });
