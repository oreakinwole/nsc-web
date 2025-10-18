# NSC Web - Complete Implementation Plan
## Goal: 50-80% Production Ready Application

---

## CURRENT STATE ANALYSIS

### What We Have ✓
- ✅ Beautiful, responsive UI with consistent green branding
- ✅ 6 pages: Home, Auth, Dashboard, Create Listing (3 steps)
- ✅ 8 rental components (NavBar, Hero, PropertyCard, etc.)
- ✅ Tailwind CSS styling system
- ✅ Nuxt 3 + Vue 3 (Composition API)
- ✅ File-based routing

### What's Missing ✗
- ❌ No backend/API
- ❌ No database
- ❌ No authentication system
- ❌ No state management
- ❌ Missing critical pages (property details, search results, booking, profile)
- ❌ No payment integration
- ❌ No image upload handling
- ❌ No real data flow

---

## IMPLEMENTATION PHASES

### PHASE 1: MISSING FRONTEND PAGES (Priority: HIGH)
**Goal:** Complete the user journey flow

#### 1.1 Property Details Page (`/property/[id].vue`)
- Property image gallery with lightbox
- Full property information display
- Amenities list with icons
- Host information card
- Booking form sidebar (check-in/out, guests)
- Reviews section with ratings
- Location map integration
- Similar properties section
- Mobile responsive design

#### 1.2 Search Results Page (`/search.vue`)
- Filter sidebar (location, price, amenities, property type)
- Property grid/list view toggle
- Sorting options (price, rating, newest)
- Pagination or infinite scroll
- Search query display
- Filter chips (removable)
- Results count
- Map view toggle

#### 1.3 Booking Confirmation Page (`/booking/confirm.vue`)
- Property summary card
- Booking details (dates, guests, nights)
- Price breakdown (night rate, service fee, total)
- Guest information form
- Special requests textarea
- Payment method selection
- Terms & conditions checkbox
- Confirm & pay button

#### 1.4 User Profile Pages
- **Guest Profile** (`/profile/guest.vue`)
  - Personal information
  - Upcoming bookings
  - Past bookings
  - Reviews given
  - Saved properties
  - Payment methods

- **Host Profile** (`/profile/host.vue`)
  - Host information & verification
  - My listings (grid view)
  - Booking requests
  - Calendar view
  - Earnings dashboard
  - Reviews received

#### 1.5 Booking Success Page (`/booking/success.vue`)
- Success animation/icon
- Booking confirmation details
- Booking reference number
- Email confirmation notice
- Next steps information
- View booking button
- Download receipt option

#### 1.6 Login/Signup Pages
- **Login Page** (`/login.vue`)
  - Email/password form
  - Social login buttons (Google, Facebook)
  - Remember me checkbox
  - Forgot password link
  - Sign up link

- **Signup Page** (`/signup.vue`)
  - Full name, email, password
  - Confirm password
  - Guest/Host selection
  - Terms acceptance
  - Social signup buttons
  - Login link

---

### PHASE 2: BACKEND API STRUCTURE (Priority: HIGH)
**Goal:** Build RESTful API with Node.js/Express

#### 2.1 Backend Setup
```
/server
  /routes
    - auth.routes.js
    - user.routes.js
    - property.routes.js
    - booking.routes.js
    - review.routes.js
  /controllers
    - authController.js
    - userController.js
    - propertyController.js
    - bookingController.js
    - reviewController.js
  /models
    - User.js
    - Property.js
    - Booking.js
    - Review.js
  /middleware
    - auth.middleware.js
    - upload.middleware.js
    - validation.middleware.js
  /utils
    - jwt.util.js
    - email.util.js
    - upload.util.js
  /config
    - database.js
    - cloudinary.js
  server.js
```

#### 2.2 API Endpoints to Build

**Authentication:**
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

**Users:**
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update profile
- `GET /api/users/:id` - Get user by ID
- `POST /api/users/avatar` - Upload avatar

**Properties:**
- `GET /api/properties` - List all properties (with filters)
- `GET /api/properties/:id` - Get single property
- `POST /api/properties` - Create property (host only)
- `PUT /api/properties/:id` - Update property (host only)
- `DELETE /api/properties/:id` - Delete property (host only)
- `POST /api/properties/:id/images` - Upload property images
- `GET /api/properties/search` - Advanced search
- `GET /api/properties/featured` - Get featured properties

**Bookings:**
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking
- `POST /api/bookings/:id/payment` - Process payment

**Reviews:**
- `POST /api/reviews` - Create review
- `GET /api/reviews/property/:id` - Get property reviews
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

---

### PHASE 3: DATABASE SCHEMA (Priority: HIGH)
**Technology:** PostgreSQL with Prisma ORM

#### 3.1 Database Models

**User Model:**
```prisma
model User {
  id            String    @id @default(uuid())
  email         String    @unique
  password      String
  firstName     String
  lastName      String
  phone         String?
  avatar        String?
  role          Role      @default(GUEST)
  isVerified    Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  properties    Property[]
  bookings      Booking[]
  reviews       Review[]
}

enum Role {
  GUEST
  HOST
  ADMIN
}
```

**Property Model:**
```prisma
model Property {
  id              String    @id @default(uuid())
  title           String
  description     String
  propertyType    String
  address         String
  city            String
  state           String
  lga             String?
  bedrooms        Int
  bathrooms       Int
  livingrooms     Int
  pricePerNight   Float
  cautionFee      Float?
  minNights       Int       @default(1)
  maxGuests       Int
  images          String[]
  videoLinks      Json?
  amenities       String[]
  rules           String[]
  isActive        Boolean   @default(true)
  isFeatured      Boolean   @default(false)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  hostId          String
  host            User      @relation(fields: [hostId], references: [id])

  bookings        Booking[]
  reviews         Review[]
}
```

**Booking Model:**
```prisma
model Booking {
  id              String    @id @default(uuid())
  checkIn         DateTime
  checkOut        DateTime
  guests          Int
  totalPrice      Float
  status          BookingStatus @default(PENDING)
  specialRequests String?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  guestId         String
  guest           User      @relation(fields: [guestId], references: [id])

  propertyId      String
  property        Property  @relation(fields: [propertyId], references: [id])

  payment         Payment?
  review          Review?
}

enum BookingStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
}
```

**Review Model:**
```prisma
model Review {
  id          String    @id @default(uuid())
  rating      Int
  comment     String
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  userId      String
  user        User      @relation(fields: [userId], references: [id])

  propertyId  String
  property    Property  @relation(fields: [propertyId], references: [id])

  bookingId   String    @unique
  booking     Booking   @relation(fields: [bookingId], references: [id])
}
```

**Payment Model:**
```prisma
model Payment {
  id              String    @id @default(uuid())
  amount          Float
  status          PaymentStatus @default(PENDING)
  paymentMethod   String
  transactionRef  String    @unique
  createdAt       DateTime  @default(now())

  bookingId       String    @unique
  booking         Booking   @relation(fields: [bookingId], references: [id])
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}
```

---

### PHASE 4: STATE MANAGEMENT (Priority: MEDIUM)
**Technology:** Pinia

#### 4.1 Stores to Create

**Auth Store** (`stores/auth.ts`):
```typescript
- state: user, token, isAuthenticated
- actions: login(), signup(), logout(), refreshToken()
- getters: currentUser, isGuest, isHost
```

**Property Store** (`stores/property.ts`):
```typescript
- state: properties, currentProperty, filters
- actions: fetchProperties(), fetchProperty(), createProperty(), updateProperty()
- getters: featuredProperties, filteredProperties
```

**Booking Store** (`stores/booking.ts`):
```typescript
- state: bookings, currentBooking
- actions: createBooking(), fetchBookings(), cancelBooking()
- getters: upcomingBookings, pastBookings
```

**UI Store** (`stores/ui.ts`):
```typescript
- state: loading, toast, modal
- actions: showToast(), showModal(), setLoading()
```

---

### PHASE 5: INTEGRATIONS & FEATURES (Priority: MEDIUM)

#### 5.1 Authentication System
- JWT token management
- Refresh token rotation
- Protected routes middleware
- Social auth (Google OAuth)

#### 5.2 Image Upload
- Cloudinary integration
- Multiple image upload
- Image optimization
- Progress indicators

#### 5.3 Payment Integration
- Paystack (Nigerian payment gateway)
- Payment intent creation
- Webhook handling
- Receipt generation

#### 5.4 Email System
- NodeMailer setup
- Email templates
- Booking confirmation emails
- Password reset emails

#### 5.5 Search & Filters
- Elasticsearch or Algolia
- Advanced filtering
- Geolocation search
- Date availability checking

---

### PHASE 6: ADDITIONAL FEATURES (Priority: LOW)

#### 6.1 Messaging System
- Real-time chat (Socket.io)
- Guest-Host communication
- Notification system

#### 6.2 Admin Dashboard
- User management
- Property approval
- Booking overview
- Analytics

#### 6.3 Advanced Features
- Calendar integration
- Multi-currency support
- Wishlist/favorites
- Property comparison
- Dynamic pricing

---

## TECHNOLOGY STACK DECISIONS

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT + bcrypt
- **Image Storage:** Cloudinary
- **Payment:** Paystack API
- **Email:** NodeMailer + SendGrid

### Frontend (Already Set)
- **Framework:** Nuxt 3
- **State:** Pinia
- **Styling:** Tailwind CSS
- **HTTP Client:** Nuxt's $fetch (built-in)

### DevOps
- **Hosting:** Vercel (frontend), Railway/Render (backend)
- **CI/CD:** GitHub Actions
- **Environment:** .env files for config

---

## IMPLEMENTATION ORDER (Recommended)

### Week 1: Foundation
1. ✅ Fix existing pages styling (DONE)
2. Create missing pages (property details, search, booking)
3. Set up backend project structure
4. Initialize database with Prisma

### Week 2: Backend Core
5. Implement authentication API
6. Build property CRUD endpoints
7. Set up image upload with Cloudinary
8. Create booking endpoints

### Week 3: Frontend Integration
9. Set up Pinia stores
10. Connect auth pages to API
11. Connect property creation to API
12. Implement search functionality

### Week 4: Booking & Payment
13. Build booking flow
14. Integrate Paystack payment
15. Implement email notifications
16. User profile pages

### Week 5: Polish & Features
17. Add reviews system
18. Host dashboard enhancements
19. Error handling & validation
20. Testing & bug fixes

---

## FILE STRUCTURE ADDITIONS NEEDED

```
nsc-web/
├── composables/
│   ├── useAuth.ts
│   ├── useProperty.ts
│   ├── useBooking.ts
│   └── useToast.ts
├── stores/
│   ├── auth.ts
│   ├── property.ts
│   ├── booking.ts
│   └── ui.ts
├── types/
│   ├── user.ts
│   ├── property.ts
│   ├── booking.ts
│   └── api.ts
├── utils/
│   ├── api.ts
│   ├── validators.ts
│   ├── formatters.ts
│   └── constants.ts
├── middleware/
│   ├── auth.ts
│   └── guest.ts
├── pages/
│   ├── property/
│   │   └── [id].vue
│   ├── search.vue
│   ├── booking/
│   │   ├── confirm.vue
│   │   └── success.vue
│   ├── profile/
│   │   ├── guest.vue
│   │   └── host.vue
│   ├── login.vue
│   └── signup.vue
└── server/
    ├── api/
    │   ├── auth/
    │   ├── properties/
    │   ├── bookings/
    │   └── users/
    └── middleware/
```

---

## ENVIRONMENT VARIABLES NEEDED

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/nsc_db

# JWT
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Paystack
PAYSTACK_PUBLIC_KEY=pk_test_xxx
PAYSTACK_SECRET_KEY=sk_test_xxx

# Email
SENDGRID_API_KEY=your-sendgrid-key
FROM_EMAIL=noreply@nsc.com

# App
BASE_URL=http://localhost:3000
API_BASE_URL=http://localhost:4000
NODE_ENV=development
```

---

## SUCCESS METRICS (50-80% Completion)

### 50% Milestone:
- ✅ All critical pages exist
- ✅ Backend API with auth + CRUD
- ✅ Database schema implemented
- ✅ State management setup
- ✅ Basic data flow working

### 80% Milestone:
- ✅ Complete booking flow
- ✅ Payment integration
- ✅ Image uploads working
- ✅ Email notifications
- ✅ Search & filters
- ✅ User profiles functional
- ✅ Host dashboard complete
- ✅ Error handling & validation
- ✅ Responsive on all devices

---

## NEXT IMMEDIATE STEPS

1. Create missing frontend pages (property details, search, booking)
2. Set up backend folder structure
3. Initialize Prisma and database
4. Create API route structure
5. Implement authentication endpoints
6. Set up Pinia stores
7. Connect login/signup to backend

---

**Current Status:** ~20% Complete (UI only)
**Target:** 50-80% Complete (Full functional MVP)
**Timeline:** 4-5 weeks of focused development
