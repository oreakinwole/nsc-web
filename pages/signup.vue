<template>
  <div class="signup-page">
    <div class="signup-container">
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
            <h2>Create Your Account</h2>
            <p>Join thousands of users finding their perfect stay</p>
          </div>

          <!-- Signup Form -->
          <form @submit.prevent="handleSignup" class="signup-form">
            <!-- Account Type Selection -->
            <div class="form-group">
              <label>I want to join as</label>
              <div class="role-selection">
                <button
                  type="button"
                  @click="form.role = 'guest'"
                  :class="{ active: form.role === 'guest' }"
                  class="role-btn"
                >
                  <span class="role-icon">🎒</span>
                  <span>Guest</span>
                </button>
                <button
                  type="button"
                  @click="form.role = 'host'"
                  :class="{ active: form.role === 'host' }"
                  class="role-btn"
                >
                  <span class="role-icon">🏠</span>
                  <span>Host</span>
                </button>
              </div>
            </div>

            <!-- Name Inputs -->
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  placeholder="John"
                  required
                  :class="{ 'error': errors.firstName }"
                >
                <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
              </div>

              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  placeholder="Doe"
                  required
                  :class="{ 'error': errors.lastName }"
                >
                <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
              </div>
            </div>

            <!-- Email Input -->
            <div class="form-group">
              <label for="email">Email Address</label>
              <div class="input-wrapper">
                <span class="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  placeholder="john.doe@example.com"
                  required
                  :class="{ 'error': errors.email }"
                >
              </div>
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <!-- Phone Input -->
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <div class="input-wrapper">
                <span class="input-icon">📱</span>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  placeholder="08012345678"
                  required
                  :class="{ 'error': errors.phone }"
                >
              </div>
              <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
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
                  placeholder="At least 8 characters"
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
              <div class="password-strength">
                <div class="strength-bar" :class="passwordStrength"></div>
              </div>
              <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
            </div>

            <!-- Confirm Password Input -->
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  placeholder="Re-enter your password"
                  required
                  :class="{ 'error': errors.confirmPassword }"
                >
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="toggle-password"
                >
                  {{ showConfirmPassword ? '👁️' : '👁️‍🗨️' }}
                </button>
              </div>
              <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
            </div>

            <!-- Terms & Conditions -->
            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.agreeToTerms" required>
                <span>
                  I agree to the <a href="/terms" target="_blank">Terms & Conditions</a>
                  and <a href="/privacy" target="_blank">Privacy Policy</a>
                </span>
              </label>
              <span v-if="errors.agreeToTerms" class="error-message">{{ errors.agreeToTerms }}</span>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-btn" :disabled="loading">
              <span v-if="loading">Creating Account...</span>
              <span v-else>Create Account</span>
            </button>

            <!-- Error Message -->
            <div v-if="errors.general" class="general-error">
              {{ errors.general }}
            </div>
          </form>

          <!-- Divider -->
          <div class="divider">
            <span>or sign up with</span>
          </div>

          <!-- Social Signup -->
          <div class="social-signup">
            <button @click="socialSignup('google')" class="social-btn google">
              <img src="https://www.google.com/favicon.ico" alt="Google">
              <span>Google</span>
            </button>
            <button @click="socialSignup('facebook')" class="social-btn facebook">
              <span class="fb-icon">f</span>
              <span>Facebook</span>
            </button>
          </div>

          <!-- Login Link -->
          <div class="form-footer">
            <p>Already have an account? <NuxtLink to="/login" class="login-link">Sign in</NuxtLink></p>
          </div>
        </div>
      </div>

      <!-- Right Side - Info -->
      <div class="info-section">
        <div class="info-content">
          <h2>{{ form.role === 'host' ? 'Start Hosting Today' : 'Start Your Journey' }}</h2>
          <p v-if="form.role === 'host'">
            List your property and earn money by hosting guests from all over Nigeria. Join our community of verified hosts.
          </p>
          <p v-else>
            Discover amazing properties across Nigeria. Book your perfect stay with verified hosts and enjoy seamless experiences.
          </p>

          <div class="benefits-list">
            <div v-if="form.role === 'host'">
              <div class="benefit-item">
                <span class="benefit-icon">💰</span>
                <div>
                  <h4>Earn Extra Income</h4>
                  <p>Turn your property into a steady income source</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">🛡️</span>
                <div>
                  <h4>Safe & Secure</h4>
                  <p>Verified guests and secure payment processing</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">📊</span>
                <div>
                  <h4>Easy Management</h4>
                  <p>Manage bookings and earnings from your dashboard</p>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="benefit-item">
                <span class="benefit-icon">🏠</span>
                <div>
                  <h4>Quality Properties</h4>
                  <p>All properties are verified and quality-checked</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">⚡</span>
                <div>
                  <h4>Instant Booking</h4>
                  <p>Book instantly and get immediate confirmation</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-icon">🎯</span>
                <div>
                  <h4>Best Prices</h4>
                  <p>Competitive rates with no hidden charges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

// Form state
const form = ref({
  role: 'guest',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const errors = ref({})

// Computed
const passwordStrength = computed(() => {
  const password = form.value.password
  if (!password) return 'weak'
  if (password.length < 6) return 'weak'
  if (password.length < 10) return 'medium'
  if (password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password)) return 'strong'
  return 'medium'
})

// Methods
const handleSignup = async () => {
  // Clear previous errors
  errors.value = {}

  // Validation
  if (!form.value.firstName.trim()) {
    errors.value.firstName = 'First name is required'
  }

  if (!form.value.lastName.trim()) {
    errors.value.lastName = 'Last name is required'
  }

  if (!form.value.email) {
    errors.value.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email'
  }

  if (!form.value.phone) {
    errors.value.phone = 'Phone number is required'
  } else if (!/^0[0-9]{10}$/.test(form.value.phone)) {
    errors.value.phone = 'Please enter a valid Nigerian phone number'
  }

  if (!form.value.password) {
    errors.value.password = 'Password is required'
  } else if (form.value.password.length < 8) {
    errors.value.password = 'Password must be at least 8 characters'
  }

  if (!form.value.confirmPassword) {
    errors.value.confirmPassword = 'Please confirm your password'
  } else if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match'
  }

  if (!form.value.agreeToTerms) {
    errors.value.agreeToTerms = 'You must agree to the terms and conditions'
  }

  // Check if there are any errors
  if (Object.keys(errors.value).length > 0) {
    return
  }

  loading.value = true

  try {
    // TODO: Implement actual signup API call
    // const response = await $fetch('/api/auth/signup', {
    //   method: 'POST',
    //   body: {
    //     firstName: form.value.firstName,
    //     lastName: form.value.lastName,
    //     email: form.value.email,
    //     phone: form.value.phone,
    //     password: form.value.password,
    //     role: form.value.role
    //   }
    // })

    // Mock successful signup (remove this when API is ready)
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Store token and user data (use Pinia store when implemented)
    // authStore.login(response.token, response.user)

    // Redirect based on role
    if (form.value.role === 'host') {
      router.push('/dashboard')
    } else {
      router.push('/')
    }
  } catch (error) {
    errors.value.general = error.message || 'Failed to create account. Please try again.'
  } finally {
    loading.value = false
  }
}

const socialSignup = async (provider) => {
  try {
    // TODO: Implement social signup
    console.log(`Signup with ${provider}`)
    // window.location.href = `/api/auth/${provider}`
  } catch (error) {
    errors.value.general = `Failed to signup with ${provider}`
  }
}

// Set metadata
useHead({
  title: 'Sign Up - NSC',
  meta: [
    { name: 'description', content: 'Create your NSC account' }
  ]
})

definePageMeta({
  layout: false
})
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px;
}

.signup-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  width: 100%;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

/* Form Section */
.form-section {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 95vh;
  overflow-y: auto;
}

.form-content {
  width: 100%;
  max-width: 480px;
}

.brand-section {
  text-align: center;
  margin-bottom: 30px;
}

.brand-section h1 {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 5px;
}

.brand-section p {
  color: #6b7280;
  font-size: 13px;
  margin: 0;
}

.form-header {
  margin-bottom: 30px;
}

.form-header h2 {
  font-size: 26px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 6px;
}

.form-header p {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

/* Form Styles */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* Role Selection */
.role-selection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.role-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 18px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
  font-weight: 600;
}

.role-btn:hover {
  border-color: #049b35;
  background: #f0fdf4;
}

.role-btn.active {
  border-color: #049b35;
  background: linear-gradient(135deg, rgba(4, 155, 53, 0.1) 0%, rgba(3, 122, 41, 0.1) 100%);
  box-shadow: 0 0 0 3px rgba(4, 155, 53, 0.1);
}

.role-icon {
  font-size: 32px;
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
  padding: 13px 15px 13px 48px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: #fafafa;
}

.form-group > input {
  width: 100%;
  padding: 13px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: #fafafa;
}

input:focus {
  outline: none;
  border-color: #049b35;
  background: white;
  box-shadow: 0 0 0 4px rgba(4, 155, 53, 0.1);
}

input.error {
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

/* Password Strength */
.password-strength {
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  margin-top: -4px;
}

.strength-bar {
  height: 100%;
  transition: all 0.3s ease;
}

.strength-bar.weak {
  width: 33%;
  background: #ef4444;
}

.strength-bar.medium {
  width: 66%;
  background: #f59e0b;
}

.strength-bar.strong {
  width: 100%;
  background: #049b35;
}

.error-message {
  color: #ef4444;
  font-size: 12px;
  margin-top: -4px;
}

/* Checkbox */
.checkbox-label {
  display: flex;
  align-items: start;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
  color: #333;
  line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #049b35;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-label a {
  color: #049b35;
  text-decoration: none;
  font-weight: 600;
}

.checkbox-label a:hover {
  text-decoration: underline;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(4, 155, 53, 0.3);
  margin-top: 5px;
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
  font-size: 13px;
  text-align: center;
  margin-top: -5px;
}

/* Divider */
.divider {
  position: relative;
  text-align: center;
  margin: 25px 0;
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
  font-size: 13px;
  z-index: 1;
}

/* Social Signup */
.social-signup {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 25px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 11px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
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
  padding-top: 5px;
}

.form-footer p {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

.login-link {
  color: #049b35;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-link:hover {
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
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.info-content > p {
  font-size: 17px;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 40px;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.benefit-item {
  display: flex;
  gap: 15px;
  align-items: start;
}

.benefit-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.benefit-item h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
}

.benefit-item p {
  font-size: 15px;
  opacity: 0.9;
  margin: 0;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .signup-container {
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
  .signup-page {
    padding: 0;
  }

  .signup-container {
    border-radius: 0;
  }

  .form-section {
    padding: 30px 20px;
    max-height: none;
  }

  .form-content {
    max-width: 100%;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .social-signup {
    grid-template-columns: 1fr;
  }
}
</style>
