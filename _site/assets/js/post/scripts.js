(() => {

    var headings = document.querySelectorAll("h1, h2");
    var brochure = document.getElementById("markdown-brochure-contents");


    headings.forEach((node) => {

        var Padding = 0;
        if (node.tagName != "H1") Padding = parseInt(node.tagName[1]) - 1;

        brochure.innerHTML += 
        `<a href="#${node.id}" style="padding-left: ${Padding * 1}rem" class=\"brochure-item\">
            ${node.firstChild.innerHTML}
        </a>`

    })

})();