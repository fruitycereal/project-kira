const name = sessionStorage.getItem("username");

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://xcrzzwbjsofjrguvbhfc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjcnp6d2Jqc29manJndXZiaGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNzM0MDgsImV4cCI6MjA5Nzg0OTQwOH0.axttQdcS7NWePn5rhvn7kI0dYRJ-lw9Xo1idF2eLab8"
);

async function saveName(name) {
  await supabase.from("names").insert([{ name }]);
}

window.onload = () => {

    document.body.classList.add("show");

    const nameElement = document.getElementById("name");
    const pencil = document.getElementById("pencil");

    nameElement.textContent = "";

    setTimeout(() => {
        pencil.style.opacity = "1";
        let index = 0;

        const typing = setInterval(() => {

            nameElement.textContent += name[index];

            const rect = nameElement.getBoundingClientRect();
            pencil.style.left = (rect.right + 300) + "px";
            pencil.style.top = (rect.top - 400) + "px";

            index++;
            if (index >= name.length) {
                clearInterval(typing);
                saveName(name);

                setTimeout(() => {
                    const black = document.getElementById('black-screen');
                    const video = document.getElementById( 'intro-video');

                    black.style.opacity = '1';

                        setTimeout(() => {
                            document.getElementById('wrapper').style.opacity = '0';
                            pencil.style.opacity = '0';
                            
                            video.style.opacity = '1';
                            video.play();

                            setTimeout(() => {
                                black.style.opacity = '0';
                            }, 300);

                        video.addEventListener('ended', () => {
                            window.location.href = 'end1.html';
                        });

                    }, 800);

                  }, 1700);
                }

        }, 50);
    }, 3000);

};