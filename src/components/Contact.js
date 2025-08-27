export function Contact() {
  return `
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-header">
          <h2 class="section-title">Let's Connect</h2>
          <!-- <p class="section-description">
            Open to new opportunities • Ready to discuss how I can contribute to your team
          </p> -->
        </div>

        <!-- Full Width Contact Section -->
        <div class="contact-main-full">
          <!-- Full Width Attractive Contact Information -->
          <div class="contact-info-section-full">
            <div class="contact-header-modern">
              <h3 class="contact-title-modern">
                <i class="fas fa-address-book"></i>
                Contact Information
              </h3>
              <p class="contact-subtitle-modern">Let's connect and discuss opportunities</p>
            </div>

            <!-- Essential Contact Cards Grid -->
            <div class="contact-cards-essential-grid">
              <!-- Email Card -->
              <div class="contact-card-modern email-card">
                <div class="card-icon-wrapper">
                  <i class="fas fa-envelope"></i>
                  <div class="icon-pulse"></div>
                </div>
                <div class="card-content">
                  <h4>Email</h4>
                  <a href="mailto:darjidevendra3@gmail.com" class="contact-link">
                    darjidevendra3@gmail.com
                  </a>
                </div>
                <div class="card-action">
                  <a href="mailto:darjidevendra3@gmail.com?subject=Job%20Opportunity%20-%20Portfolio%20Contact&body=Hi%20Devendra,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.%0D%0A%0D%0ACompany:%20%0D%0APosition:%20%0D%0ADetails:%20%0D%0A%0D%0ABest%20regards," 
                     class="action-btn email-btn">
                    <i class="fas fa-paper-plane"></i>
                  </a>
                </div>
              </div>

              <!-- Phone Card -->
              <div class="contact-card-modern phone-card">
                <div class="card-icon-wrapper">
                  <i class="fas fa-phone"></i>
                  <div class="icon-pulse"></div>
                </div>
                <div class="card-content">
                  <h4>Phone</h4>
                  <a href="tel:+919714241860" class="contact-link">
                    +91 9714241860
                  </a>
                </div>
                <div class="card-action">
                  <a href="tel:+919714241860" class="action-btn phone-btn">
                    <i class="fas fa-phone-alt"></i>
                  </a>
                </div>
              </div>

              <!-- Location Card -->
              <div class="contact-card-modern location-card">
                <div class="card-icon-wrapper">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="icon-pulse"></div>
                </div>
                <div class="card-content">
                  <h4>Location</h4>
                  <span class="contact-text">Ahmedabad, Gujarat</span>
                </div>
                <div class="card-status">
                  <span class="status-badge remote">Remote OK</span>
                </div>
              </div>
            </div>

            <!-- Professional Links Section -->
            <div class="professional-links-section-full">
              <div class="links-header">
                <h4>Professional Profiles</h4>
                <span class="links-subtitle">Connect with me on these platforms</span>
              </div>
              
              <div class="links-grid-full">
                <a href="https://www.linkedin.com/in/dev-darji/" target="_blank" rel="noopener noreferrer" 
                   class="profile-link-full linkedin-link">
                  <div class="profile-icon">
                    <i class="fab fa-linkedin-in"></i>
                  </div>
                  <div class="profile-content">
                    <h5>LinkedIn</h5>
                    <span>Professional Network</span>
                  </div>
                  <div class="profile-action">
                    <i class="fas fa-external-link-alt"></i>
                  </div>
                </a>
                
                <a href="https://github.com/Devdarji" target="_blank" rel="noopener noreferrer" 
                   class="profile-link-full github-link">
                  <div class="profile-icon">
                    <i class="fab fa-github"></i>
                  </div>
                  <div class="profile-content">
                    <h5>GitHub</h5>
                    <span>Code Repository</span>
                  </div>
                  <div class="profile-action">
                    <i class="fas fa-external-link-alt"></i>
                  </div>
                </a>
                
                <a href="https://x.com/_devenofficial_" target="_blank" rel="noopener noreferrer" 
                   class="profile-link-full twitter-link">
                  <div class="profile-icon">
                    <i class="fab fa-twitter"></i>
                  </div>
                  <div class="profile-content">
                    <h5>Twitter</h5>
                    <span>Tech Updates</span>
                  </div>
                  <div class="profile-action">
                    <i class="fas fa-external-link-alt"></i>
                  </div>
                </a>
                
                <a href="./assets/resume.pdf" download 
                   class="profile-link-full resume-link">
                  <div class="profile-icon">
                    <i class="fas fa-file-download"></i>
                  </div>
                  <div class="profile-content">
                    <h5>Resume</h5>
                    <span>Download PDF</span>
                  </div>
                  <div class="profile-action">
                    <i class="fas fa-download"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
