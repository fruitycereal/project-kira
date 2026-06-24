import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://xcrzzwbjsofjrguvbhfc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjcnp6d2Jqc29manJndXZiaGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNzM0MDgsImV4cCI6MjA5Nzg0OTQwOH0.axttQdcS7NWePn5rhvn7kI0dYRJ-lw9Xo1idF2eLab8"
);

async function loadArchive() {
  const { data } = await supabase
    .from("names")
    .select("*")
    .order("time", { ascending: false });

  document.getElementById("archive-list").innerHTML =
    data.map(n => `<div>• ${n.name}</div>`).join("");
}

window.onload = () => {
  loadArchive();
};