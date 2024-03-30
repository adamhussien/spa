
const route = (event) => {
    event.preventDefault();
    const url = event.target.getAttribute("href");
    window.history.pushState({}, "", url);
    handleLocation();
};

const routes = {
   // "/": "index.html",
    "/about.html": "about.html",
    "/service.html": "service.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    const html = await fetch(route).then((data) => data.text());
    document.querySelector('.content').innerHTML = html;
};

window.onpopstate = handleLocation;
handleLocation();
 

