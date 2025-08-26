export function initializeAnimations() {
  // Enhanced Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        
        // Add staggered animation for child elements
        const children = entry.target.querySelectorAll('.skill-item, .tech-tag, .timeline-item')
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1'
            child.style.transform = 'translateY(0)'
          }, index * 100)
        })
      }
    })
  }, observerOptions)

  // Add fade-in class to elements and observe them
  const elementsToAnimate = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .about-stats, .summary-card')
  
  elementsToAnimate.forEach(el => {
    el.classList.add('fade-in')
    observer.observe(el)
  })

  // Enhanced typing animation for hero title
  function typeWriter(element, text, speed = 50) {
    let i = 0
    element.innerHTML = ''
    
    function type() {
      if (i < text.length) {
        if (text.charAt(i) === '<') {
          // Handle HTML tags
          const tagEnd = text.indexOf('>', i)
          if (tagEnd !== -1) {
            element.innerHTML += text.substring(i, tagEnd + 1)
            i = tagEnd + 1
          }
        } else {
          element.innerHTML += text.charAt(i)
          i++
        }
        setTimeout(type, speed)
      } else {
        // Add cursor blink effect
        element.innerHTML += '<span class="cursor">|</span>'
        setTimeout(() => {
          const cursor = element.querySelector('.cursor')
          if (cursor) cursor.remove()
        }, 2000)
      }
    }
    
    type()
  }

  // Initialize typing animation
  const heroTitle = document.querySelector('.hero-title')
  if (heroTitle) {
    const originalText = heroTitle.innerHTML
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 75)
    }, 1000)
  }

  // Parallax effect for hero section
  let ticking = false
  
  function updateParallax() {
    const scrolled = window.pageYOffset
    const hero = document.querySelector('.hero')
    const heroHeight = hero ? hero.offsetHeight : 0
    
    if (hero && scrolled < heroHeight) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`
      
      // Parallax for floating elements
      const floatingElements = document.querySelectorAll('.floating-element')
      floatingElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05)
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
      })
    }
    
    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  })

  // Enhanced skills animation on scroll
  const animateSkills = () => {
    const skillItems = document.querySelectorAll('.skill-item')
    const progressBars = document.querySelectorAll('.progress-bar')
    
    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0) scale(1)'
      }, index * 50)
    })

    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = '85%'
      }, index * 200)
    })
  }

  // Initialize skill items with initial state
  const skillItems = document.querySelectorAll('.skill-item')
  skillItems.forEach(item => {
    item.style.opacity = '0'
    item.style.transform = 'translateY(10px) scale(0.9)'
    item.style.transition = 'all 0.5s ease-out'
  })

  // Observe skills section
  const skillsSection = document.querySelector('.skills')
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills()
          skillsObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    
    skillsObserver.observe(skillsSection)
  }

  // Enhanced project card hover effects
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px) scale(1.02)'
      
      // Animate tech tags
      const techTags = this.querySelectorAll('.tech-tag')
      techTags.forEach((tag, index) => {
        setTimeout(() => {
          tag.style.transform = 'translateY(-2px)'
        }, index * 50)
      })
    })
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)'
      
      // Reset tech tags
      const techTags = this.querySelectorAll('.tech-tag')
      techTags.forEach(tag => {
        tag.style.transform = 'translateY(0)'
      })
    })
  })

  // Smooth reveal animation for sections
  const revealSections = () => {
    const sections = document.querySelectorAll('section')
    const windowHeight = window.innerHeight
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top
      const sectionVisible = 150
      
      if (sectionTop < windowHeight - sectionVisible) {
        section.classList.add('section-visible')
      }
    })
  }

  window.addEventListener('scroll', revealSections)
  revealSections() // Initial check

  // Add loading completion with stagger effect
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.add('loaded')
      
      // Stagger animation for navigation items
      const navItems = document.querySelectorAll('.nav-item')
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1'
          item.style.transform = 'translateY(0)'
        }, index * 100)
      })
    }, 500)
  })

  // Initialize navigation items
  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach(item => {
    item.style.opacity = '0'
    item.style.transform = 'translateY(-10px)'
    item.style.transition = 'all 0.3s ease-out'
  })

  // Mouse cursor trail effect (optional)
  let mouseTrail = []
  const maxTrailLength = 10

  document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() })
    
    if (mouseTrail.length > maxTrailLength) {
      mouseTrail.shift()
    }
  })

  // Animate numbers counting up
  const animateNumbers = () => {
    const numbers = document.querySelectorAll('.stat-number, .hero-stat .stat-number')
    
    numbers.forEach(number => {
      const target = parseInt(number.textContent.replace(/\D/g, ''))
      const suffix = number.textContent.replace(/\d/g, '')
      let current = 0
      const increment = target / 50
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        number.textContent = Math.floor(current) + suffix
      }, 30)
    })
  }

  // Observe stats sections for number animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers()
        statsObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  const statsElements = document.querySelectorAll('.about-stats, .hero-stats')
  statsElements.forEach(element => {
    if (element) statsObserver.observe(element)
  })
}
