export function init (){
    class footerEl extends HTMLElement{
        constructor(){
            super();
            this.render()
        }
        render(){
            const style = document.createElement('style')
            style.textContent = `
                .footer{
                    background-color: #FFA0EA;
                    height: 233px;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center; 
                    
                }
                .footer__h3{
                    font-size: 22px;
                    color: black;
                    text-align: center;
                }
            `
            const shadow = this.attachShadow({ mode : "open" })
            shadow.appendChild(style)

            const footerEl = document.createElement('footer')
            footerEl.classList.add('footer')

            const h3El = document.createElement('h3')
            h3El.classList.add('footer__h3')

            h3El.innerText = 'Footer'

            footerEl.appendChild(h3El)

            shadow.appendChild(footerEl)
        }
    }

    customElements.define('footer-el', footerEl)
}