// Function to load HTML content dynamically
function loadHTML(id, file) {
    // Check if the element with the specified ID exists on the page
    const element = document.getElementById(id);
    if (element) {
        fetch(file)
            .then(response => response.text())  // Convert response to text
            .then(html => {
                element.innerHTML = html;  // Insert the HTML into the div
            })
            .catch(error => {
                console.error(`Error loading ${id} from ${file}:`, error);  // Handle errors
            });
    }
}
// Load header, navbar, and footer dynamically
loadHTML("nav", "../assets/common/nav.html");
loadHTML("footer", "../assets/common/footer.html");
loadHTML("nav_port", "../assets/common/nav_portfolio.html");
