let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." },
    { id: "G10", src: "./img/g10.png", virtualImg: "./img/v10.png", brand: "Gentle Monster", name: "Jennie - La Pêche 01", color: "Black", price: 999, description: "Jentle Garden introduces La Pêche 01, a rectangular black acetate frame with a bold cat-eye silhouette." },
    { id: "G11", src: "./img/g11.png", virtualImg: "./img/v11.png", brand: "Gentle Monster", name: "Jennie - La Pêche PC4", color: "Pink Venom", price: 999, description: "Jentle Garden introduces La Pêche PC4, a rectangular pink acetate frame with a bold cat-eye silhouette." },
    { id: "G12", src: "./img/g12.png", virtualImg: "./img/v12.png", brand: "Gentle Monster", name: "Jennie - La Pêche W2", color: "White", price: 999, description: "Jentle Garden introduces La Pêche W2, a rectangular white acetate frame with a bold cat-eye silhouette." }
];

let renderGlasses = glassesList => {
    let htmlContent = glassesList.reduce((html, item) => {
        return html + `
            <img src="${item.src}" alt="" class="col-4 vglasses__items" onclick="renderVirGlasses('${item.id}')">
        `
    }, '');
    document.querySelector('#vglassesList').innerHTML = htmlContent;
}

window.renderVirGlasses = (glassId) => {
    let glass = dataGlasses.find(item => item.id === glassId);
    if (glass) {
        let virtualGlassContent = '';
        let glassInfo = '';
        virtualGlassContent += `
            <img src="${glass.virtualImg}" alt="" id="virGlass-${glass.id}" class="virtual-glass">
        `;
        glassInfo += `
            <h5 class="vglasses__name">${glass.name} - ${glass.brand} (${glass.color})</h5>
            <span class="vglasses__price">$${glass.price}</span>
            <span class="vglasses__stock">Stocking</span>
            <p class="vglasses__desc">${glass.description}</p>
        `;
        document.querySelector('#avatar').innerHTML = virtualGlassContent;
        document.querySelector('#glassesInfo').innerHTML = glassInfo;
        document.querySelector('#glassesInfo').style.display = 'block';
    }
}

window.removeGlasses = (param) => {
    if (!param) {
        document.querySelector('.virtual-glass').style.display = 'none';
        document.querySelector('#glassesInfo').style.display = 'none';
        return
    }
    document.querySelector('.virtual-glass').style.display = 'block';
    document.querySelector('#glassesInfo').style.display = 'block';
}

window.onload = () => {
    renderGlasses(dataGlasses);
}

