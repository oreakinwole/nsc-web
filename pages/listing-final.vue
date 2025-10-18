<template>
  <div class="create-listing-container">

    <!-- Create Listing Content -->
    <div class="create-listing-content">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="step-info">
          <h3>AND THAT'S IT</h3>
          <h2 class="page-title">Final Details</h2>
        </div>
      </div>

      <!-- Main Form Area -->
      <div class="main-form-area">
        <div class="section">
          <h3 class="section-title">Attach Images</h3>
          <p class="section-description">Upload high quality images, this will make you very visible.</p>
          <div class="image-upload">
            <div class="upload-area" @click="triggerFileInput">
              <div class="upload-icon">📷</div>
              <p class="upload-text">Click to upload images</p>
              <p class="upload-subtext">Choose Files | No file chosen</p>
              <input 
                type="file" 
                multiple 
                @change="handleImageUpload" 
                accept="image/*" 
                ref="fileInput"
                style="display: none"
              >
            </div>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">Video Links (optional)</h3>
          <div class="video-links">
            <div class="video-input">
              <label>Youtube</label>
              <input v-model="form.youtubeLink" placeholder="https://youtube.com/...">
            </div>
            <div class="video-input">
              <label>Instagram</label>
              <input v-model="form.instagramLink" placeholder="https://instagram.com/...">
            </div>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">Pricing</h3>
          <div class="pricing-grid">
            <div class="price-item">
              <label>Price Per Night (₦)</label>
              <div class="price-input-wrapper">
                <input type="number" v-model="form.pricePerNight" placeholder="100000.00">
                <small class="fee-note">1.5% Service Fee</small>
              </div>
            </div>
            <div class="price-item">
              <label>Caution Fee (₦)</label>
              <div class="price-input-wrapper">
                <input type="number" v-model="form.cautionFee" placeholder="20000.00">
                <small class="fee-note">Optional</small>
              </div>
            </div>
            <div class="price-item">
              <label>Minimum Booking Nights</label>
              <div class="price-input-wrapper">
                <input type="number" v-model="form.minNights" placeholder="2">
                <small class="fee-note">Minimum stay duration</small>
              </div>
            </div>
          </div>
        </div>

        <div class="step-buttons">
          <button type="button" class="back-btn" @click="$router.push('/listing-details')">Back</button>
          <button type="button" class="submit-btn" @click="submitListing">Submit Listing</button>
        </div>
      </div>
    </div>

   
  </div>
</template>

<script setup>
const fileInput = ref(null)

// Form data
const form = ref({
  pricePerNight: '',
  cautionFee: '',
  minNights: 2,
  youtubeLink: '',
  instagramLink: '',
  images: []
})

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleImageUpload = (event) => {
  form.value.images = Array.from(event.target.files)
  console.log('Images uploaded:', form.value.images.length)
}

const submitListing = () => {
  console.log('Listing submitted:', form.value)
  // Add your submission logic here
  alert('Listing submitted successfully!')
  // $router.push('/dashboard')
}
</script>

<style scoped>
.create-listing-container {
  min-height: 100vh;
  background: #f8f9fa;
  font-family: 'Arial', sans-serif;
}

/* Header Styles */
.community-header {
  background: white;
  padding: 15px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-header h1 {
  color: #333;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #049b35;
}

/* Create Listing Content */
.create-listing-content {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  gap: 30px;
  min-height: 70vh;
}

/* Sidebar */
.sidebar {
  width: 280px;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(4, 155, 53, 0.2);
  height: fit-content;
}

.brand-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.step-info h3 {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.page-title {
  font-size: 22px;
  color: white;
  font-weight: bold;
  margin: 0;
}

/* Main Form Area */
.main-form-area {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
}

.section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.section-description {
  color: #666;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;
}

/* Image Upload */
.image-upload {
  margin: 20px 0;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 12px;
  padding: 50px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fafafa;
}

.upload-area:hover {
  border-color: #049b35;
  background: #f0fdf4;
}

.upload-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.upload-text {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.upload-subtext {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* Video Links */
.video-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.video-input label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.video-input input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.video-input input:focus {
  outline: none;
  border-color: #049b35;
  box-shadow: 0 0 0 3px rgba(4, 155, 53, 0.1);
}

/* Pricing Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.price-item label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.price-input-wrapper {
  position: relative;
}

.price-input-wrapper input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.price-input-wrapper input:focus {
  outline: none;
  border-color: #049b35;
  box-shadow: 0 0 0 3px rgba(4, 155, 53, 0.1);
}

.fee-note {
  display: block;
  color: #666;
  font-size: 12px;
  margin-top: 5px;
}

/* Step Buttons */
.step-buttons {
  display: flex;
  gap: 15px;
  margin-top: 40px;
  justify-content: center;
}

.back-btn {
  padding: 15px 40px;
  border: 2px solid #049b35;
  background: white;
  color: #049b35;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #049b35;
  color: white;
}

.submit-btn {
  padding: 15px 40px;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(4, 155, 53, 0.4);
}

/* Footer */
.footer {
  background: #2c3e50;
  color: white;
  padding: 50px 20px 30px;
  margin-top: 50px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-section h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 20px;
}

.footer-section h4 {
  color: #ecf0f1;
  margin-bottom: 15px;
  font-size: 16px;
}

.footer-section p {
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 10px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #05c442;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .create-listing-content {
    flex-direction: column;
    padding: 20px 15px;
  }
  
  .sidebar {
    width: 100%;
  }
  
  .nav-header {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .main-form-area {
    padding: 25px 20px;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  .step-buttons {
    flex-direction: column;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .upload-area {
    padding: 30px 20px;
  }
}
</style>