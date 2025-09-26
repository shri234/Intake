import React from 'react';
import './IntakeLanding.css';

const IntakeLanding = () => {
  return (
    <div className="intake-landing">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-wrapper">
              <div className="logo-icon">
                <span className="logo-text-in">In</span>
                <span className="logo-text-take">take</span>
              </div>
              <div className="logo-tagline">Healthy bites. Happy teams</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="nav-buttons">
            <button className="btn-secondary">Contact Us</button>
            <button className="btn-primary">Partner with Us</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <svg className="hero-blob" viewBox="0 0 745 653" fill="none">
            <path opacity="0.25" fillRule="evenodd" clipRule="evenodd" d="M262.597 644.672C359.671 672.054 455.822 625.559 540.572 570.869C631.662 512.089 726.177 443.122 741.291 335.77C757.635 219.683 714.692 90.674 617.38 25.3084C528.91 -34.1181 419.362 30.4908 314.41 49.0291C211.51 67.205 84.6781 42.0182 27.5246 129.498C-31.5931 219.984 16.8522 337.466 61.7209 435.798C103.91 528.258 164.785 617.081 262.597 644.672Z" fill="#FF6900" fillOpacity="0.5"/>
          </svg>
          
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-heading">
                  <h1 className="hero-title">
                    <span className="title-main">Elevating Workdays,</span>
                    <span className="title-accent">One Bite at a Time.</span>
                  </h1>
                  <div className="title-gradient-line"></div>
                </div>

                <div className="hero-description">
                  <p>
                    At Intake, <span className="text-gradient">Corporate snacking and food solutions</span> are at the heart of what we do. We make food at work simple, enjoyable, and memorabl helping teams connect over every break and meal. From snacks and meals to beverages and celebrations, we've got workplaces covered throughout the day. Because a good snack or a tasty meal can brighten the mood, we focus on making every bite worth it fresh, flavorful, and never boring.
                  </p>
                </div>

                <div className="hero-cta">
                  <button className="btn-cta">
                    <img src="/api/placeholder/250/64" alt="Start 3-day Trial" />
                  </button>
                </div>
              </div>

              <div className="hero-image">
                <div className="image-background"></div>
                <img src="/api/placeholder/616/500" alt="Corporate catering and office food solutions" className="hero-main-image" />
              </div>
            </div>
          </div>

          <svg className="hero-ornament" viewBox="0 0 706 627" fill="none">
            <path d="M15.5418 582C11.4927 585.221 7.72325 588.262 3 590.361" stroke="#FA830B" strokeOpacity="0.8" strokeWidth="5" strokeLinecap="round"/>
            <path d="M31.4327 584.508C26.8385 597.634 21.3082 610.515 17.2188 623.805" stroke="#FA830B" strokeOpacity="0.8" strokeWidth="5" strokeLinecap="round"/>
            <path d="M690.888 44.8223C694.937 41.6014 698.706 38.5603 703.43 36.4611" stroke="#FA830B" strokeOpacity="0.8" strokeWidth="5" strokeLinecap="round"/>
            <path d="M675.005 42.3145C679.599 29.1881 685.129 16.3076 689.219 3.01693" stroke="#FA830B" strokeOpacity="0.8" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-background">
          <div className="blur-gradient-1"></div>
          <div className="blur-gradient-2"></div>
        </div>
        
        <div className="about-container">
          <div className="section-badge">Meet Intake</div>
          
          <h2 className="section-title">About Us</h2>
          
          <div className="about-content">
            <div className="about-main-card">
              <p>
                Food is more than a necessity—it's an opportunity to connect, celebrate, and energize. At <span className="text-accent">Intake</span> we specialize in providing end-to-end corporate food solutions that blend convenience, variety, and excellence. With multiple vendor partnerships, a commitment to hygiene, and an unwavering focus on client satisfaction, we make sure your organization enjoys a seamless dining experience every day.
              </p>
            </div>
            
            <div className="about-secondary-card">
              <p>
                From <span className="text-accent">small office orders</span> to <span className="text-accent">large corporate events,</span> we ensure variety, convenience, and excellence—every single day.
              </p>
            </div>
          </div>
          
          <div className="section-line"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <div className="section-badge">Our Services</div>
            <h2 className="section-title">
              Smart <span className="text-accent">food</span> & beverage <span className="text-accent">solutions</span> designed for modern workplaces.
            </h2>
            <p className="section-subtitle">
              We keep teams energized, connected, and inspired—whether it's daily snacks, fresh meals, or milestone celebrations.
            </p>
          </div>

          <div className="services-grid">
            {/* Service 1: Corporate Snacks */}
            <div className="service-row">
              <div className="service-content">
                <div className="service-icon corporate-snacks">
                  <svg viewBox="0 0 24 25" fill="none">
                    <path d="M16 10.375C16 11.4359 15.5786 12.4533 14.8284 13.2034C14.0783 13.9536 13.0609 14.375 12 14.375C10.9391 14.375 9.92172 13.9536 9.17157 13.2034C8.42143 12.4533 8 11.4359 8 10.375" stroke="#F3F4F6" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.10156 6.4082H20.8956" stroke="#F3F4F6" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.4 5.842C3.14036 6.18819 3 6.60926 3 7.042V20.375C3 20.9054 3.21071 21.4141 3.58579 21.7892C3.96086 22.1643 4.46957 22.375 5 22.375H19C19.5304 22.375 20.0391 22.1643 20.4142 21.7892C20.7893 21.4141 21 20.9054 21 20.375V7.042C21 6.60926 20.8596 6.18819 20.6 5.842L18.6 3.175C18.4137 2.92661 18.1721 2.725 17.8944 2.58615C17.6167 2.44729 17.3105 2.375 17 2.375H7C6.68951 2.375 6.38328 2.44729 6.10557 2.58615C5.82786 2.725 5.58629 2.92661 5.4 3.175L3.4 5.842Z" stroke="#F3F4F6" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="service-title">Corporate Snacks</h3>
                <p className="service-quote">"Reliable solutions for every office need."</p>
                <p className="service-description">
                  We bring together savory classics and everyday favorites that everyone looks forward to. Each bite is crafted to keep workdays energized and every break more enjoyable. Familiar flavors that never go out of taste.
                </p>
              </div>
              <div className="service-image featured">
                <img src="/api/placeholder/712/320" alt="Corporate Orders" />
              </div>
            </div>

            {/* Service 2: Beverage Solutions */}
            <div className="service-row reverse">
              <div className="service-image">
                <img src="/api/placeholder/712/320" alt="Tea & Coffee Solutions" />
              </div>
              <div className="service-content">
                <div className="service-icon beverage-solutions">
                  <svg viewBox="0 0 24 25" fill="none">
                    <path d="M10 2.875V4.875" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2.875V4.875" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8.875C16.2652 8.875 16.5196 8.98036 16.7071 9.16789C16.8946 9.35543 17 9.60978 17 9.875V17.875C17 18.9359 16.5786 19.9533 15.8284 20.7034C15.0783 21.4536 14.0609 21.875 13 21.875H7C5.93913 21.875 4.92172 21.4536 4.17157 20.7034C3.42143 19.9533 3 18.9359 3 17.875V9.875C3 9.60978 3.10536 9.35543 3.29289 9.16789C3.48043 8.98036 3.73478 8.875 4 8.875H18C19.0609 8.875 20.0783 9.29643 20.8284 10.0466C21.5786 10.7967 22 11.8141 22 12.875C22 13.9359 21.5786 14.9533 20.8284 15.7034C20.0783 16.4536 19.0609 16.875 18 16.875H17" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 2.875V4.875" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="service-title">Beverage Solutions</h3>
                <p className="service-quote">"Keeping your team refreshed, one cup at a time."</p>
                <p className="service-description">
                  From morning chai to evening cold brews, we keep your energy flowing all day. Choose from teas, coffees, and refreshing juices to suit every taste. Whatever you crave, we've got you covered. Ensuring the right sip is always within reach.
                </p>
              </div>
            </div>

            {/* Service 3: Corporate Meals */}
            <div className="service-row">
              <div className="service-content">
                <div className="service-icon corporate-meals">
                  <svg viewBox="0 0 24 25" fill="none">
                    <path d="M3 2.375V9.375C3 10.475 3.9 11.375 5 11.375H9C9.53043 11.375 10.0391 11.1643 10.4142 10.7892C10.7893 10.4141 11 9.90543 11 9.375V2.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 2.375V22.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 15.375V2.375C19.6739 2.375 18.4021 2.90178 17.4645 3.83947C16.5268 4.77715 16 6.04892 16 7.375V13.375C16 14.475 16.9 15.375 18 15.375H21ZM21 15.375V22.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="service-title">Corporate Meals</h3>
                <p className="service-quote">"Nutritious, delicious, and made for the workplace."</p>
                <p className="service-description">
                  Delivered fresh and on time, our menus bring together variety and great taste. Every meal is crafted to keep teams fueled, focused, and ready to take on the day. Food that satisfies without ever slowing you down.
                </p>
              </div>
              <div className="service-image featured">
                <img src="/api/placeholder/712/320" alt="Corporate Meals" />
              </div>
            </div>

            {/* Service 4: Cakes for Corporate Celebrations */}
            <div className="service-row reverse">
              <div className="service-image">
                <img src="/api/placeholder/712/320" alt="Cakes for Corporate Celebrations" />
              </div>
              <div className="service-content">
                <div className="service-icon corporate-celebrations">
                  <svg viewBox="0 0 24 25" fill="none">
                    <path d="M20 21.375V13.375C20 12.8446 19.7893 12.3359 19.4142 11.9608C19.0391 11.5857 18.5304 11.375 18 11.375H6C5.46957 11.375 4.96086 11.5857 4.58579 11.9608C4.21071 12.3359 4 12.8446 4 13.375V21.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 16.375C4 16.375 4.5 15.375 6 15.375C7.5 15.375 8.5 17.375 10 17.375C11.5 17.375 12.5 15.375 14 15.375C15.5 15.375 16.5 17.375 18 17.375C19.5 17.375 20 16.375 20 16.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 21.375H22" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 8.375V11.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8.375V11.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8.375V11.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 4.375H7.01" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 4.375H12.01" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 4.375H17.01" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="service-title">Cakes for Corporate Celebrations</h3>
                <p className="service-quote">"Every milestone deserves a sweet memory."</p>
                <p className="service-description">
                  Milestones deserve sweetness. We craft and deliver fresh cakes and desserts tailored to birthdays, anniversaries, and achievements—making every occasion memorable.
                </p>
              </div>
            </div>

            {/* Service 5: Vending Solutions */}
            <div className="service-row">
              <div className="service-content">
                <div className="service-icon vending-solutions">
                  <svg viewBox="0 0 24 25" fill="none">
                    <path d="M3.9995 14.3757C3.81027 14.3763 3.62474 14.3232 3.46446 14.2226C3.30418 14.122 3.17574 13.978 3.09405 13.8073C3.01237 13.6366 2.9808 13.4462 3.003 13.2583C3.02521 13.0704 3.10028 12.8926 3.2195 12.7457L13.1195 2.54565C13.1938 2.45993 13.295 2.40201 13.4065 2.38138C13.518 2.36076 13.6332 2.37866 13.7332 2.43216C13.8332 2.48565 13.9121 2.57155 13.9568 2.67576C14.0016 2.77997 14.0096 2.8963 13.9795 3.00565L12.0595 9.02565C12.0029 9.17717 11.9839 9.34017 12.0041 9.50066C12.0243 9.66114 12.0832 9.81433 12.1756 9.94708C12.268 10.0798 12.3913 10.1882 12.5348 10.2628C12.6783 10.3375 12.8377 10.3762 12.9995 10.3757H19.9995C20.1887 10.375 20.3743 10.4281 20.5345 10.5287C20.6948 10.6293 20.8233 10.7733 20.905 10.944C20.9866 11.1147 21.0182 11.3051 20.996 11.493C20.9738 11.6809 20.8987 11.8587 20.7795 12.0057L10.8795 22.2057C10.8052 22.2914 10.704 22.3493 10.5925 22.3699C10.481 22.3905 10.3658 22.3726 10.2658 22.3191C10.1658 22.2657 10.0869 22.1798 10.0422 22.0755C9.99742 21.9713 9.98943 21.855 10.0195 21.7457L11.9395 15.7257C11.9961 15.5741 12.0151 15.4111 11.9949 15.2506C11.9747 15.0902 11.9158 14.937 11.8234 14.8042C11.731 14.6715 11.6077 14.5631 11.4642 14.4885C11.3207 14.4138 11.1613 14.3751 10.9995 14.3757H3.9995Z" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="service-title">Vending Solutions</h3>
                <p className="service-quote">"Convenience at your fingertips."</p>
                <p className="service-description">
                  Healthy convenience around the clock. Our smart vending machines offer curated snacks and beverages with seamless payments, full servicing, and 24/7 availability.
                </p>
              </div>
              <div className="service-image featured">
                <img src="/api/placeholder/712/320" alt="Corporate Gift Kits" />
              </div>
            </div>

            {/* Service 6: Corporate Gift Kits */}
            <div className="service-row reverse">
              <div className="service-image">
                <img src="/api/placeholder/712/320" alt="Corporate Gift Kits" />
              </div>
              <div className="service-content">
                <div className="service-icon corporate-gift-kits">
                  <svg viewBox="0 0 24 25" fill="none">
                    <path d="M20 8.375H4C3.44772 8.375 3 8.82272 3 9.375V11.375C3 11.9273 3.44772 12.375 4 12.375H20C20.5523 12.375 21 11.9273 21 11.375V9.375C21 8.82272 20.5523 8.375 20 8.375Z" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8.375V21.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12.375V19.375C19 19.9054 18.7893 20.4141 18.4142 20.7892C18.0391 21.1643 17.5304 21.375 17 21.375H7C6.46957 21.375 5.96086 21.1643 5.58579 20.7892C5.21071 20.4141 5 19.9054 5 19.375V12.375" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 8.37544C6.83696 8.37544 6.20107 8.11205 5.73223 7.6432C5.26339 7.17436 5 6.53848 5 5.87544C5 5.2124 5.26339 4.57651 5.73223 4.10767C6.20107 3.63883 6.83696 3.37544 7.5 3.37544C8.46469 3.35863 9.41003 3.8267 10.2127 4.7186C11.0154 5.6105 11.6383 6.88484 12 8.37544C12.3617 6.88484 12.9846 5.6105 13.7873 4.7186C14.59 3.8267 15.5353 3.35863 16.5 3.37544C17.163 3.37544 17.7989 3.63883 18.2678 4.10767C18.7366 4.57651 19 5.2124 19 5.87544C19 6.53848 18.7366 7.17436 18.2678 7.6432C17.7989 8.11205 17.163 8.37544 16.5 8.37544" stroke="white" strokeWidth="2.00002" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="service-title">Corporate Gift Kits</h3>
                <p className="service-quote">"Thoughtful gestures that go beyond words."</p>
                <p className="service-description">
                  Celebrate connections with ease. Our custom hampers and branded gift kits make recognition, festive celebrations, and client appreciation thoughtful yet effortless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bites and Moments Section */}
      <section className="bites-moments-section">
        <div className="bites-moments-container">
          <div className="section-badge">Every Bite, a Moment</div>
          <h2 className="section-title">Bites and Moments</h2>
          <p className="section-subtitle">
            We believe every moment at work deserves the right bite. From quick grab-and-go snacks for meetings to interactive counters that energize events, we create experiences that keep teams connected. Sweet finishes and pantry-ready options ensure that every break feels special.
          </p>

          <div className="moments-grid">
            <div className="moment-card">
              <div className="moment-image">
                <img src="/api/placeholder/294/221" alt="Quick Bites" />
              </div>
              <div className="moment-content">
                <h3 className="moment-title quick-bites">Quick Bites</h3>
                <p className="moment-description">Light, tasty picks for breaks and meetings.</p>
                <div className="moment-number">01</div>
              </div>
            </div>

            <div className="moment-card">
              <div className="moment-image">
                <img src="/api/placeholder/294/221" alt="Interactive Counters" />
              </div>
              <div className="moment-content">
                <h3 className="moment-title interactive-counters">Interactive Counters</h3>
                <p className="moment-description">Interactive food counters that add flavor and fun to every corporate event.</p>
                <div className="moment-number">02</div>
              </div>
            </div>

            <div className="moment-card">
              <div className="moment-image">
                <img src="/api/placeholder/336/252" alt="On-the-Go Options" />
              </div>
              <div className="moment-content">
                <h3 className="moment-title on-the-go">On-the-Go Options</h3>
                <p className="moment-description">Vending & pantry-ready picks for instant fuel between meetings</p>
                <div className="moment-number">03</div>
              </div>
            </div>

            <div className="moment-card">
              <div className="moment-image">
                <img src="/api/placeholder/294/221" alt="Sweet Finishes" />
              </div>
              <div className="moment-content">
                <h3 className="moment-title sweet-finishes">Sweet Finishes</h3>
                <p className="moment-description">Cakes, pastries and desserts designed to celebrate every moment.</p>
                <div className="moment-number">04</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <div className="section-badge">Our Process</div>
          <h2 className="section-title">
            How We Make <span className="text-accent">Snacking</span> Simple
          </h2>
          <p className="section-subtitle">
            We take the stress out of workplace food. Start with a no-obligation 3-day trial, explore menus customized to your team's tastes, and enjoy seamless pre-scheduled deliveries. With ongoing feedback shaping our offerings, we make sure your team looks forward to every bite.
          </p>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon trial-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M37.5 6.7875V13.125H2.5V6.7875C2.50145 6.29066 2.69946 5.81459 3.05078 5.46328C3.40209 5.11196 3.87816 4.91395 4.375 4.9125H6.06875V7.94375C6.06875 8.18998 6.11725 8.4338 6.21148 8.66128C6.3057 8.88877 6.44381 9.09547 6.61792 9.26958C6.79203 9.44369 6.99873 9.5818 7.22622 9.67602C7.4537 9.77025 7.69752 9.81875 7.94375 9.81875C8.18998 9.81875 8.4338 9.77025 8.66128 9.67602C8.88877 9.5818 9.09547 9.44369 9.26958 9.26958C9.44369 9.09547 9.5818 8.88877 9.67602 8.66128C9.77025 8.4338 9.81875 8.18998 9.81875 7.94375V4.9125H18.125V7.94375C18.125 8.44103 18.3225 8.91794 18.6742 9.26958C19.0258 9.62121 19.5027 9.81875 20 9.81875C20.4973 9.81875 20.9742 9.62121 21.3258 9.26958C21.6775 8.91794 21.875 8.44103 21.875 7.94375V4.9125H30.1813V7.94375C30.1812 8.44103 30.3788 8.91794 30.7304 9.26958C31.0821 9.62121 31.559 9.81875 32.0563 9.81875C32.5535 9.81875 33.0304 9.62121 33.3821 9.26958C33.7337 8.91794 33.9313 8.44103 33.9313 7.94375V4.9125H35.625C36.1218 4.91395 36.5979 5.11196 36.9492 5.46328C37.3005 5.81459 37.4986 6.29066 37.5 6.7875Z" fill="url(#paint0_linear_2202_2287)"/>
                </svg>
              </div>
              <h3 className="step-title">3 Days Trial Run</h3>
              <p className="step-description">
                Experience our service first hand with a complimentary trial that lets your team sample menus and setups before committing.
              </p>
              <div className="step-line blue"></div>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon menu-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.0165 17.1546C24.1036 16.2416 22.8425 15.6777 21.4503 15.6777C20.0581 15.6777 18.796 16.2427 17.8841 17.1546C17.0682 17.9705 16.5311 19.0643 16.4258 20.2819H26.4759C26.3705 19.0643 25.8324 17.9705 25.0165 17.1546Z" fill="url(#paint0_linear_2202_2303)"/>
                </svg>
              </div>
              <h3 className="step-title">Customized Menus</h3>
              <p className="step-description">
                Curated food and beverage plans built around your team's preferences, dietary needs, and office culture.
              </p>
              <div className="step-line purple"></div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon orders-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z" fill="url(#paint0_linear_2202_2328)"/>
                </svg>
              </div>
              <h3 className="step-title">Easy Pre-Orders</h3>
              <p className="step-description">
                Pre-scheduled deliveries that keep your pantry and meal service running smoothly, without last-minute hassles.
              </p>
              <div className="step-line green"></div>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon feedback-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M22.2656 13.2812H19.1406C18.4934 13.2812 17.9688 12.7566 17.9688 12.1094V7.42188C17.9688 6.7757 17.443 6.25 16.7969 6.25C16.1507 6.25 15.625 6.7757 15.625 7.42188V9.76562C15.625 11.7041 14.0479 13.2812 12.1094 13.2812H11.7188V21.0938H22.2656C22.9118 21.0938 23.4375 20.568 23.4375 19.9219V14.4531C23.4375 13.807 22.9118 13.2812 22.2656 13.2812Z" fill="url(#paint0_linear_2202_2377)"/>
                </svg>
              </div>
              <h3 className="step-title">Feedback-Driven</h3>
              <p className="step-description">
                We actively incorporate your team's input, continuously refining menus to keep everyone happy and engaged.
              </p>
              <div className="step-line orange"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">
            Why <span className="text-accent">Intake</span> works for you?
          </h2>
          <p className="section-subtitle">
            The advantages that set us apart in corporate food solutions
          </p>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.38312 24 0 18.6169 0 12C0 5.38312 5.38312 0 12 0C18.6169 0 24 5.38308 24 12C24 18.6169 18.6169 24 12 24ZM16.6843 8.72812C16.5575 8.60148 16.3857 8.53034 16.2065 8.53034C16.0273 8.53034 15.8554 8.60148 15.7287 8.72812L10.6185 13.838L8.27156 11.4904C8.20894 11.4268 8.13434 11.3762 8.05207 11.3416C7.9698 11.307 7.88149 11.289 7.79224 11.2887C7.70298 11.2884 7.61455 11.3057 7.53204 11.3398C7.44953 11.3738 7.37458 11.4238 7.3115 11.487C7.24843 11.5501 7.19848 11.6252 7.16455 11.7077C7.13061 11.7903 7.11336 11.8787 7.11378 11.968C7.11421 12.0572 7.1323 12.1455 7.16702 12.2277C7.20174 12.31 7.25239 12.3845 7.31606 12.447L10.1408 15.2719C10.2677 15.3986 10.4397 15.4698 10.619 15.4698C10.7983 15.4698 10.9702 15.3986 11.0971 15.2719L16.6846 9.68438C16.7474 9.62161 16.7973 9.54707 16.8313 9.46501C16.8653 9.38296 16.8828 9.29501 16.8828 9.20619C16.8827 9.11737 16.8652 9.02943 16.8311 8.9474C16.7971 8.86537 16.7472 8.79085 16.6843 8.72812Z" fill="url(#paint0_linear_2202_2415)"/>
                </svg>
              </div>
              <h3 className="advantage-title">Flexible vendor network & menu variety</h3>
              <div className="advantage-line"></div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.38312 24 0 18.6169 0 12C0 5.38312 5.38312 0 12 0C18.6169 0 24 5.38308 24 12C24 18.6169 18.6169 24 12 24ZM16.6843 8.72812C16.5575 8.60148 16.3857 8.53034 16.2065 8.53034C16.0273 8.53034 15.8554 8.60148 15.7287 8.72812L10.6185 13.838L8.27156 11.4904C8.20894 11.4268 8.13434 11.3762 8.05207 11.3416C7.9698 11.307 7.88149 11.289 7.79224 11.2887C7.70298 11.2884 7.61455 11.3057 7.53204 11.3398C7.44953 11.3738 7.37458 11.4238 7.3115 11.487C7.24843 11.5501 7.19848 11.6252 7.16455 11.7077C7.13061 11.7903 7.11336 11.8787 7.11378 11.968C7.11421 12.0572 7.1323 12.1455 7.16702 12.2277C7.20174 12.31 7.25239 12.3845 7.31606 12.447L10.1408 15.2719C10.2677 15.3986 10.4397 15.4698 10.619 15.4698C10.7983 15.4698 10.9702 15.3986 11.0971 15.2719L16.6846 9.68438C16.7474 9.62161 16.7973 9.54707 16.8313 9.46501C16.8653 9.38296 16.8828 9.29501 16.8828 9.20619C16.8827 9.11737 16.8652 9.02943 16.8311 8.9474C16.7971 8.86537 16.7472 8.79085 16.6843 8.72812Z" fill="url(#paint0_linear_2202_2415)"/>
                </svg>
              </div>
              <h3 className="advantage-title">Premium ingredients & strict hygiene</h3>
              <div className="advantage-line"></div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.38312 24 0 18.6169 0 12C0 5.38312 5.38312 0 12 0C18.6169 0 24 5.38308 24 12C24 18.6169 18.6169 24 12 24ZM16.6843 8.72812C16.5575 8.60148 16.3857 8.53034 16.2065 8.53034C16.0273 8.53034 15.8554 8.60148 15.7287 8.72812L10.6185 13.838L8.27156 11.4904C8.20894 11.4268 8.13434 11.3762 8.05207 11.3416C7.9698 11.307 7.88149 11.289 7.79224 11.2887C7.70298 11.2884 7.61455 11.3057 7.53204 11.3398C7.44953 11.3738 7.37458 11.4238 7.3115 11.487C7.24843 11.5501 7.19848 11.6252 7.16455 11.7077C7.13061 11.7903 7.11336 11.8787 7.11378 11.968C7.11421 12.0572 7.1323 12.1455 7.16702 12.2277C7.20174 12.31 7.25239 12.3845 7.31606 12.447L10.1408 15.2719C10.2677 15.3986 10.4397 15.4698 10.619 15.4698C10.7983 15.4698 10.9702 15.3986 11.0971 15.2719L16.6846 9.68438C16.7474 9.62161 16.7973 9.54707 16.8313 9.46501C16.8653 9.38296 16.8828 9.29501 16.8828 9.20619C16.8827 9.11737 16.8652 9.02943 16.8311 8.9474C16.7971 8.86537 16.7472 8.79085 16.6843 8.72812Z" fill="url(#paint0_linear_2202_2415)"/>
                </svg>
              </div>
              <h3 className="advantage-title">Tailored solutions for corporate needs</h3>
              <div className="advantage-line"></div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.38312 24 0 18.6169 0 12C0 5.38312 5.38312 0 12 0C18.6169 0 24 5.38308 24 12C24 18.6169 18.6169 24 12 24ZM16.6843 8.72812C16.5575 8.60148 16.3857 8.53034 16.2065 8.53034C16.0273 8.53034 15.8554 8.60148 15.7287 8.72812L10.6185 13.838L8.27156 11.4904C8.20894 11.4268 8.13434 11.3762 8.05207 11.3416C7.9698 11.307 7.88149 11.289 7.79224 11.2887C7.70298 11.2884 7.61455 11.3057 7.53204 11.3398C7.44953 11.3738 7.37458 11.4238 7.3115 11.487C7.24843 11.5501 7.19848 11.6252 7.16455 11.7077C7.13061 11.7903 7.11336 11.8787 7.11378 11.968C7.11421 12.0572 7.1323 12.1455 7.16702 12.2277C7.20174 12.31 7.25239 12.3845 7.31606 12.447L10.1408 15.2719C10.2677 15.3986 10.4397 15.4698 10.619 15.4698C10.7983 15.4698 10.9702 15.3986 11.0971 15.2719L16.6846 9.68438C16.7474 9.62161 16.7973 9.54707 16.8313 9.46501C16.8653 9.38296 16.8828 9.29501 16.8828 9.20619C16.8827 9.11737 16.8652 9.02943 16.8311 8.9474C16.7971 8.86537 16.7472 8.79085 16.6843 8.72812Z" fill="url(#paint0_linear_2202_2415)"/>
                </svg>
              </div>
              <h3 className="advantage-title">Dedicated coordination team</h3>
              <div className="advantage-line"></div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.38312 24 0 18.6169 0 12C0 5.38312 5.38312 0 12 0C18.6169 0 24 5.38308 24 12C24 18.6169 18.6169 24 12 24ZM16.6843 8.72812C16.5575 8.60148 16.3857 8.53034 16.2065 8.53034C16.0273 8.53034 15.8554 8.60148 15.7287 8.72812L10.6185 13.838L8.27156 11.4904C8.20894 11.4268 8.13434 11.3762 8.05207 11.3416C7.9698 11.307 7.88149 11.289 7.79224 11.2887C7.70298 11.2884 7.61455 11.3057 7.53204 11.3398C7.44953 11.3738 7.37458 11.4238 7.3115 11.487C7.24843 11.5501 7.19848 11.6252 7.16455 11.7077C7.13061 11.7903 7.11336 11.8787 7.11378 11.968C7.11421 12.0572 7.1323 12.1455 7.16702 12.2277C7.20174 12.31 7.25239 12.3845 7.31606 12.447L10.1408 15.2719C10.2677 15.3986 10.4397 15.4698 10.619 15.4698C10.7983 15.4698 10.9702 15.3986 11.0971 15.2719L16.6846 9.68438C16.7474 9.62161 16.7973 9.54707 16.8313 9.46501C16.8653 9.38296 16.8828 9.29501 16.8828 9.20619C16.8827 9.11737 16.8652 9.02943 16.8311 8.9474C16.7971 8.86537 16.7472 8.79085 16.6843 8.72812Z" fill="url(#paint0_linear_2202_2415)"/>
                </svg>
              </div>
              <h3 className="advantage-title">Professional, approachable service</h3>
              <div className="advantage-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="section-badge black">Because Food Matters</div>
          <h2 className="section-title">
            Our <span className="text-accent">Story</span> - Our <span className="text-accent">Goal</span>
          </h2>

          <div className="story-card">
            <h3 className="story-title">
              Why We Started <span className="text-accent">Intake</span>
            </h3>
            <div className="story-content">
              <p>We've been there—working long hours, counting down to office breaks, wishing for better food options. That's why we started Intake.</p>
              <p>To bring variety, freshness, and excitement to workplace dining. Snacks, meals, and treats that we'd love to eat ourselves—turning every break into something to look forward to, not just get through.</p>
            </div>
            <div className="story-line"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/api/placeholder/152/47" alt="Intake Logo" />
              </div>
              <p className="footer-description">
                Elevating workdays, one bite at a time. Professional corporate food solutions that bring teams together.
              </p>
            </div>

            {/* Contact Us */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M18.3346 5.83398L10.8421 10.6065C10.5879 10.7542 10.2991 10.8319 10.0051 10.8319C9.71102 10.8319 9.42222 10.7542 9.16797 10.6065L1.66797 5.83398" stroke="#FF6900" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.668 3.33398H3.33464C2.41416 3.33398 1.66797 4.08018 1.66797 5.00065V15.0007C1.66797 15.9211 2.41416 16.6673 3.33464 16.6673H16.668C17.5884 16.6673 18.3346 15.9211 18.3346 15.0007V5.00065C18.3346 4.08018 17.5884 3.33398 16.668 3.33398Z" stroke="#FF6900" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>hello@intakefoods.com</span>
                </div>
                <div className="contact-item">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M11.528 13.806C11.7001 13.8851 11.894 13.9031 12.0777 13.8572C12.2615 13.8113 12.4241 13.7042 12.5388 13.5535L12.8346 13.166C12.9899 12.959 13.1912 12.791 13.4226 12.6753C13.654 12.5596 13.9092 12.4993 14.168 12.4993H16.668C17.11 12.4993 17.5339 12.6749 17.8465 12.9875C18.159 13.3001 18.3346 13.724 18.3346 14.166V16.666C18.3346 17.108 18.159 17.532 17.8465 17.8445C17.5339 18.1571 17.11 18.3327 16.668 18.3327C12.6897 18.3327 8.87441 16.7523 6.06137 13.9393C3.24832 11.1262 1.66797 7.31093 1.66797 3.33268C1.66797 2.89065 1.84356 2.46673 2.15612 2.15417C2.46868 1.84161 2.89261 1.66602 3.33464 1.66602H5.83464C6.27666 1.66602 6.70059 1.84161 7.01315 2.15417C7.32571 2.46673 7.5013 2.89065 7.5013 3.33268V5.83268C7.5013 6.09142 7.44106 6.34661 7.32535 6.57804C7.20963 6.80946 7.04163 7.01077 6.83464 7.16602L6.44464 7.45852C6.29165 7.57533 6.18382 7.7415 6.13946 7.92881C6.0951 8.11611 6.11695 8.313 6.2013 8.48602C7.3402 10.7992 9.21332 12.67 11.528 13.806Z" stroke="#FF6900" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>+91 93617 78252 / +91 74015 04726</span>
                </div>
                <div className="contact-item">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M16.6654 8.33268C16.6654 12.4935 12.0495 16.8268 10.4995 18.1652C10.3551 18.2738 10.1794 18.3325 9.9987 18.3325C9.81803 18.3325 9.64226 18.2738 9.49786 18.1652C7.94786 16.8268 3.33203 12.4935 3.33203 8.33268C3.33203 6.56457 4.03441 4.86888 5.28465 3.61864C6.5349 2.36839 8.23059 1.66602 9.9987 1.66602C11.7668 1.66602 13.4625 2.36839 14.7127 3.61864C15.963 4.86888 16.6654 6.56457 16.6654 8.33268Z" stroke="#FF6900" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 10.834C11.3807 10.834 12.5 9.7147 12.5 8.33398C12.5 6.95327 11.3807 5.83398 10 5.83398C8.61929 5.83398 7.5 6.95327 7.5 8.33398C7.5 9.7147 8.61929 10.834 10 10.834Z" stroke="#FF6900" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Chennai, India</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">Services</h3>
              <ul className="footer-links">
                <li>Corporate Orders</li>
                <li>Tea & Coffee Solutions</li>
                <li>Corporate Meals</li>
                <li>Vending Solutions</li>
                <li>Gift Kits</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="footer-section">
              <h3 className="footer-title">Follow Us</h3>
              <div className="social-links">
                <div className="social-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M13.332 6.66602C14.6581 6.66602 15.9299 7.1928 16.8676 8.13048C17.8052 9.06816 18.332 10.3399 18.332 11.666V17.4993H14.9987V11.666C14.9987 11.224 14.8231 10.8001 14.5105 10.4875C14.198 10.1749 13.7741 9.99935 13.332 9.99935C12.89 9.99935 12.4661 10.1749 12.1535 10.4875C11.841 10.8001 11.6654 11.224 11.6654 11.666V17.4993H8.33203V11.666C8.33203 10.3399 8.85882 9.06816 9.7965 8.13048C10.7342 7.1928 12.0059 6.66602 13.332 6.66602Z" stroke="white" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.0013 7.5H1.66797V17.5H5.0013V7.5Z" stroke="white" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.33464 4.99935C4.25511 4.99935 5.0013 4.25316 5.0013 3.33268C5.0013 2.41221 4.25511 1.66602 3.33464 1.66602C2.41416 1.66602 1.66797 2.41221 1.66797 3.33268C1.66797 4.25316 2.41416 4.99935 3.33464 4.99935Z" stroke="white" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="social-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M18.3346 3.3327C18.3346 3.3327 17.7513 5.0827 16.668 6.16603C18.0013 14.4994 8.83464 20.5827 1.66797 15.8327C3.5013 15.916 5.33464 15.3327 6.66797 14.166C2.5013 12.916 0.417969 7.99937 2.5013 4.16603C4.33464 6.3327 7.16797 7.5827 10.0013 7.49937C9.2513 3.99937 13.3346 1.99937 15.8346 4.3327C16.7513 4.3327 18.3346 3.3327 18.3346 3.3327Z" stroke="white" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="social-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M14.168 1.66602H5.83464C3.53345 1.66602 1.66797 3.5315 1.66797 5.83268V14.166C1.66797 16.4672 3.53345 18.3327 5.83464 18.3327H14.168C16.4692 18.3327 18.3346 16.4672 18.3346 14.166V5.83268C18.3346 3.5315 16.4692 1.66602 14.168 1.66602Z" stroke="white" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3337 9.47525C13.4366 10.1688 13.3181 10.8771 12.9952 11.4994C12.6723 12.1218 12.1614 12.6264 11.5351 12.9416C10.9088 13.2569 10.1991 13.3666 9.5069 13.2552C8.81468 13.1438 8.17521 12.817 7.67944 12.3212C7.18367 11.8255 6.85685 11.186 6.74546 10.4938C6.63408 9.80154 6.74379 9.09183 7.05901 8.46556C7.37423 7.8393 7.8789 7.32837 8.50123 7.00545C9.12356 6.68254 9.83187 6.56407 10.5254 6.66692C11.2328 6.77182 11.8878 7.10147 12.3935 7.60717C12.8992 8.11288 13.2288 8.76782 13.3337 9.47525Z" stroke="white" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.582 5.41602H14.5904" stroke="white" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2025 Intake. All rights reserved.
            </div>
            <div className="footer-legal">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntakeLanding;
