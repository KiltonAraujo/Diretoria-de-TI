document.addEventListener("DOMContentLoaded", function() {
    fetchFooter();
    fetchHeader();
});

function fetchFooter() {
    fetch("../footer.html") 
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar o footer:", error));
}

function fetchHeader() {
    fetch("../header.html") 
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar o header:", error));
}