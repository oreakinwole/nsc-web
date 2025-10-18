<template>
  <div class="property-details-page">
    <!-- Image Gallery -->
    <div class="image-gallery">
      <div class="main-image">
        <img :src="property.mainImage" :alt="property.title">
        <button class="view-all-photos-btn" @click="openGallery">
          <span>📷</span> View all {{ property.images.length }} photos
        </button>
      </div>
      <div class="thumbnail-grid">
        <img v-for="(image, index) in property.images.slice(0, 4)"
             :key="index"
             :src="image"
             :alt="`${property.title} - ${index + 1}`"
             @click="openGallery">
      </div>
    </div>

    <div class="container">
      <div class="content-wrapper">
        <!-- Main Content -->
        <div class="main-content">
          <!-- Property Header -->
          <div class="property-header">
            <div>
              <h1>{{ property.title }}</h1>
              <div class="property-meta">
                <span class="rating">
                  ⭐ {{ property.rating }} ({{ property.reviews.length }} reviews)
                </span>
                <span class="location">📍 {{ property.location }}</span>
              </div>
            </div>
          </div>

          <!-- Property Quick Info -->
          <div class="quick-info">
            <div class="info-item">
              <span class="icon">🛏️</span>
              <span>{{ property.bedrooms }} Bedrooms</span>
            </div>
            <div class="info-item">
              <span class="icon">🚿</span>
              <span>{{ property.bathrooms }} Bathrooms</span>
            </div>
            <div class="info-item">
              <span class="icon">🛋️</span>
              <span>{{ property.livingrooms }} Living Rooms</span>
            </div>
            <div class="info-item">
              <span class="icon">👥</span>
              <span>Up to {{ property.maxGuests }} Guests</span>
            </div>
          </div>

          <hr>

          <!-- Host Info -->
          <div class="host-info-section">
            <div class="host-avatar">
              {{ property.host.initials }}
            </div>
            <div>
              <h3>Hosted by {{ property.host.name }}</h3>
              <p>{{ property.host.joinedDate }} · {{ property.host.properties }} properties</p>
            </div>
          </div>

          <hr>

          <!-- Description -->
          <div class="description-section">
            <h2>About this property</h2>
            <p>{{ property.description }}</p>
          </div>

          <hr>

          <!-- Amenities -->
          <div class="amenities-section">
            <h2>What this place offers</h2>
            <div class="amenities-grid">
              <div v-for="amenity in property.amenities" :key="amenity" class="amenity-item">
                <span class="amenity-icon">✓</span>
                <span>{{ amenity }}</span>
              </div>
            </div>
          </div>

          <hr>

          <!-- House Rules -->
          <div class="rules-section">
            <h2>House Rules</h2>
            <div class="rules-list">
              <div v-for="rule in property.rules" :key="rule" class="rule-item">
                <span class="rule-icon">•</span>
                <span>{{ rule }}</span>
              </div>
            </div>
          </div>

          <hr>

          <!-- Reviews -->
          <div class="reviews-section">
            <h2>⭐ {{ property.rating }} · {{ property.reviews.length }} Reviews</h2>
            <div class="reviews-grid">
              <div v-for="review in property.reviews" :key="review.id" class="review-card">
                <div class="review-header">
                  <div class="reviewer-avatar">{{ review.userInitials }}</div>
                  <div>
                    <h4>{{ review.userName }}</h4>
                    <p class="review-date">{{ review.date }}</p>
                  </div>
                </div>
                <div class="review-rating">
                  <span v-for="n in 5" :key="n">{{ n <= review.rating ? '⭐' : '☆' }}</span>
                </div>
                <p class="review-text">{{ review.comment }}</p>
              </div>
            </div>
          </div>

          <hr>

          <!-- Location -->
          <div class="location-section">
            <h2>Where you'll be</h2>
            <p class="location-address">{{ property.address }}, {{ property.city }}, {{ property.state }}</p>
            <div class="map-placeholder">
              <p>🗺️ Map integration goes here (Google Maps)</p>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="booking-sidebar">
          <div class="booking-card">
            <div class="price-header">
              <div class="price">₦{{ property.pricePerNight.toLocaleString() }}</div>
              <span class="price-label">/ night</span>
            </div>

            <div class="booking-form">
              <div class="date-inputs">
                <div class="date-input">
                  <label>Check-in</label>
                  <input type="date" v-model="bookingForm.checkIn">
                </div>
                <div class="date-input">
                  <label>Check-out</label>
                  <input type="date" v-model="bookingForm.checkOut">
                </div>
              </div>

              <div class="guests-input">
                <label>Guests</label>
                <select v-model="bookingForm.guests">
                  <option v-for="n in property.maxGuests" :key="n" :value="n">{{ n }} guest{{ n > 1 ? 's' : '' }}</option>
                </select>
              </div>

              <button class="book-btn" @click="handleBooking">
                Reserve
              </button>

              <p class="booking-notice">You won't be charged yet</p>

              <div v-if="bookingForm.checkIn && bookingForm.checkOut" class="price-breakdown">
                <div class="price-row">
                  <span>₦{{ property.pricePerNight.toLocaleString() }} x {{ nights }} nights</span>
                  <span>₦{{ subtotal.toLocaleString() }}</span>
                </div>
                <div class="price-row">
                  <span>Service fee</span>
                  <span>₦{{ serviceFee.toLocaleString() }}</span>
                </div>
                <div v-if="property.cautionFee" class="price-row">
                  <span>Caution fee</span>
                  <span>₦{{ property.cautionFee.toLocaleString() }}</span>
                </div>
                <hr>
                <div class="price-row total">
                  <span>Total</span>
                  <span>₦{{ total.toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Report Listing -->
          <button class="report-btn">🚩 Report this listing</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

// Mock property data (will be fetched from API)
const property = ref({
  id: route.params.id,
  title: 'Luxury 3 Bedroom Apartment in Lekki Phase 1',
  location: 'Lekki Phase 1, Lagos',
  address: '15 Admiralty Way, Lekki Phase 1',
  city: 'Lagos',
  state: 'Lagos',
  pricePerNight: 85000,
  cautionFee: 50000,
  rating: 4.8,
  bedrooms: 3,
  bathrooms: 3,
  livingrooms: 1,
  maxGuests: 6,
  mainImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600',
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300'
  ],
  description: 'Welcome to this stunning 3-bedroom apartment located in the heart of Lekki Phase 1. This luxurious property features modern amenities, breathtaking views, and is perfect for both short and extended stays. The apartment is fully furnished with high-quality furniture and appliances. Enjoy access to a gym, swimming pool, and 24/7 security. Located close to shopping centers, restaurants, and major attractions.',
  amenities: [
    'WiFi',
    'Air Conditioning',
    'Kitchen',
    'TV',
    'Parking',
    'Swimming Pool',
    'Gym',
    'Security',
    'Generator',
    'Washing Machine',
    'Elevator',
    'Balcony'
  ],
  rules: [
    'No smoking',
    'No pets',
    'No parties or events',
    'Check-in: 2:00 PM - 10:00 PM',
    'Checkout: 12:00 PM',
    'Minimum stay: 2 nights'
  ],
  host: {
    name: 'Chioma Adeleke',
    initials: 'CA',
    joinedDate: 'Joined in 2022',
    properties: 5
  },
  reviews: [
    {
      id: 1,
      userName: 'Tunde Bakare',
      userInitials: 'TB',
      rating: 5,
      date: 'December 2024',
      comment: 'Amazing place! Very clean and exactly as described. The host was very responsive and helpful. Would definitely recommend!'
    },
    {
      id: 2,
      userName: 'Sarah Johnson',
      userInitials: 'SJ',
      rating: 5,
      date: 'November 2024',
      comment: 'Perfect location and beautiful apartment. Had everything we needed for our stay. Chioma was an excellent host!'
    },
    {
      id: 3,
      userName: 'Ibrahim Mohammed',
      userInitials: 'IM',
      rating: 4,
      date: 'October 2024',
      comment: 'Great apartment in a prime location. Very spacious and well-maintained. Only minor issue was parking could be tight.'
    }
  ]
})

// Booking form
const bookingForm = ref({
  checkIn: '',
  checkOut: '',
  guests: 2
})

// Computed properties
const nights = computed(() => {
  if (!bookingForm.value.checkIn || !bookingForm.value.checkOut) return 0
  const checkIn = new Date(bookingForm.value.checkIn)
  const checkOut = new Date(bookingForm.value.checkOut)
  const diffTime = Math.abs(checkOut - checkIn)
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
})

const subtotal = computed(() => {
  return property.value.pricePerNight * nights.value
})

const serviceFee = computed(() => {
  return Math.round(subtotal.value * 0.015) // 1.5% service fee
})

const total = computed(() => {
  return subtotal.value + serviceFee.value + (property.value.cautionFee || 0)
})

// Methods
const openGallery = () => {
  // TODO: Open lightbox gallery
  console.log('Open gallery')
}

const handleBooking = () => {
  if (!bookingForm.value.checkIn || !bookingForm.value.checkOut) {
    alert('Please select check-in and check-out dates')
    return
  }

  // Navigate to booking confirmation page
  navigateTo({
    path: '/booking/confirm',
    query: {
      propertyId: property.value.id,
      checkIn: bookingForm.value.checkIn,
      checkOut: bookingForm.value.checkOut,
      guests: bookingForm.value.guests
    }
  })
}

// Set metadata
useHead({
  title: `${property.value.title} - NSC`,
  meta: [
    { name: 'description', content: property.value.description }
  ]
})
</script>

<style scoped>
.property-details-page {
  min-height: 100vh;
  background: #ffffff;
}

/* Image Gallery */
.image-gallery {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
  height: 500px;
  margin-bottom: 40px;
}

.main-image {
  position: relative;
  overflow: hidden;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.main-image img:hover {
  transform: scale(1.02);
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.thumbnail-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.thumbnail-grid img:hover {
  transform: scale(1.05);
}

.view-all-photos-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: white;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-all-photos-btn:hover {
  background: #f8f9fa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 80px;
  align-items: start;
}

/* Main Content */
.main-content {
  max-width: 700px;
}

.property-header h1 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.property-meta {
  display: flex;
  gap: 20px;
  color: #6b7280;
  font-size: 15px;
}

.rating {
  color: #1a1a1a;
  font-weight: 600;
}

/* Quick Info */
.quick-info {
  display: flex;
  gap: 25px;
  margin: 30px 0;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #333;
}

.info-item .icon {
  font-size: 20px;
}

hr {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 35px 0;
}

/* Host Info */
.host-info-section {
  display: flex;
  gap: 15px;
  align-items: center;
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
}

.host-info-section h3 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #1a1a1a;
}

.host-info-section p {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

/* Description */
.description-section h2,
.amenities-section h2,
.rules-section h2,
.reviews-section h2,
.location-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.description-section p {
  color: #333;
  line-height: 1.8;
  font-size: 16px;
}

/* Amenities */
.amenities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #333;
}

.amenity-icon {
  color: #049b35;
  font-weight: 700;
  font-size: 18px;
}

/* Rules */
.rules-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rule-item {
  display: flex;
  gap: 12px;
  font-size: 16px;
  color: #333;
}

.rule-icon {
  color: #049b35;
  font-weight: 700;
}

/* Reviews */
.reviews-grid {
  display: grid;
  gap: 30px;
}

.review-card {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 25px;
}

.review-card:last-child {
  border-bottom: none;
}

.review-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 10px;
}

.reviewer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
}

.review-header h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 3px;
}

.review-date {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.review-rating {
  margin-bottom: 12px;
  font-size: 14px;
}

.review-text {
  color: #333;
  line-height: 1.7;
  font-size: 15px;
}

/* Location */
.location-address {
  color: #333;
  font-size: 16px;
  margin-bottom: 20px;
}

.map-placeholder {
  width: 100%;
  height: 400px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 18px;
  border: 1px solid #e0e0e0;
}

/* Booking Sidebar */
.booking-sidebar {
  position: sticky;
  top: 100px;
}

.booking-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.price-header {
  display: flex;
  align-items: baseline;
  gap: 5px;
  margin-bottom: 25px;
}

.price {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
}

.price-label {
  font-size: 16px;
  color: #6b7280;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.date-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.date-input,
.guests-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.date-input label,
.guests-input label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.date-input input,
.guests-input select {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.date-input input:focus,
.guests-input select:focus {
  outline: none;
  border-color: #049b35;
  box-shadow: 0 0 0 3px rgba(4, 155, 53, 0.1);
}

.book-btn {
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(4, 155, 53, 0.3);
}

.book-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(4, 155, 53, 0.4);
}

.booking-notice {
  text-align: center;
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

.price-breakdown {
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #333;
  font-size: 15px;
}

.price-row.total {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #e0e0e0;
}

.report-btn {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #6b7280;
  transition: all 0.3s ease;
}

.report-btn:hover {
  background: #f8f9fa;
  border-color: #ccc;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .booking-sidebar {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .image-gallery {
    grid-template-columns: 1fr;
    height: auto;
  }

  .thumbnail-grid {
    display: none;
  }

  .main-image {
    height: 300px;
  }

  .amenities-grid {
    grid-template-columns: 1fr;
  }

  .date-inputs {
    grid-template-columns: 1fr;
  }
}
</style>
