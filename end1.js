import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
    "https://xcrzzwbjsofjrguvbhfc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjcnp6d2Jqc29manJndXZiaGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNzM0MDgsImV4cCI6MjA5Nzg0OTQwOH0.axttQdcS7NWePn5rhvn7kI0dYRJ-lw9Xo1idF2eLab8"
);

window.onload = async () => {

    document.body.classList.add("show");

    const { data } = await supabase
        .from("names")
        .select("*")
        .order("time", { ascending: false })
        .limit(1);

    const latest = data[0];

    document.getElementById("name").textContent = latest.name;

    const time = new Date(latest.time);
    time.setSeconds(time.getSeconds() + 40);
    document.getElementById("time").textContent =

    `Time: ${time.toLocaleTimeString()}`;

    document.getElementById("time").textContent =
        `Time: ${time.toLocaleTimeString()}`;

    setTimeout(() => {
        document.getElementById("name").style.opacity = "1";
    }, 500);

    setTimeout(() => {
        document.getElementById("details").style.opacity = "1";
    }, 1500);

    setTimeout(() => {
        document.getElementById("justice").style.opacity = "1";
    }, 2500);

    setTimeout(() => {

        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "end2.html";
        }, 1000);

    }, 6000);

};