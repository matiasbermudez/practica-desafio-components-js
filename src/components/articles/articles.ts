export function init() {
    class Articles extends HTMLElement {
        constructor() {
            super()
            this.render()
        }
        render() {
            const style = document.createElement('style');
            style.textContent = `
                .articulo-home{
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;   
                }
                .articulo__titulo{
                        color: red;
                }
                .articulo__parrafo{
                   margin: 30px;
                }

            `
            const shadow = this.attachShadow({ mode: "open" });
            shadow.appendChild(style);

            const articleEl = document.createElement('article');
            articleEl.classList.add('articulo-home');

            const tituloEl = document.createElement('h2');
            tituloEl.classList.add('articulo__titulo');

            const parrafoEl = document.createElement('p');
            parrafoEl.classList.add('articulo__parrafo');
            parrafoEl.innerText = `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur 
                iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, 
                libero porro sit beatae laboriosam a aut consequatur quidem?

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur 
                iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, 
                libero porro sit beatae laboriosam a aut consequatur quidem?
            `

            const parametro: string = this.getAttribute('parametro')

            tituloEl.innerText = parametro


            articleEl.appendChild(tituloEl)
            articleEl.appendChild(parrafoEl)

            shadow.appendChild(articleEl)
        }
    }
    customElements.define('articulo-el', Articles)
}