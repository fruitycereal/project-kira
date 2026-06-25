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
        .order("time", { ascending: false });

    document.getElementById("archive-list").innerHTML =
        data.map(record =>
            `<div>${record.name}</div>`
        ).join("");

    document.getElementById("total-records").textContent =
        `Total records: ${data.length}`;

    document.getElementById("rewrite-btn").onclick = () => {

        sessionStorage.removeItem("username");

        window.location.href = "entername.html";
    };

};