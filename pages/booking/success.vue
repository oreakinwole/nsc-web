<template>
  <div class="booking-success-page">
    <div class="container">
      <div class="success-content">
        <!-- Success Animation -->
        <div class="success-icon-wrapper">
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
        </div>

        <!-- Success Message -->
        <h1 class="success-title">Booking Confirmed!</h1>
        <p class="success-subtitle">
          Your payment was successful. We've sent a confirmation email to
          <strong>{{ guestEmail }}</strong>
        </p>

        <!-- Booking Reference -->
        <div class="booking-reference">
          <div class="reference-label">Booking Reference</div>
          <div class="reference-number">{{ bookingId }}</div>
          <button @click="copyReference" class="copy-btn" :class="{ copied }">
            {{ copied ? '✓ Copied!' : '📋 Copy' }}
          </button>
        </div>

        <!-- Booking Details Card -->
        <div class="booking-details-card">
          <div class="card-header">
            <h2>Booking Details</h2>
            <span class="status-badge">Confirmed</span>
          </div>

          <div class="property-info">
            <img :src="booking.propertyImage" :alt="booking.propertyTitle" class="property-image">
            <div class="property-details">
              <h3>{{ booking.propertyTitle }}</h3>
              <p class="property-location">📍 {{ booking.propertyLocation }}</p>
            </div>
          </div>

          <div class="booking-info">
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">📅</div>
                <div>
                  <div class="info-label">Check-in</div>
                  <div class="info-value">{{ formatDate(booking.checkIn) }}</div>
                  <div class="info-time">After 2:00 PM</div>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">📅</div>
                <div>
                  <div class="info-label">Check-out</div>
                  <div class="info-value">{{ formatDate(booking.checkOut) }}</div>
                  <div class="info-time">Before 12:00 PM</div>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">👥</div>
                <div>
                  <div class="info-label">Guests</div>
                  <div class="info-value">{{ booking.guests }} Guest{{ booking.guests > 1 ? 's' : '' }}</div>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">🌙</div>
                <div>
                  <div class="info-label">Nights</div>
                  <div class="info-value">{{ booking.nights }} Night{{ booking.nights > 1 ? 's' : '' }}</div>
                </div>
              </div>
            </div>

            <div class="price-summary">
              <div class="price-row">
                <span>Total Amount Paid</span>
                <span class="price-value">₦{{ booking.totalAmount.toLocaleString() }}</span>
              </div>
            </div>
          </div>

          <!-- Host Contact -->
          <div class="host-contact">
            <div class="host-avatar">{{ booking.host.initials }}</div>
            <div class="host-info">
              <div class="host-name">Hosted by {{ booking.host.name }}</div>
              <div class="host-meta">Response time: Within 1 hour</div>
            </div>
            <button class="contact-host-btn">
              💬 Contact Host
            </button>
          </div>
        </div>

        <!-- Next Steps -->
        <div class="next-steps-card">
          <h2>What's Next?</h2>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Check Your Email</h3>
                <p>We've sent you a confirmation with all booking details and instructions</p>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Prepare for Your Stay</h3>
                <p>Review the house rules and contact the host if you have any questions</p>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Check-in Instructions</h3>
                <p>The host will send check-in details 24 hours before your arrival</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button @click="downloadReceipt" class="secondary-btn">
            📄 Download Receipt
          </button>
          <button @click="viewBooking" class="secondary-btn">
            📋 View Full Booking
          </button>
          <button @click="goHome" class="primary-btn">
            🏠 Back to Home
          </button>
        </div>

        <!-- Support Banner -->
        <div class="support-banner">
          <div class="support-icon">🎯</div>
          <div class="support-text">
            <h4>Need Help?</h4>
            <p>Our support team is available 24/7 to assist you</p>
          </div>
          <button class="support-btn">Contact Support</button>
        </div>

        <!-- Share -->
        <div class="share-section">
          <p>Share your excitement!</p>
          <div class="share-buttons">
            <button @click="share('whatsapp')" class="share-btn whatsapp">
              WhatsApp
            </button>
            <button @click="share('twitter')" class="share-btn twitter">
              Twitter
            </button>
            <button @click="share('facebook')" class="share-btn facebook">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

// Get data from query params
const bookingId = ref(route.query.bookingId || 'BK' + Date.now())
const guestEmail = ref('john.doe@example.com') // Would come from auth store

const copied = ref(false)

// Mock booking data (would come from API)
const booking = ref({
  propertyTitle: 'Luxury 3 Bedroom Apartment in Lekki Phase 1',
  propertyLocation: 'Lekki Phase 1, Lagos',
  propertyImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300',
  checkIn: '2025-02-15',
  checkOut: '2025-02-18',
  guests: 4,
  nights: 3,
  totalAmount: 305500,
  host: {
    name: 'Chioma Adeleke',
    initials: 'CA'
  }
})

// Methods
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

const copyReference = async () => {
  try {
    await navigator.clipboard.writeText(bookingId.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy:', error)
  }
}

const downloadReceipt = () => {
  // TODO: Implement receipt download
  console.log('Download receipt')
}

const viewBooking = () => {
  // Navigate to booking details page
  router.push(`/profile/guest?tab=bookings`)
}

const goHome = () => {
  router.push('/')
}

const share = (platform) => {
  const text = `Just booked an amazing stay at ${booking.value.propertyTitle} through NSC!`
  const url = window.location.origin

  switch (platform) {
    case 'whatsapp':
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
      break
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
      break
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
      break
  }
}

// Set metadata
useHead({
  title: 'Booking Confirmed - NSC',
  meta: [
    { name: 'description', content: 'Your booking has been confirmed' }
  ]
})
</script>

<style scoped>
.booking-success-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
  padding: 60px 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.success-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Success Animation */
.success-icon-wrapper {
  margin-bottom: 30px;
}

.success-checkmark {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  position: relative;
}

.check-icon {
  width: 120px;
  height: 120px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #049b35;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  animation: scaleAnimation 0.5s ease-in-out;
}

.icon-line {
  height: 6px;
  background-color: white;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
}

.icon-line.line-tip {
  top: 56px;
  left: 25px;
  width: 30px;
  transform: rotate(45deg);
  animation: checkmarkTip 0.4s 0.3s ease-in-out forwards;
  opacity: 0;
}

.icon-line.line-long {
  top: 48px;
  right: 15px;
  width: 60px;
  transform: rotate(-45deg);
  animation: checkmarkLong 0.4s 0.5s ease-in-out forwards;
  opacity: 0;
}

.icon-circle {
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(4, 155, 53, 0.2);
}

.icon-fix {
  top: 8px;
  width: 7px;
  left: 32px;
  z-index: 1;
  height: 90px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: white;
}

@keyframes scaleAnimation {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes checkmarkTip {
  0% {
    width: 0;
    left: 20px;
    top: 56px;
    opacity: 0;
  }
  54% {
    width: 0;
    left: 20px;
    top: 56px;
    opacity: 1;
  }
  70% {
    width: 35px;
    left: 16px;
    top: 56px;
    opacity: 1;
  }
  100% {
    width: 30px;
    left: 25px;
    top: 56px;
    opacity: 1;
  }
}

@keyframes checkmarkLong {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
    opacity: 0;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
    opacity: 1;
  }
  84% {
    width: 65px;
    right: 8px;
    top: 47px;
    opacity: 1;
  }
  100% {
    width: 60px;
    right: 15px;
    top: 48px;
    opacity: 1;
  }
}

/* Success Text */
.success-title {
  font-size: 40px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 15px;
  text-align: center;
}

.success-subtitle {
  font-size: 18px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 500px;
}

/* Booking Reference */
.booking-reference {
  background: white;
  padding: 25px 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 600px;
}

.reference-label {
  font-size: 13px;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.reference-number {
  flex: 1;
  font-size: 24px;
  font-weight: 800;
  color: #049b35;
  font-family: 'Courier New', monospace;
}

.copy-btn {
  padding: 10px 20px;
  background: #f0fdf4;
  border: 2px solid #049b35;
  color: #049b35;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background: #049b35;
  color: white;
}

.copy-btn.copied {
  background: #049b35;
  color: white;
}

/* Booking Details Card */
.booking-details-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-bottom: 30px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.card-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.status-badge {
  padding: 8px 16px;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Property Info */
.property-info {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e0e0e0;
}

.property-image {
  width: 120px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
}

.property-details h3 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.property-location {
  color: #6b7280;
  font-size: 15px;
}

/* Booking Info */
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-bottom: 25px;
}

.info-item {
  display: flex;
  gap: 12px;
}

.info-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.info-label {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 5px;
  font-weight: 600;
}

.info-value {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 3px;
}

.info-time {
  font-size: 13px;
  color: #6b7280;
}

.price-summary {
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  margin-bottom: 25px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #333;
}

.price-value {
  font-size: 28px;
  font-weight: 800;
  color: #049b35;
}

/* Host Contact */
.host-contact {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.host-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  flex-shrink: 0;
}

.host-info {
  flex: 1;
}

.host-name {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 5px;
}

.host-meta {
  font-size: 14px;
  color: #6b7280;
}

.contact-host-btn {
  padding: 12px 24px;
  background: white;
  border: 2px solid #049b35;
  color: #049b35;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-host-btn:hover {
  background: #049b35;
  color: white;
}

/* Next Steps */
.next-steps-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-bottom: 30px;
}

.next-steps-card h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 25px;
}

.steps-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.step-content p {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.primary-btn,
.secondary-btn {
  padding: 14px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(4, 155, 53, 0.3);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(4, 155, 53, 0.4);
}

.secondary-btn {
  background: white;
  border: 2px solid #e0e0e0;
  color: #333;
}

.secondary-btn:hover {
  border-color: #049b35;
  color: #049b35;
}

/* Support Banner */
.support-banner {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px 30px;
  background: linear-gradient(135deg, #f0fdf4 0%, #e0f2e9 100%);
  border-radius: 12px;
  margin-bottom: 30px;
  width: 100%;
}

.support-icon {
  font-size: 48px;
}

.support-text {
  flex: 1;
}

.support-text h4 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 5px;
}

.support-text p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.support-btn {
  padding: 12px 24px;
  background: #049b35;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.support-btn:hover {
  background: #037a29;
}

/* Share Section */
.share-section {
  text-align: center;
  padding: 20px;
}

.share-section p {
  font-size: 15px;
  color: #6b7280;
  margin-bottom: 15px;
}

.share-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.share-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.share-btn.whatsapp {
  background: #25D366;
}

.share-btn.twitter {
  background: #1DA1F2;
}

.share-btn.facebook {
  background: #1877F2;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .success-title {
    font-size: 32px;
  }

  .success-subtitle {
    font-size: 16px;
  }

  .booking-reference {
    flex-direction: column;
    text-align: center;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .support-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
