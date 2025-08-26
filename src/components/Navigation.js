export function Navigation() {
  return `
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <a href="#home" class="logo-link">
            <span class="logo-text">Devendra Darji</span>
          </a>
        </div>
        
        <ul class="nav-menu" id="nav-menu">
          <li class="nav-item">
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link">Skills</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#experience" class="nav-link">Experience</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
          <li class="nav-item nav-resume-item">
            <a href="/Devendra_Darji_Resume_Senior_Backend.pdf" class="nav-resume-btn" target="_blank">
              <i class="fas fa-download resume-icon"></i>
              <span class="resume-text">Resume</span>
            </a>
          </li>
        </ul>
        
        <div class="nav-toggle" id="nav-toggle">
          <div class="hamburger" id="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  `
}
