<template>
  <div class="dashboard-container">

    <!-- Dashboard Content -->
    <div class="dashboard-content">
      <!-- Sidebar -->
      <div class="sidebar">
        <nav class="sidebar-nav">
          <h3>List New Shortlet</h3>
          <ul>
            <li :class="{ active: activeTab === 'all' }" @click="activeTab = 'all'">All</li>
            <li :class="{ active: activeTab === 'active' }" @click="activeTab = 'active'">Active</li>
            <li :class="{ active: activeTab === 'hidden' }" @click="activeTab = 'hidden'">Hidden</li>
            <li :class="{ active: activeTab === 'promoted' }" @click="activeTab = 'promoted'">Promoted</li>
          </ul>
        </nav>
      </div>

      <!-- Main Content Area -->
      <div class="main-area">
        <div class="empty-state">
          <div class="empty-icon">🏠</div>
          <h3>You have no listing yet...</h3>
          <p>Start by creating your first shortlet listing to get started</p>
          <button class="create-listing-btn" @click="createListing">
            Create New Listing
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('all')

const createListing = () => {
  // Add your create listing logic here
  console.log('Create new listing clicked')
}
</script>

<style scoped>
.dashboard-container {
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
  color: #667eea;
}

/* Dashboard Content */
.dashboard-content {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  gap: 30px;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.brand-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.sidebar-nav h3 {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  padding: 12px 15px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #555;
  font-weight: 500;
}

.sidebar-nav li:hover {
  background: #f0f0f0;
  color: #333;
}

.sidebar-nav li.active {
  background: #667eea;
  color: white;
}

/* Main Area */
.main-area {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.empty-state {
  text-align: center;
  max-width: 400px;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.empty-state p {
  color: #666;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.5;
}

.create-listing-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.create-listing-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-content {
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
  
  .main-area {
    padding: 30px 20px;
  }
}
</style>