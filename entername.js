function goToPage2() {
    const name = document.getElementById("nameBox").value;

    if (!name) return;

    sessionStorage.setItem("username", name);

    window.location.href = "writename.html";
}