function goToPage2() {
    document.getElementById('wrapper').style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'rules.html'
    }, 1000) ;
}