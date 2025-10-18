<template>
  <div class="create-listing-container">

    <!-- Create Listing Content -->
    <div class="create-listing-content">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="step-info">
          <h3>STEP 4 | ADD YOUR</h3>
          <h2 class="page-title">Listing Details</h2>
        </div>
      </div>

      <!-- Main Form Area -->
      <div class="main-form-area">
        <div class="section">
          <h3 class="section-title">Listing Details</h3>
          <div class="details-grid">
            <div class="detail-item">
              <label>Number of Bedrooms</label>
              <div class="number-selector">
                <button @click="decrement('bedrooms')">-</button>
                <span>{{ form.bedrooms }}</span>
                <button @click="increment('bedrooms')">+</button>
              </div>
            </div>
            <div class="detail-item">
              <label>Number of Bathrooms</label>
              <div class="number-selector">
                <button @click="decrement('bathrooms')">-</button>
                <span>{{ form.bathrooms }}</span>
                <button @click="increment('bathrooms')">+</button>
              </div>
            </div>
            <div class="detail-item">
              <label>Number of Livingrooms</label>
              <div class="number-selector">
                <button @click="decrement('livingrooms')">-</button>
                <span>{{ form.livingrooms }}</span>
                <button @click="increment('livingrooms')">+</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Amenities Sections -->
        <div class="amenities-sections">
          <!-- Standard Amenities -->
          <div class="amenity-section">
            <h4 @click="toggleSection('standard')" class="amenity-title">
              Standard Amenities ▸
            </h4>
            <div v-if="openSections.standard" class="amenity-content">
              <p class="section-subtitle"><strong>Select features this shortlet will offer your guests</strong></p>
              <div class="checkbox-grid">
                <label v-for="amenity in standardAmenities" :key="amenity.id" class="checkbox-item">
                  <input type="checkbox" v-model="amenity.selected">
                  <span class="checkmark"></span>
                  {{ amenity.name }}
                </label>
              </div>
              <div class="add-new-feature">
                <p class="add-new-title"><strong>Add new standard services to the lists above.</strong></p>
                <p class="feature-label"><strong>Name of Feature</strong></p>
                <div class="add-new-input">
                  <input v-model="newStandardFeature" placeholder="Name of Feature">
                  <button @click="addStandardFeature" class="add-btn">Add New</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Extra Services -->
          <div class="amenity-section">
            <h4 @click="toggleSection('extra')" class="amenity-title">
              Extra Services ▸
            </h4>
            <div v-if="openSections.extra" class="amenity-content">
              <p class="section-subtitle"><strong>Select features this shortlet will offer your guests</strong></p>
              <div class="checkbox-grid">
                <label v-for="service in extraServices" :key="service.id" class="checkbox-item">
                  <input type="checkbox" v-model="service.selected">
                  <span class="checkmark"></span>
                  {{ service.name }}
                  <input v-if="service.selected" type="number" v-model="service.price" placeholder="0.00" class="price-input">
                </label>
              </div>
              <div class="add-new-feature">
                <p class="add-new-title"><strong>Add extra services you can offer to the lists above:</strong></p>
                <p class="feature-label"><strong>Name of Service</strong></p>
                <div class="add-new-input">
                  <input v-model="newExtraService.name" placeholder="Name of Service">
                  <input v-model="newExtraService.price" type="number" placeholder="0.00">
                  <button @click="addExtraService" class="add-btn">Add New</button>
                </div>
                <small class="price-note">Leave 0.00 if no price is attached to this service.</small>
              </div>
            </div>
          </div>

          <!-- Rules & Restrictions -->
          <div class="amenity-section">
            <h4 @click="toggleSection('rules')" class="amenity-title">
              Rules & Restrictions ▸
            </h4>
            <div v-if="openSections.rules" class="amenity-content">
              <p class="section-subtitle"><strong>Select features this shortlet will offer your guests</strong></p>
              <div class="checkbox-grid">
                <label v-for="rule in rules" :key="rule.id" class="checkbox-item">
                  <input type="checkbox" v-model="rule.selected">
                  <span class="checkmark"></span>
                  {{ rule.name }}
                </label>
              </div>
              <div class="add-new-feature">
                <p class="add-new-title"><strong>Add new standard services to the lists above</strong></p>
                <p class="feature-label"><strong>Name of Feature</strong></p>
                <div class="add-new-input">
                  <input v-model="newRule" placeholder="Name of Feature">
                  <button @click="addRule" class="add-btn">Add New</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Power Supply -->
        <div class="section">
          <h3 class="section-title">Air Conditioning & Power</h3>
          <div class="power-options">
            <label class="radio-item">
              <input type="radio" v-model="form.airConditioning" value="yes">
              <span class="radiomark"></span>
              Yes
            </label>
            <label class="radio-item">
              <input type="radio" v-model="form.powerSupply" value="24hr">
              <span class="radiomark"></span>
              24hr Power Supply
            </label>
          </div>
        </div>

        <div class="step-buttons">
          <button type="button" class="back-btn" @click="$router.push('/create-listing')">Back</button>
          <button type="button" class="continue-btn" @click="$router.push('/listing-final')">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Form data
const form = ref({
  bedrooms: 3,
  bathrooms: 3,
  livingrooms: 1,
  airConditioning: '',
  powerSupply: ''
})

// Toggle sections
const openSections = ref({
  standard: true,
  extra: true,
  rules: true
})

// Amenities data
const standardAmenities = ref([
  { id: 1, name: 'Wifi', selected: false },
  { id: 2, name: 'Elevator', selected: true },
  { id: 3, name: 'Parking Space', selected: true },
  { id: 4, name: 'Washing Machine', selected: false },
  { id: 5, name: 'Security', selected: false }
])

const extraServices = ref([
  { id: 1, name: 'Breakfast', selected: false, price: '' },
  { id: 2, name: 'Airport Pickup', selected: false, price: '' },
  { id: 3, name: 'Cleaning Service', selected: false, price: '' }
])

const rules = ref([
  { id: 1, name: 'No Smoking', selected: false },
  { id: 2, name: 'No Fighting', selected: false },
  { id: 3, name: 'No Parties', selected: false },
  { id: 4, name: 'No Pets', selected: false },
  { id: 5, name: 'No Drugs', selected: false },
  { id: 6, name: 'No Kids', selected: false }
])

// New feature inputs
const newStandardFeature = ref('')
const newExtraService = ref({ name: '', price: '' })
const newRule = ref('')

// Methods
const toggleSection = (section) => {
  openSections.value[section] = !openSections.value[section]
}

const increment = (field) => {
  form.value[field]++
}

const decrement = (field) => {
  if (form.value[field] > 0) form.value[field]--
}

const addStandardFeature = () => {
  if (newStandardFeature.value.trim()) {
    standardAmenities.value.push({
      id: Date.now(),
      name: newStandardFeature.value.trim(),
      selected: false
    })
    newStandardFeature.value = ''
  }
}

const addExtraService = () => {
  if (newExtraService.value.name.trim()) {
    extraServices.value.push({
      id: Date.now(),
      name: newExtraService.value.name.trim(),
      price: newExtraService.value.price || '0.00',
      selected: false
    })
    newExtraService.value = { name: '', price: '' }
  }
}

const addRule = () => {
  if (newRule.value.trim()) {
    rules.value.push({
      id: Date.now(),
      name: newRule.value.trim(),
      selected: false
    })
    newRule.value = ''
  }
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
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.section-subtitle {
  color: #666;
  margin-bottom: 20px;
  font-size: 14px;
}

/* Details Grid */
.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.detail-item label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.number-selector {
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
}

.number-selector button {
  width: 40px;
  height: 40px;
  border: 2px solid #049b35;
  background: white;
  color: #049b35;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.number-selector button:hover {
  background: #049b35;
  color: white;
}

.number-selector span {
  font-size: 20px;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
  color: #333;
}

/* Amenities Sections */
.amenities-sections {
  margin: 30px 0;
}

.amenity-section {
  margin-bottom: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
}

.amenity-title {
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  padding: 18px 20px;
  margin: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.3s ease;
}

.amenity-title:hover {
  background: linear-gradient(135deg, #05c442 0%, #049b35 100%);
}

.amenity-content {
  padding: 25px;
  background: white;
}

/* Checkbox Grid */
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 0;
}

.checkbox-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #049b35;
}

.price-input {
  width: 100px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

/* Add New Feature */
.add-new-feature {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.add-new-title {
  color: #333;
  margin-bottom: 15px;
  font-size: 14px;
}

.feature-label {
  color: #333;
  margin-bottom: 10px;
  font-size: 14px;
}

.add-new-input {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 10px;
}

.add-new-input input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.add-btn {
  padding: 10px 20px;
  background: #049b35;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.add-btn:hover {
  background: #037a29;
}

.price-note {
  color: #666;
  font-size: 12px;
  display: block;
  margin-top: 5px;
}

/* Power Options */
.power-options {
  display: flex;
  gap: 30px;
  margin-top: 15px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 0;
}

.radio-item input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: #049b35;
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

.continue-btn {
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

.continue-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(4, 155, 53, 0.4);
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
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .checkbox-grid {
    grid-template-columns: 1fr;
  }
  
  .power-options {
    flex-direction: column;
    gap: 15px;
  }
  
  .step-buttons {
    flex-direction: column;
  }
  
  .add-new-input {
    flex-direction: column;
  }
}
</style>