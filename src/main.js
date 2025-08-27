// Import styles
import './styles/main.css'

// Import components
import { Navigation } from './components/Navigation.js'
import { Hero } from './components/Hero.js'
import { About } from './components/About.js'
import { Skills } from './components/Skills.js'
import { Projects } from './components/Projects.js'
import { Experience } from './components/Experience.js'
import { Contact } from './components/Contact.js'
import { Footer } from './components/Footer.js'

// Import utilities
import { initializeAnimations } from './utils/animations.js'
import { initializeNavigation } from './utils/navigation.js'

class Portfolio {
  constructor() {
    this.init()
  }

  init() {
    this.render()
    this.initializeFeatures()
  }

  render() {
    const app = document.getElementById('app')
    
    app.innerHTML = `
      ${Navigation()}
      ${Hero()}
      ${About()}
      ${Skills()}
      ${Projects()}
      ${Experience()}
      ${Contact()}
      ${Footer()}
    `
  }

  initializeFeatures() {
    // Initialize all interactive features
    initializeNavigation()
    initializeAnimations()
    
    // Add loading completion
    document.body.classList.add('loaded')
  }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Portfolio()
})
