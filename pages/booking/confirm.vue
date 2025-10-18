<template>
  <div class="booking-confirm-page">
    <div class="container">
      <!-- Progress Steps -->
      <div class="progress-steps">
        <div class="step active">
          <div class="step-number">1</div>
          <span>Review Details</span>
        </div>
        <div class="step-line"></div>
        <div class="step">
          <div class="step-number">2</div>
          <span>Payment</span>
        </div>
        <div class="step-line"></div>
        <div class="step">
          <div class="step-number">3</div>
          <span>Confirmation</span>
        </div>
      </div>

      <div class="booking-content">
        <!-- Main Form Section -->
        <div class="form-section">
          <h1>Confirm Your Booking</h1>

          <!-- Property Summary Card -->
          <div class="property-summary">
            <img :src="property.image" :alt="property.title" class="property-thumbnail">
            <div class="property-info">
              <h3>{{ property.title }}</h3>
              <p class="property-location">📍 {{ property.location }}</p>
              <div class="property-rating">
                ⭐ {{ property.rating }} ({{ property.reviews }} reviews)
              </div>
            </div>
          </div>

          <!-- Booking Details -->
          <div class="section-card">
            <h2>Booking Details</h2>
            <div class="booking-details">
              <div class="detail-row">
                <div class="detail-item">
                  <label>Check-in</label>
                  <div class="detail-value">
                    <span class="icon">📅</span>
                    <span>{{ formatDate(bookingData.checkIn) }}</span>
                  </div>
                </div>
                <div class="detail-item">
                  <label>Check-out</label>
                  <div class="detail-value">
                    <span class="icon">📅</span>
                    <span>{{ formatDate(bookingData.checkOut) }}</span>
                  </div>
                </div>
              </div>
              <div class="detail-row">
                <div class="detail-item">
                  <label>Guests</label>
                  <div class="detail-value">
                    <span class="icon">👥</span>
                    <span>{{ bookingData.guests }} guest{{ bookingData.guests > 1 ? 's' : '' }}</span>
                  </div>
                </div>
                <div class="detail-item">
                  <label>Nights</label>
                  <div class="detail-value">
                    <span class="icon">🌙</span>
                    <span>{{ nights }} night{{ nights > 1 ? 's' : '' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Guest Information -->
          <div class="section-card">
            <h2>Guest Information</h2>
            <form @submit.prevent="handleSubmit" class="guest-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="guestInfo.firstName"
                    required
                    placeholder="John"
                  >
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="guestInfo.lastName"
                    required
                    placeholder="Doe"
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  v-model="guestInfo.email"
                  required
                  placeholder="john.doe@example.com"
                >
                <small>Confirmation will be sent to this email</small>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="guestInfo.phone"
                  required
                  placeholder="08012345678"
                >
              </div>

              <div class="form-group">
                <label for="specialRequests">Special Requests (Optional)</label>
                <textarea
                  id="specialRequests"
                  v-model="guestInfo.specialRequests"
                  rows="4"
                  placeholder="Any special requests or requirements..."
                ></textarea>
              </div>
            </form>
          </div>

          <!-- Payment Method -->
          <div class="section-card">
            <h2>Payment Method</h2>
            <div class="payment-methods">
              <label class="payment-option">
                <input type="radio" v-model="paymentMethod" value="card" name="payment">
                <div class="payment-card">
                  <span class="payment-icon">💳</span>
                  <div>
                    <div class="payment-title">Card Payment</div>
                    <div class="payment-subtitle">Pay with debit or credit card</div>
                  </div>
                </div>
              </label>

              <label class="payment-option">
                <input type="radio" v-model="paymentMethod" value="transfer" name="payment">
                <div class="payment-card">
                  <span class="payment-icon">🏦</span>
                  <div>
                    <div class="payment-title">Bank Transfer</div>
                    <div class="payment-subtitle">Direct bank transfer</div>
                  </div>
                </div>
              </label>

              <label class="payment-option">
                <input type="radio" v-model="paymentMethod" value="paystack" name="payment">
                <div class="payment-card">
                  <span class="payment-icon">💰</span>
                  <div>
                    <div class="payment-title">Paystack</div>
                    <div class="payment-subtitle">Secure payment with Paystack</div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Terms & Conditions -->
          <div class="section-card">
            <label class="terms-checkbox">
              <input type="checkbox" v-model="agreeToTerms" required>
              <span>
                I agree to the <a href="/terms" target="_blank">Terms & Conditions</a>,
                <a href="/cancellation-policy" target="_blank">Cancellation Policy</a>,
                and <a href="/house-rules" target="_blank">House Rules</a>
              </span>
            </label>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button @click="goBack" class="back-btn">
              ← Back
            </button>
            <button @click="confirmBooking" class="confirm-btn" :disabled="!canConfirm || loading">
              <span v-if="loading">Processing...</span>
              <span v-else>Confirm & Pay ₦{{ total.toLocaleString() }}</span>
            </button>
          </div>
        </div>

        <!-- Price Summary Sidebar -->
        <div class="summary-sidebar">
          <div class="summary-card">
            <h3>Price Summary</h3>

            <div class="price-breakdown">
              <div class="price-item">
                <span>₦{{ property.pricePerNight.toLocaleString() }} × {{ nights }} night{{ nights > 1 ? 's' : '' }}</span>
                <span>₦{{ subtotal.toLocaleString() }}</span>
              </div>

              <div class="price-item">
                <span>Service fee (1.5%)</span>
                <span>₦{{ serviceFee.toLocaleString() }}</span>
              </div>

              <div v-if="property.cautionFee" class="price-item">
                <span>
                  Caution fee
                  <span class="info-tooltip" title="Refundable deposit">ℹ️</span>
                </span>
                <span>₦{{ property.cautionFee.toLocaleString() }}</span>
              </div>

              <div class="price-divider"></div>

              <div class="price-item total">
                <span>Total (NGN)</span>
                <span>₦{{ total.toLocaleString() }}</span>
              </div>

              <div v-if="property.cautionFee" class="refundable-note">
                <span class="note-icon">ℹ️</span>
                <span>Caution fee is refundable after checkout</span>
              </div>
            </div>

            <!-- Host Info -->
            <div class="host-info">
              <div class="host-avatar">{{ property.host.initials }}</div>
              <div>
                <div class="host-name">{{ property.host.name }}</div>
                <div class="host-meta">Superhost · {{ property.host.properties }} properties</div>
              </div>
            </div>

            <!-- Cancellation Policy -->
            <div class="policy-info">
              <h4>Cancellation Policy</h4>
              <p>Free cancellation up to 24 hours before check-in. After that, 50% refund available.</p>
            </div>

            <!-- Security Info -->
            <div class="security-badges">
              <div class="badge">🔒 Secure Payment</div>
              <div class="badge">✓ Verified Property</div>
              <div class="badge">🛡️ Money-back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

// Get booking data from query params
const bookingData = ref({
  propertyId: route.query.propertyId || '1',
  checkIn: route.query.checkIn || '',
  checkOut: route.query.checkOut || '',
  guests: Number(route.query.guests) || 2
})

// Mock property data (would come from API)
const property = ref({
  id: bookingData.value.propertyId,
  title: 'Luxury 3 Bedroom Apartment in Lekki Phase 1',
  location: 'Lekki Phase 1, Lagos',
  image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300',
  pricePerNight: 85000,
  cautionFee: 50000,
  rating: 4.8,
  reviews: 42,
  host: {
    name: 'Chioma Adeleke',
    initials: 'CA',
    properties: 5
  }
})

// Guest information
const guestInfo = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  specialRequests: ''
})

const paymentMethod = ref('card')
const agreeToTerms = ref(false)
const loading = ref(false)

// Computed
const nights = computed(() => {
  if (!bookingData.value.checkIn || !bookingData.value.checkOut) return 0
  const checkIn = new Date(bookingData.value.checkIn)
  const checkOut = new Date(bookingData.value.checkOut)
  const diffTime = Math.abs(checkOut - checkIn)
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
})

const subtotal = computed(() => {
  return property.value.pricePerNight * nights.value
})

const serviceFee = computed(() => {
  return Math.round(subtotal.value * 0.015)
})

const total = computed(() => {
  return subtotal.value + serviceFee.value + (property.value.cautionFee || 0)
})

const canConfirm = computed(() => {
  return guestInfo.value.firstName &&
         guestInfo.value.lastName &&
         guestInfo.value.email &&
         guestInfo.value.phone &&
         paymentMethod.value &&
         agreeToTerms.value
})

// Methods
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

const goBack = () => {
  router.back()
}

const confirmBooking = async () => {
  if (!canConfirm.value) {
    alert('Please fill in all required fields')
    return
  }

  loading.value = true

  try {
    // TODO: Implement actual booking API call
    // const response = await $fetch('/api/bookings', {
    //   method: 'POST',
    //   body: {
    //     propertyId: bookingData.value.propertyId,
    //     checkIn: bookingData.value.checkIn,
    //     checkOut: bookingData.value.checkOut,
    //     guests: bookingData.value.guests,
    //     guestInfo: guestInfo.value,
    //     paymentMethod: paymentMethod.value,
    //     totalAmount: total.value
    //   }
    // })

    // Mock booking confirmation
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Redirect to success page
    router.push({
      path: '/booking/success',
      query: {
        bookingId: 'BK' + Date.now(),
        propertyId: bookingData.value.propertyId
      }
    })
  } catch (error) {
    alert('Failed to confirm booking. Please try again.')
    console.error(error)
  } finally {
    loading.value = false
  }
}

// Set metadata
useHead({
  title: 'Confirm Booking - NSC',
  meta: [
    { name: 'description', content: 'Confirm your booking' }
  ]
})
</script>

<style scoped>
.booking-confirm-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 40px 0 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Progress Steps */
.progress-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  gap: 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #e0e0e0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: #6b7280;
  transition: all 0.3s ease;
}

.step.active .step-number {
  border-color: #049b35;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
}

.step span {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
}

.step.active span {
  color: #049b35;
}

.step-line {
  width: 80px;
  height: 3px;
  background: #e0e0e0;
  margin: 0 10px 20px;
}

/* Booking Content */
.booking-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  align-items: start;
}

/* Form Section */
.form-section h1 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 30px;
}

/* Property Summary */
.property-summary {
  display: flex;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.property-thumbnail {
  width: 120px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
}

.property-info h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.property-location {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 8px;
}

.property-rating {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
}

/* Section Card */
.section-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-card h2 {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 25px;
}

/* Booking Details */
.booking-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.detail-item label {
  display: block;
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 8px;
  font-weight: 600;
}

.detail-value {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.detail-value .icon {
  font-size: 18px;
}

/* Guest Form */
.guest-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #049b35;
  box-shadow: 0 0 0 3px rgba(4, 155, 53, 0.1);
}

.form-group small {
  font-size: 12px;
  color: #6b7280;
  margin-top: -4px;
}

.form-group textarea {
  resize: vertical;
  font-family: inherit;
}

/* Payment Methods */
.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.payment-option {
  display: block;
  cursor: pointer;
}

.payment-option input[type="radio"] {
  display: none;
}

.payment-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.payment-option input[type="radio"]:checked + .payment-card {
  border-color: #049b35;
  background: rgba(4, 155, 53, 0.05);
}

.payment-icon {
  font-size: 28px;
}

.payment-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 3px;
}

.payment-subtitle {
  font-size: 13px;
  color: #6b7280;
}

/* Terms Checkbox */
.terms-checkbox {
  display: flex;
  align-items: start;
  gap: 12px;
  cursor: pointer;
}

.terms-checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  accent-color: #049b35;
  cursor: pointer;
  flex-shrink: 0;
}

.terms-checkbox span {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.terms-checkbox a {
  color: #049b35;
  text-decoration: none;
  font-weight: 600;
}

.terms-checkbox a:hover {
  text-decoration: underline;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.back-btn,
.confirm-btn {
  flex: 1;
  padding: 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn {
  background: white;
  border: 2px solid #e0e0e0;
  color: #333;
}

.back-btn:hover {
  border-color: #049b35;
  color: #049b35;
}

.confirm-btn {
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(4, 155, 53, 0.3);
}

.confirm-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(4, 155, 53, 0.4);
}

.confirm-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Summary Sidebar */
.summary-sidebar {
  position: sticky;
  top: 100px;
}

.summary-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(4, 155, 53, 0.1);
}

.summary-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 25px;
}

.price-breakdown {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.price-item {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #333;
}

.price-item.total {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  padding-top: 15px;
}

.price-divider {
  height: 1px;
  background: #e0e0e0;
  margin: 5px 0;
}

.info-tooltip {
  cursor: help;
  margin-left: 5px;
  opacity: 0.6;
}

.refundable-note {
  display: flex;
  gap: 8px;
  padding: 12px;
  background: #f0fdf4;
  border-radius: 8px;
  font-size: 13px;
  color: #037a29;
  margin-top: 5px;
}

.note-icon {
  flex-shrink: 0;
}

/* Host Info */
.host-info {
  display: flex;
  gap: 12px;
  align-items: center;
  padding-top: 25px;
  margin-top: 25px;
  border-top: 1px solid #e0e0e0;
}

.host-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
}

.host-name {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 3px;
}

.host-meta {
  font-size: 13px;
  color: #6b7280;
}

/* Policy Info */
.policy-info {
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.policy-info h4 {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.policy-info p {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* Security Badges */
.security-badges {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.badge {
  font-size: 13px;
  color: #037a29;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .booking-content {
    grid-template-columns: 1fr;
  }

  .summary-sidebar {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .detail-row,
  .form-row {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .progress-steps {
    flex-wrap: wrap;
    gap: 10px;
  }

  .step-line {
    display: none;
  }
}
</style>
