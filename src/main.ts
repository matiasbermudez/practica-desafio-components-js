import './style.css'
import { init as headerEl } from './components/header/header'
import { init as articleEl } from './components/articles/articles' 
import { init as footerEl } from './components/footer/footer'
import { init as contactEl} from './components/contact/contact'
(function main () {
 
  headerEl()

  articleEl()

  footerEl()

  contactEl()

})()

