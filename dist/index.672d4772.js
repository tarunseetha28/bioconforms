function setActiveNavLink() {
    const url = window.location.href;
    const links = document.querySelectorAll(".navitems a");
    links.forEach((link)=>{
        const linkUrl = link.href;
        if (url.includes(linkUrl)) link.classList.add("active");
    });
}

//# sourceMappingURL=index.672d4772.js.map
