const template = document.createElement("template");

template.innerHTML = `
    
`;


class AddedItem extends HTMLElement{

    constructor(){
        super();
        const shadowRoot = this.shadowRoot({open: true});
        shadowRoot.innerHTML = template;
    }

    // get static 

    attributeCallback(){

    }
}

customElements.define("added-item", AddedItem)