export function init() {
    class HeaderEl extends HTMLElement {
        constructor() {
            super()
            this.render()
        }
        render() {
            const style = document.createElement('style')
            style.textContent = `
            .header{
                padding-top: 20px;
                height: 60px;
                background-color: #FF8282;
                text-align: center;
                font-size: 2rem;
                }
            `
            var shadow = this.attachShadow({ mode: "open" })
            shadow.appendChild(style)

            const divEl = document.createElement('div')
            divEl.classList.add('root')

            const headerEl = document.createElement('header')
            headerEl.classList.add('header')
            headerEl.innerText = 'Header '

            divEl.appendChild(headerEl)

            shadow.appendChild(divEl)

            
        }
    }
    customElements.define("header-el", HeaderEl)
}

