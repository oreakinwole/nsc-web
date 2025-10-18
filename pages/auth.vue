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
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;
}

.auth-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(5, 196, 66, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(3, 122, 41, 0.1) 0%, transparent 50%);
  pointer-events: none;
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
  color: #049b35;
}

/* Main Content */
.main-content {
  padding: 60px 20px;
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Welcome Section */
.welcome-section {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 50px 40px;
  margin-bottom: 30px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.welcome-header h2 {
  font-size: 28px;
  margin-bottom: 12px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.welcome-header p {
  font-size: 17px;
  opacity: 0.95;
  margin: 0 0 35px 0;
}

/* Account Selection */
.account-selection {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.option-card {
  background: rgba(255, 255, 255, 0.25);
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 35px 25px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  max-width: 190px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.option-card:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.option-card.active {
  border-color: white;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.icon {
  font-size: 48px;
  margin-bottom: 18px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.option-card h3 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Host Info Section */
.host-info {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.host-mode {
  font-size: 17px;
  opacity: 0.95;
  margin-bottom: 10px;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.listing-prompt {
  font-size: 15px;
  opacity: 0.85;
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