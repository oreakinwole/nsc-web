<template>
  <div class="create-listing-container">

    <!-- Create Listing Content -->
    <div class="create-listing-content">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="step-info">
          <h3>STEP 3 ENTER YOUR</h3>
          <h2 class="page-title">New Listing</h2>
        </div>
      </div>

      <!-- Main Form Area -->
      <div class="main-form-area">
        <div class="form-header">
          <p>Provide information about your property you are listing for shortstays</p>
        </div>

        <form class="listing-form" @submit.prevent="submitForm">
          <!-- Display Name -->
          <div class="form-group">
            <label for="displayName">Display Name</label>
            <input 
              type="text" 
              id="displayName" 
              v-model="form.displayName"
              placeholder="Display Name"
            >
          </div>

          <!-- Description -->
          <div class="form-group">
            <label for="description">Description</label>
            <textarea 
              id="description" 
              v-model="form.description"
              placeholder="Description"
              rows="4"
            ></textarea>
          </div>

          <!-- Shortlet Type -->
          <div class="form-group">
            <label for="shortletType">Shortlet Type</label>
            <select id="shortletType" v-model="form.shortletType">
              <option value="" disabled>Select Shortlet Type</option>
              <option v-for="type in shortletTypes" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>

          <!-- Location Section -->
          <div class="form-row">
            <!-- State -->
            <div class="form-group">
              <label for="state">State</label>
              <select id="state" v-model="form.state" @change="form.lga = ''">
                <option value="" disabled>Select State</option>
                <option v-for="state in nigerianStates" :key="state" :value="state">
                  {{ state }}
                </option>
              </select>
            </div>

            <!-- LGA -->
            <div class="form-group">
              <label for="lga">LGA</label>
              <select id="lga" v-model="form.lga" :disabled="!form.state">
                <option value="" disabled>Select LGA</option>
                <option v-for="lga in getLGAs()" :key="lga" :value="lga">
                  {{ lga }}
                </option>
              </select>
            </div>
          </div>

          <!-- City -->
          <div class="form-group">
            <label for="city">City</label>
            <input 
              type="text" 
              id="city" 
              v-model="form.city"
              placeholder="City"
            >
          </div>

          <!-- Address -->
          <div class="form-group">
            <label for="address">Address</label>
            <input 
              type="text" 
              id="address" 
              v-model="form.address"
              placeholder="Address"
            >
          </div>

          <!-- Continue Button -->
          <button type="submit" class="continue-btn">
            Continue
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Form data
const form = ref({
  displayName: '',
  description: '',
  shortletType: '',
  state: '',
  lga: '',
  city: '',
  address: ''
})

// Shortlet types
const shortletTypes = [
  'Apartment',
  'Duplex',
  'Yacht',
  'Vacation Homes',
  'Beach Homes',
  'Rooftops',
  'BQ'
]

// Nigerian states
const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 
  'Federal Capital Territory', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 
  'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 
  'Taraba', 'Yobe', 'Zamfara'
]

// LGAs data (sample for a few states)
const lgasByState = {
  'Lagos': ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 
           'Badagry', 'Epe', 'Eti-Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye', 
           'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 
           'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'],
  'Abuja': ['Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal'],
  'Rivers': ['Port Harcourt', 'Obio-Akpor', 'Okrika', 'Ogu–Bolo', 'Eleme', 
            'Tai', 'Gokana', 'Khana', 'Oyigbo', 'Opobo–Nkoro', 
            'Andoni', 'Bonny', 'Degema', 'Asari-Toru', 'Akuku-Toru', 
            'Emohua', 'Ikwerre', 'Etche', 'Omuma', 'Ahoada West', 'Ahoada East']
}

// Function to get LGAs based on selected state
const getLGAs = () => {
  return lgasByState[form.value.state] || []
}

const router = useRouter()

// Form submission
const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Navigate to next step
  router.push('/listing-details')
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
  width: 250px;
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

.form-header {
  margin-bottom: 30px;
}

.form-header p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

/* Form Styles */
.listing-form {
  max-width: 600px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #049b35;
  box-shadow: 0 0 0 3px rgba(4, 155, 53, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group select:disabled {
  background-color: #f8f9fa;
  color: #999;
  cursor: not-allowed;
}

/* Form Row for side-by-side fields */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* Continue Button */
.continue-btn {
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 20px;
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
    padding: 30px 20px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>