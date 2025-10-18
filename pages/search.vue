<template>
  <div class="search-page">
    <div class="container">
      <!-- Search Header -->
      <div class="search-header">
        <h1>Search Results</h1>
        <p v-if="searchQuery.location">
          {{ filteredProperties.length }} properties in {{ searchQuery.location }}
        </p>
        <p v-else>
          {{ filteredProperties.length }} properties available
        </p>
      </div>

      <div class="search-content">
        <!-- Filters Sidebar -->
        <aside class="filters-sidebar">
          <div class="filters-header">
            <h2>Filters</h2>
            <button @click="clearFilters" class="clear-btn">Clear all</button>
          </div>

          <!-- Price Range -->
          <div class="filter-section">
            <h3>Price Range</h3>
            <div class="price-inputs">
              <div class="price-input">
                <label>Min Price</label>
                <input type="number" v-model="filters.minPrice" placeholder="₦0">
              </div>
              <div class="price-input">
                <label>Max Price</label>
                <input type="number" v-model="filters.maxPrice" placeholder="₦500,000">
              </div>
            </div>
            <input type="range"
                   v-model="filters.maxPrice"
                   min="10000"
                   max="500000"
                   step="10000"
                   class="price-slider">
          </div>

          <!-- Property Type -->
          <div class="filter-section">
            <h3>Property Type</h3>
            <div class="checkbox-group">
              <label v-for="type in propertyTypes" :key="type" class="checkbox-label">
                <input type="checkbox" v-model="filters.propertyTypes" :value="type">
                <span>{{ type }}</span>
              </label>
            </div>
          </div>

          <!-- Bedrooms -->
          <div class="filter-section">
            <h3>Bedrooms</h3>
            <div class="button-group">
              <button v-for="n in 5"
                      :key="n"
                      @click="toggleBedrooms(n)"
                      :class="{ active: filters.bedrooms.includes(n) }"
                      class="filter-btn">
                {{ n }}{{ n === 5 ? '+' : '' }}
              </button>
            </div>
          </div>

          <!-- Bathrooms -->
          <div class="filter-section">
            <h3>Bathrooms</h3>
            <div class="button-group">
              <button v-for="n in 4"
                      :key="n"
                      @click="toggleBathrooms(n)"
                      :class="{ active: filters.bathrooms.includes(n) }"
                      class="filter-btn">
                {{ n }}{{ n === 4 ? '+' : '' }}
              </button>
            </div>
          </div>

          <!-- Amenities -->
          <div class="filter-section">
            <h3>Amenities</h3>
            <div class="checkbox-group">
              <label v-for="amenity in amenitiesList" :key="amenity" class="checkbox-label">
                <input type="checkbox" v-model="filters.amenities" :value="amenity">
                <span>{{ amenity }}</span>
              </label>
            </div>
          </div>

          <!-- Rating -->
          <div class="filter-section">
            <h3>Minimum Rating</h3>
            <div class="rating-buttons">
              <button v-for="rating in [3, 4, 4.5]"
                      :key="rating"
                      @click="filters.minRating = rating"
                      :class="{ active: filters.minRating === rating }"
                      class="rating-btn">
                ⭐ {{ rating }}+
              </button>
            </div>
          </div>
        </aside>

        <!-- Results Section -->
        <main class="results-section">
          <!-- Active Filters -->
          <div v-if="hasActiveFilters" class="active-filters">
            <div class="filter-chip" v-if="filters.minPrice">
              Min: ₦{{ filters.minPrice.toLocaleString() }}
              <button @click="filters.minPrice = 0">×</button>
            </div>
            <div class="filter-chip" v-if="filters.maxPrice < 500000">
              Max: ₦{{ filters.maxPrice.toLocaleString() }}
              <button @click="filters.maxPrice = 500000">×</button>
            </div>
            <div class="filter-chip" v-for="type in filters.propertyTypes" :key="type">
              {{ type }}
              <button @click="removePropertyType(type)">×</button>
            </div>
            <div class="filter-chip" v-if="filters.bedrooms.length">
              {{ filters.bedrooms.length }} bedroom{{ filters.bedrooms.length > 1 ? 's' : '' }}
              <button @click="filters.bedrooms = []">×</button>
            </div>
          </div>

          <!-- Sort & View Options -->
          <div class="results-header">
            <div class="results-info">
              <strong>{{ filteredProperties.length }}</strong> properties found
            </div>
            <div class="results-controls">
              <select v-model="sortBy" class="sort-select">
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
              <div class="view-toggle">
                <button @click="viewMode = 'grid'" :class="{ active: viewMode === 'grid' }">
                  ⊞
                </button>
                <button @click="viewMode = 'list'" :class="{ active: viewMode === 'list' }">
                  ☰
                </button>
              </div>
            </div>
          </div>

          <!-- Properties Grid/List -->
          <div v-if="filteredProperties.length > 0"
               :class="['properties-container', viewMode]">
            <div v-for="property in sortedProperties"
                 :key="property.id"
                 class="property-card"
                 @click="goToProperty(property.id)">
              <div class="property-image">
                <img :src="property.image" :alt="property.title">
                <button class="wishlist-btn" @click.stop="toggleWishlist(property.id)">
                  {{ wishlist.includes(property.id) ? '❤️' : '🤍' }}
                </button>
                <span class="property-badge" v-if="property.isFeatured">Featured</span>
              </div>
              <div class="property-info">
                <div class="property-header">
                  <h3>{{ property.title }}</h3>
                  <div class="property-rating">
                    ⭐ {{ property.rating }}
                  </div>
                </div>
                <p class="property-location">📍 {{ property.location }}</p>
                <div class="property-specs">
                  <span>🛏️ {{ property.bedrooms }} beds</span>
                  <span>🚿 {{ property.bathrooms }} baths</span>
                  <span>👥 {{ property.maxGuests }} guests</span>
                </div>
                <div class="property-amenities">
                  <span v-for="amenity in property.amenities.slice(0, 3)"
                        :key="amenity"
                        class="amenity-tag">
                    {{ amenity }}
                  </span>
                  <span v-if="property.amenities.length > 3" class="amenity-more">
                    +{{ property.amenities.length - 3 }}
                  </span>
                </div>
                <div class="property-footer">
                  <div class="property-price">
                    <span class="price">₦{{ property.price.toLocaleString() }}</span>
                    <span class="price-label">/ night</span>
                  </div>
                  <button class="view-btn" @click.stop="goToProperty(property.id)">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="empty-state">
            <div class="empty-icon">🏠</div>
            <h3>No properties found</h3>
            <p>Try adjusting your filters to see more results</p>
            <button @click="clearFilters" class="clear-filters-btn">Clear All Filters</button>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="pagination">
            <button @click="currentPage--" :disabled="currentPage === 1" class="page-btn">
              Previous
            </button>
            <div class="page-numbers">
              <button v-for="page in displayedPages"
                      :key="page"
                      @click="currentPage = page"
                      :class="{ active: currentPage === page }"
                      class="page-number">
                {{ page }}
              </button>
            </div>
            <button @click="currentPage++" :disabled="currentPage === totalPages" class="page-btn">
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

// Search query from URL params
const searchQuery = ref({
  location: route.query.location || '',
  checkIn: route.query.checkIn || '',
  checkOut: route.query.checkOut || '',
  guests: route.query.guests || 2
})

// Filters
const filters = ref({
  minPrice: 0,
  maxPrice: 500000,
  propertyTypes: [],
  bedrooms: [],
  bathrooms: [],
  amenities: [],
  minRating: 0
})

// View and sort
const viewMode = ref('grid')
const sortBy = ref('default')
const wishlist = ref([])
const currentPage = ref(1)
const itemsPerPage = 12

// Available options
const propertyTypes = ['Apartment', 'Duplex', 'Yacht', 'Vacation Home', 'Beach House', 'Rooftop', 'BQ']
const amenitiesList = ['WiFi', 'Air Conditioning', 'Parking', 'Swimming Pool', 'Gym', 'Security', 'Generator']

// Mock properties data (will come from API)
const properties = ref([
  {
    id: 1,
    title: 'Luxury Apartment in Lekki Phase 1',
    location: 'Lekki Phase 1, Lagos',
    price: 85000,
    rating: 4.8,
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 6,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400',
    amenities: ['WiFi', 'Air Conditioning', 'Parking', 'Swimming Pool'],
    propertyType: 'Apartment',
    isFeatured: true
  },
  {
    id: 2,
    title: 'Modern Duplex in Ikoyi',
    location: 'Ikoyi, Lagos',
    price: 120000,
    rating: 4.9,
    bedrooms: 4,
    bathrooms: 4,
    maxGuests: 8,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400',
    amenities: ['WiFi', 'Air Conditioning', 'Parking', 'Gym'],
    propertyType: 'Duplex',
    isFeatured: true
  },
  {
    id: 3,
    title: 'Cozy Studio in Victoria Island',
    location: 'Victoria Island, Lagos',
    price: 45000,
    rating: 4.5,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400',
    amenities: ['WiFi', 'Air Conditioning', 'Security'],
    propertyType: 'Apartment',
    isFeatured: false
  },
  {
    id: 4,
    title: 'Beach House in Lekki',
    location: 'Lekki, Lagos',
    price: 150000,
    rating: 5.0,
    bedrooms: 5,
    bathrooms: 5,
    maxGuests: 10,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400',
    amenities: ['WiFi', 'Air Conditioning', 'Parking', 'Swimming Pool', 'Generator'],
    propertyType: 'Beach House',
    isFeatured: true
  },
  {
    id: 5,
    title: '2 Bedroom Apartment in Ikeja',
    location: 'Ikeja, Lagos',
    price: 55000,
    rating: 4.6,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400',
    amenities: ['WiFi', 'Parking', 'Security'],
    propertyType: 'Apartment',
    isFeatured: false
  },
  {
    id: 6,
    title: 'Penthouse in Banana Island',
    location: 'Banana Island, Lagos',
    price: 200000,
    rating: 4.9,
    bedrooms: 4,
    bathrooms: 5,
    maxGuests: 8,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400',
    amenities: ['WiFi', 'Air Conditioning', 'Parking', 'Swimming Pool', 'Gym', 'Security', 'Generator'],
    propertyType: 'Apartment',
    isFeatured: true
  }
])

// Computed properties
const filteredProperties = computed(() => {
  return properties.value.filter(property => {
    // Price filter
    if (property.price < filters.value.minPrice || property.price > filters.value.maxPrice) {
      return false
    }

    // Property type filter
    if (filters.value.propertyTypes.length > 0 && !filters.value.propertyTypes.includes(property.propertyType)) {
      return false
    }

    // Bedrooms filter
    if (filters.value.bedrooms.length > 0 && !filters.value.bedrooms.includes(property.bedrooms)) {
      return false
    }

    // Bathrooms filter
    if (filters.value.bathrooms.length > 0 && !filters.value.bathrooms.includes(property.bathrooms)) {
      return false
    }

    // Amenities filter
    if (filters.value.amenities.length > 0) {
      const hasAllAmenities = filters.value.amenities.every(amenity =>
        property.amenities.includes(amenity)
      )
      if (!hasAllAmenities) return false
    }

    // Rating filter
    if (filters.value.minRating > 0 && property.rating < filters.value.minRating) {
      return false
    }

    // Location search
    if (searchQuery.value.location && !property.location.toLowerCase().includes(searchQuery.value.location.toLowerCase())) {
      return false
    }

    return true
  })
})

const sortedProperties = computed(() => {
  const sorted = [...filteredProperties.value]

  switch (sortBy.value) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price)
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating)
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id)
    default:
      return sorted
  }
})

const totalPages = computed(() => {
  return Math.ceil(filteredProperties.value.length / itemsPerPage)
})

const displayedPages = computed(() => {
  const pages = []
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i)
  }
  return pages
})

const hasActiveFilters = computed(() => {
  return filters.value.minPrice > 0 ||
         filters.value.maxPrice < 500000 ||
         filters.value.propertyTypes.length > 0 ||
         filters.value.bedrooms.length > 0 ||
         filters.value.bathrooms.length > 0 ||
         filters.value.amenities.length > 0 ||
         filters.value.minRating > 0
})

// Methods
const toggleBedrooms = (num) => {
  const index = filters.value.bedrooms.indexOf(num)
  if (index > -1) {
    filters.value.bedrooms.splice(index, 1)
  } else {
    filters.value.bedrooms.push(num)
  }
}

const toggleBathrooms = (num) => {
  const index = filters.value.bathrooms.indexOf(num)
  if (index > -1) {
    filters.value.bathrooms.splice(index, 1)
  } else {
    filters.value.bathrooms.push(num)
  }
}

const removePropertyType = (type) => {
  const index = filters.value.propertyTypes.indexOf(type)
  if (index > -1) {
    filters.value.propertyTypes.splice(index, 1)
  }
}

const clearFilters = () => {
  filters.value = {
    minPrice: 0,
    maxPrice: 500000,
    propertyTypes: [],
    bedrooms: [],
    bathrooms: [],
    amenities: [],
    minRating: 0
  }
}

const toggleWishlist = (id) => {
  const index = wishlist.value.indexOf(id)
  if (index > -1) {
    wishlist.value.splice(index, 1)
  } else {
    wishlist.value.push(id)
  }
}

const goToProperty = (id) => {
  router.push(`/property/${id}`)
}

// Set metadata
useHead({
  title: 'Search Properties - NSC',
  meta: [
    { name: 'description', content: 'Find your perfect shortlet in Nigeria' }
  ]
})
</script>

<style scoped>
.search-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 30px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Search Header */
.search-header {
  margin-bottom: 30px;
}

.search-header h1 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.search-header p {
  color: #6b7280;
  font-size: 16px;
}

/* Search Content */
.search-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

/* Filters Sidebar */
.filters-sidebar {
  background: white;
  border-radius: 12px;
  padding: 25px;
  height: fit-content;
  position: sticky;
  top: 100px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.filters-header h2 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.clear-btn {
  background: none;
  border: none;
  color: #049b35;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
}

.filter-section {
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
}

.filter-section:last-child {
  border-bottom: none;
}

.filter-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

/* Price Inputs */
.price-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 15px;
}

.price-input label {
  display: block;
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 5px;
}

.price-input input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.price-slider {
  width: 100%;
  accent-color: #049b35;
}

/* Checkbox Group */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #333;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #049b35;
  cursor: pointer;
}

/* Button Group */
.button-group, .rating-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn, .rating-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.filter-btn:hover, .rating-btn:hover {
  border-color: #049b35;
  color: #049b35;
}

.filter-btn.active, .rating-btn.active {
  background: #049b35;
  color: white;
  border-color: #049b35;
}

/* Results Section */
.results-section {
  flex: 1;
}

/* Active Filters */
.active-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.filter-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: #f0fdf4;
  border: 1px solid #049b35;
  border-radius: 20px;
  font-size: 14px;
  color: #037a29;
}

.filter-chip button {
  background: none;
  border: none;
  font-size: 18px;
  color: #049b35;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

/* Results Header */
.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.results-info {
  font-size: 16px;
  color: #333;
}

.results-controls {
  display: flex;
  gap: 15px;
  align-items: center;
}

.sort-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.view-toggle {
  display: flex;
  gap: 5px;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.view-toggle button {
  padding: 8px 12px;
  background: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  transition: background 0.3s ease;
}

.view-toggle button.active {
  background: #049b35;
  color: white;
}

/* Properties Container */
.properties-container.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}

.properties-container.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Property Card */
.property-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.property-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.property-card:hover .property-image img {
  transform: scale(1.05);
}

.wishlist-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.wishlist-btn:hover {
  transform: scale(1.1);
}

.property-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #049b35 0%, #037a29 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.property-info {
  padding: 18px;
}

.property-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 8px;
}

.property-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  flex: 1;
}

.property-rating {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
  margin-left: 10px;
}

.property-location {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 12px;
}

.property-specs {
  display: flex;
  gap: 15px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
}

.property-amenities {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.amenity-tag {
  padding: 4px 10px;
  background: #f0fdf4;
  border-radius: 12px;
  font-size: 12px;
  color: #037a29;
}

.amenity-more {
  padding: 4px 10px;
  background: #f8f9fa;
  border-radius: 12px;
  font-size: 12px;
  color: #6b7280;
}

.property-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
}

.property-price {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.price {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
}

.price-label {
  font-size: 13px;
  color: #6b7280;
}

.view-btn {
  padding: 8px 16px;
  background: #049b35;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.view-btn:hover {
  background: #037a29;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 12px;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.empty-state p {
  color: #6b7280;
  margin-bottom: 25px;
}

.clear-filters-btn {
  padding: 12px 30px;
  background: #049b35;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.clear-filters-btn:hover {
  background: #037a29;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

.page-btn {
  padding: 10px 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.page-btn:hover:not(:disabled) {
  border-color: #049b35;
  color: #049b35;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 5px;
}

.page-number {
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.page-number:hover {
  border-color: #049b35;
  color: #049b35;
}

.page-number.active {
  background: #049b35;
  color: white;
  border-color: #049b35;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .search-content {
    grid-template-columns: 1fr;
  }

  .filters-sidebar {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .properties-container.grid {
    grid-template-columns: 1fr;
  }

  .results-header {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }

  .results-controls {
    justify-content: space-between;
  }
}
</style>
