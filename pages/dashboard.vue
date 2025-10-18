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
const router = useRouter()
const activeTab = ref('all')

const createListing = () => {
  router.push('/create-listing')
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
  color: #049b35;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  height: fit-content;
  border: 1px solid rgba(4, 155, 53, 0.1);
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
  color: #049b35;
  margin-bottom: 15px;
  font-weight: 700;
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
  background: #f0fdf4;
  color: #037a29;
}

.sidebar-nav li.active {
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(4, 155, 53, 0.3);
}

/* Main Area */
.main-area {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  border: 1px solid rgba(4, 155, 53, 0.1);
}

.empty-state {
  text-align: center;
  max-width: 400px;
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 25px;
  opacity: 0.9;
}

.empty-state h3 {
  font-size: 26px;
  color: #1a1a1a;
  margin-bottom: 12px;
  font-weight: 700;
}

.empty-state p {
  color: #6b7280;
  margin-bottom: 35px;
  font-size: 17px;
  line-height: 1.6;
}

.create-listing-btn {
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border: none;
  padding: 14px 35px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(4, 155, 53, 0.2);
}

.create-listing-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(4, 155, 53, 0.4);
  background: linear-gradient(135deg, #05c442 0%, #049b35 100%);
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