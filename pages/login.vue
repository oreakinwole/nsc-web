<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Left Side - Form -->
      <div class="form-section">
        <div class="form-content">
          <!-- Logo/Brand -->
          <div class="brand-section">
            <h1>NSC</h1>
            <p>Nigerian Shortlet Community</p>
          </div>

          <!-- Form Header -->
          <div class="form-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your account to continue</p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="login-form">
            <!-- Email Input -->
            <div class="form-group">
              <label for="email">Email Address</label>
              <div class="input-wrapper">
                <span class="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  placeholder="Enter your email"
                  required
                  :class="{ 'error': errors.email }"
                >
              </div>
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <!-- Password Input -->
            <div class="form-group">
              <label for="password">Password</label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="form.password"
                  placeholder="Enter your password"
                  required
                  :class="{ 'error': errors.password }"
                >
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="toggle-password"
                >
                  {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                </button>
              </div>
              <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="form-options">
              <label class="remember-me">
                <input type="checkbox" v-model="form.rememberMe">
                <span>Remember me</span>
              </label>
              <NuxtLink to="/forgot-password" class="forgot-link">
                Forgot password?
              </NuxtLink>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-btn" :disabled="loading">
              <span v-if="loading">Signing in...</span>
              <span v-else>Sign In</span>
            </button>

            <!-- Error Message -->
            <div v-if="errors.general" class="general-error">
              {{ errors.general }}
            </div>
          </form>

          <!-- Divider -->
          <div class="divider">
            <span>or continue with</span>
          </div>

          <!-- Social Login -->
          <div class="social-login">
            <button @click="socialLogin('google')" class="social-btn google">
              <img src="https://www.google.com/favicon.ico" alt="Google">
              <span>Google</span>
            </button>
            <button @click="socialLogin('facebook')" class="social-btn facebook">
              <span class="fb-icon">f</span>
              <span>Facebook</span>
            </button>
          </div>

          <!-- Sign Up Link -->
          <div class="form-footer">
            <p>Don't have an account? <NuxtLink to="/signup" class="signup-link">Sign up</NuxtLink></p>
          </div>
        </div>
      </div>

      <!-- Right Side - Image/Info -->
      <div class="info-section">
        <div class="info-content">
          <h2>Find Your Perfect Stay</h2>
          <p>Access thousands of verified properties across Nigeria. Book your next shortlet with confidence.</p>

          <div class="features-list">
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Verified Properties</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Secure Payments</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>24/7 Support</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Instant Booking</span>
            </div>
          </div>

          <div class="stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Properties</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">1000+</div>
              <div class="stat-label">Happy Guests</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Cities</div>
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

// Form state
const form = ref({
  email: '',
  password: '',
  rememberMe: false
})

const showPassword = ref(false)
const loading = ref(false)
const errors = ref({})

// Methods
const handleLogin = async () => {
  // Clear previous errors
  errors.value = {}

  // Basic validation
  if (!form.value.email) {
    errors.value.email = 'Email is required'
    return
  }

  if (!form.value.password) {
    errors.value.password = 'Password is required'
    return
  }

  if (form.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
    return
  }

  loading.value = true

  try {
    // TODO: Implement actual login API call
    // const response = await $fetch('/api/auth/login', {
    //   method: 'POST',
    //   body: {
    //     email: form.value.email,
    //     password: form.value.password
    //   }
    // })

    // Mock successful login (remove this when API is ready)
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Store token and user data (use Pinia store when implemented)
    // authStore.login(response.token, response.user)

    // Redirect to intended page or dashboard
    const redirect = route.query.redirect || '/dashboard'
    router.push(redirect)
  } catch (error) {
    errors.value.general = error.message || 'Invalid email or password. Please try again.'
  } finally {
    loading.value = false
  }
}

const socialLogin = async (provider) => {
  try {
    // TODO: Implement social login
    console.log(`Login with ${provider}`)
    // window.location.href = `/api/auth/${provider}`
  } catch (error) {
    errors.value.general = `Failed to login with ${provider}`
  }
}

// Set metadata
useHead({
  title: 'Login - NSC',
  meta: [
    { name: 'description', content: 'Sign in to your NSC account' }
  ]
})

definePageMeta({
  layout: false
})
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px;
}

.login-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  width: 100%;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  min-height: 700px;
}

/* Form Section */
.form-section {
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-content {
  width: 100%;
  max-width: 420px;
}

.brand-section {
  text-align: center;
  margin-bottom: 40px;
}

.brand-section h1 {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 5px;
}

.brand-section p {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

.form-header {
  margin-bottom: 35px;
}

.form-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.form-header p {
  color: #6b7280;
  font-size: 15px;
  margin: 0;
}

/* Form Styles */
.login-form {
  display: flex;
  flex-direction: column;
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

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 15px;
  font-size: 18px;
  pointer-events: none;
}

.input-wrapper input {
  width: 100%;
  padding: 14px 15px 14px 48px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
  background: #fafafa;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #049b35;
  background: white;
  box-shadow: 0 0 0 4px rgba(4, 155, 53, 0.1);
}

.input-wrapper input.error {
  border-color: #ef4444;
}

.toggle-password {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.toggle-password:hover {
  opacity: 1;
}

.error-message {
  color: #ef4444;
  font-size: 13px;
  margin-top: -4px;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -5px 0 5px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

.remember-me input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #049b35;
  cursor: pointer;
}

.forgot-link {
  color: #049b35;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.forgot-link:hover {
  color: #037a29;
  text-decoration: underline;
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(4, 155, 53, 0.3);
  margin-top: 10px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(4, 155, 53, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.general-error {
  padding: 12px;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  margin-top: -5px;
}

/* Divider */
.divider {
  position: relative;
  text-align: center;
  margin: 30px 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e0e0e0;
}

.divider span {
  position: relative;
  background: white;
  padding: 0 15px;
  color: #6b7280;
  font-size: 14px;
  z-index: 1;
}

/* Social Login */
.social-login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 30px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: #049b35;
  background: #f8f9fa;
}

.social-btn img {
  width: 20px;
  height: 20px;
}

.fb-icon {
  width: 24px;
  height: 24px;
  background: #1877f2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
}

.form-footer {
  text-align: center;
  padding-top: 10px;
}

.form-footer p {
  color: #6b7280;
  font-size: 15px;
  margin: 0;
}

.signup-link {
  color: #049b35;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.signup-link:hover {
  color: #037a29;
  text-decoration: underline;
}

/* Info Section */
.info-section {
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.info-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(5, 196, 66, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(3, 122, 41, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.info-content {
  position: relative;
  z-index: 1;
  max-width: 420px;
}

.info-content h2 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.info-content > p {
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 40px;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 50px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
}

.feature-icon {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .login-container {
    grid-template-columns: 1fr;
  }

  .info-section {
    display: none;
  }

  .form-section {
    padding: 40px 30px;
  }
}

@media (max-width: 640px) {
  .login-page {
    padding: 0;
  }

  .login-container {
    border-radius: 0;
    min-height: 100vh;
  }

  .form-section {
    padding: 30px 20px;
  }

  .form-content {
    max-width: 100%;
  }

  .social-login {
    grid-template-columns: 1fr;
  }
}
</style>
