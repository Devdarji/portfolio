export function initializeContactForm() {
  console.log('Initializing contact form...')
  
  // Wait for DOM to be fully loaded
  const initForm = () => {
    const contactForm = document.getElementById('contact-form')
    console.log('Contact form element:', contactForm)
    
    if (contactForm) {
      console.log('Contact form found, adding event listener')
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault()
        console.log('Form submitted')
        
        // Get form data
        const formData = new FormData(this)
        const name = formData.get('name')
        const email = formData.get('email')
        const subject = formData.get('subject')
        const message = formData.get('message')
        
        console.log('Form data:', { name, email, subject, message })
        
        // Simple validation
        if (!name || !email || !subject || !message) {
          showNotification('Please fill in all fields', 'error')
          return
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          showNotification('Please enter a valid email address', 'error')
          return
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent
        
        // Show loading state
        submitBtn.textContent = 'Sending...'
        submitBtn.disabled = true
        
        // Simulate API call delay
        setTimeout(() => {
          // Reset button
          submitBtn.textContent = originalText
          submitBtn.disabled = false
          
          // Show success message
          showNotification('Message sent successfully! I\'ll get back to you soon.', 'success')
          
          // Reset form
          this.reset()
        }, 2000)
      })
    } else {
      console.log('Contact form not found, retrying in 500ms...')
      setTimeout(initForm, 500)
    }
  }
  
  // Try to initialize immediately, or wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForm)
  } else {
    initForm()
  }
}

export function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification')
  if (existingNotification) {
    existingNotification.remove()
  }
  
  // Create notification element
  const notification = document.createElement('div')
  notification.className = `notification notification--${type}`
  notification.textContent = message
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
    word-wrap: break-word;
  `
  
  // Set background color based on type
  switch (type) {
    case 'success':
      notification.style.backgroundColor = '#10b981'
      break
    case 'error':
      notification.style.backgroundColor = '#ef4444'
      break
    case 'warning':
      notification.style.backgroundColor = '#f59e0b'
      break
    default:
      notification.style.backgroundColor = '#6b7280'
  }
  
  // Add to DOM
  document.body.appendChild(notification)
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)'
  }, 100)
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)'
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove()
      }
    }, 300)
  }, 5000)
}
