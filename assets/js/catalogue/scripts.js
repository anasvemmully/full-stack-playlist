class Render {

    constructor(_searches, _searchResultContainerHorizontal, _searchResultContainerVertical, _searchInput ) {

        this._searchesCards = [];
        this._searches = _searches;

        this._searchResultContainerHorizontal = document.querySelector(_searchResultContainerHorizontal);
        this._searchResultContainerVertical = document.querySelector(_searchResultContainerVertical);
        
        this._searchInput = document.querySelector(_searchInput);

        this.generate(this._searches);

        this._searchInput.addEventListener("input", (e) => {
            
            this._searchResultContainerHorizontal.innerHTML = "";
            this._searchResultContainerVertical.innerHTML = "";
            this.search(e.target.value)
        
        });

    }

    search(value) {

        console.log("value")

    }

    generate(card) {            

        this._searchesCards = card.map((e) => {

            var schemType;

            if (e.type == "TASK") schemType = "vertical";
            else if (e.type == "CATEGORY") schemType = "horizontal";
                         
            const cardTemplate = document.querySelector(`[result-template-${schemType}]`).content.cloneNode(true).children[0];
                
            cardTemplate.querySelector(`[card-info-name-${schemType}]`).textContent = e.title;
            cardTemplate.querySelector(`[card-info-description-${schemType}]`).innerHTML = e.description;
            
            if (e.type == "TASK") {
              
                cardTemplate.querySelector(`[card-info-category-${schemType}]`).textContent = `#${e.collection_name}`;
                this._searchResultContainerVertical.append(cardTemplate);
                
            } else if (e.type == "CATEGORY") {
                cardTemplate.querySelector(`[card-info-category-${schemType}]`).textContent = e.type;
                cardTemplate.querySelector(`[banner-${schemType}]`).src = e.banner_url;
                console.log(cardTemplate)
                cardTemplate.querySelector(`[card-info-additional-details-${schemType}]`).innerHTML += `<span>${e.length} Tasks</span>`;
                this._searchResultContainerHorizontal.append(cardTemplate);
            }
            
            return {
                name: e.title,
                type: e.type,
                element: cardTemplate
            }
        })
    }
}

var wrapper = new Render(searches, "#searchResultContainerHorizontal", "#searchResultContainerVertical", "#inputSearch");
