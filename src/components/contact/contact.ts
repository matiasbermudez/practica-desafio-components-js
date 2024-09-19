export function init() {
    class contactEl extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const style = document.createElement('style');
            style.textContent = `
                .contact__form{
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap:15px; 
                }
                .contact__form{
                margin: 50px 0 50px 0;
                }
                .contact__contenedor-input{
                  display:flex;
                    flex-direction: column;
                    align-items: start;
                    gap: 5px;
                }
                .contact__label{
                    font-size: 15px;
                    font-weight: 400;
                }
                .contact__input{
                    width: 312px;
                    height: 40px;
                    margin 30px; 
                    border: solid 2px grey;
                }
                .contact__submit{
                    height: 42px;
                    width: 322px;
                    background-color: #9CBBE9;
                    font-size: 20px;
                    font-weight: 500;
                    text-align: center;
                   
                }
            `

            const shadow = this.attachShadow({ mode: "open" })
            shadow.appendChild(style)


            const formEl = document.createElement('form')
            formEl.classList.add('contact__form')

            const contenedorEl = document.createElement('div')
            contenedorEl.classList.add('contact__contenedor-input')

            const labelEl = document.createElement('label')
            labelEl.classList.add('contact__label')
            labelEl.id = 'nombre'
            labelEl.textContent = 'Nombre'

            const inputEl = document.createElement('input')
            inputEl.classList.add('contact__input')
            inputEl.name = 'nombre'
            inputEl.placeholder = 'Ingrese su nombre'

            contenedorEl.appendChild(labelEl)
            contenedorEl.appendChild(inputEl)

            const buttonEl = document.createElement('button')
            buttonEl.classList.add('contact__submit')
            buttonEl.type = 'submit'
            buttonEl.textContent = 'Enviar'

            formEl.appendChild(contenedorEl)
            formEl.appendChild(buttonEl)


            shadow.appendChild(formEl)

        }
    }

    customElements.define('contact-el', contactEl)
}