<template>
  <div class="auth-container">

    <!-- Main Content -->
    <div class="main-content">
      <!-- Welcome Section -->
      <div class="welcome-section">
        <div class="welcome-header">
          <h2>Welcome, Ahmed Chukwuma Adekunle</h2>
          <p>How do you want to access your account</p>
        </div>

        <!-- Account Type Selection -->
        <div class="account-selection">
          <div class="option-card" @click="selectOption('guest')" :class="{ active: selectedOption === 'guest' }">
            <div class="icon">🎒</div>
            <h3>Guest</h3>
          </div>
          <div class="option-card" @click="selectOption('host')" :class="{ active: selectedOption === 'host' }">
            <div class="icon">🏠</div>
            <h3>Host</h3>
          </div>
        </div>
      </div>

      <!-- Host Info Section -->
      <div class="host-info">
        <p class="host-mode">Opening as host</p>
        <p class="listing-prompt">Listing your first: So this list? Is the...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedOption = ref(null)

const selectOption = (option) => {
  selectedOption.value = option
  // You can add navigation logic here based on the selection
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: 'Arial', sans-serif;
}

/* Single Header Styles */
.community-header {
  background: rgba(255, 255, 255, 0.95);
  padding: 15px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  color: #667eea;
}

/* Main Content */
.main-content {
  padding: 60px 20px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

/* Welcome Section */
.welcome-section {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 40px 30px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.welcome-header h2 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

.welcome-header p {
  font-size: 16px;
  opacity: 0.9;
  margin: 0 0 30px 0;
}

/* Account Selection */
.account-selection {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.option-card {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  max-width: 180px;
}

.option-card:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.option-card.active {
  border-color: white;
  background: rgba(255, 255, 255, 0.25);
}

.icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.option-card h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

/* Host Info Section */
.host-info {
  text-align: center;
}

.host-mode {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 10px;
  font-weight: bold;
}

.listing-prompt {
  font-size: 14px;
  opacity: 0.8;
  font-style: italic;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-header {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .account-selection {
    flex-direction: column;
    align-items: center;
  }
  
  .option-card {
    max-width: 100%;
    width: 100%;
  }
}
</style>