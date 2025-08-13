<div align="center">

# 🔧 Jobsy Backend API

**RESTful API Server for Blue Collar Job Search Platform**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white)](https://twilio.com/)

![API Demo](https://media.giphy.com/media/A8pRmkexvl9jCdzS5D/giphy.gif)

[🚀 Live API](https://jobsy-api.render.com) • [📖 API Docs](docs/api.md) • [🔗 Frontend Repo](../frontend/) • [📋 Postman Collection](docs/postman-collection.json)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📐 Architecture](#-architecture)
- [🔌 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [🔧 Configuration](#-configuration)
- [📁 Project Structure](#-project-structure)
- [🚧 Development](#-development)

## ✨ Features

### 🎯 Core Functionality
- ✅ **RESTful API Design** - Clean, intuitive endpoints
- ✅ **Manager-Service-Controller Architecture** - Separation of concerns
- ✅ **MongoDB Integration** - Robust data persistence
- ✅ **SMS Notifications** - Twilio integration for applicant alerts
- ✅ **Email Notifications** - NodeMailer for recruiter notifications
- ✅ **Category-based Job Management** - 9 specialized job categories
- ✅ **Real-time Application Processing** - Instant job applications

### 🔒 Advanced Features
- 🔄 **Error Handling** - Comprehensive error management
- 📊 **Data Validation** - Input sanitization and validation
- 🌐 **CORS Support** - Cross-origin resource sharing
- 📱 **Mobile-first API** - Optimized for mobile applications

> **📱 Note**: SMS notifications are currently limited to Twilio verified numbers (development environment)

## 🛠️ Tech Stack

### Core Technologies
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) **Node.js 16+** - JavaScript runtime
- ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) **Express.js** - Web application framework
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) **MongoDB Atlas** - Cloud database service

### Communication Services
- ![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=flat&logo=twilio&logoColor=white) **Twilio API** - SMS notifications
- ![NodeMailer](https://img.shields.io/badge/NodeMailer-0F9D58?style=flat) **NodeMailer** - Email service
- ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white) **Render** - Cloud deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- MongoDB Atlas account
- Twilio account (SMS service)
- Email service credentials (Gmail recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/jobsy-backend.git
   cd jobsy-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jobsy
   
   # Twilio SMS Service
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   
   # Email Service
   EMAIL_SERVICE_USER=your_email@gmail.com
   EMAIL_SERVICE_PASS=your_app_password
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Verify installation**
   ```bash
   # Test API endpoint
   curl http://localhost:5000/health
   ```

### API Testing

Use [Postman](https://postman.com) or any API client to test endpoints:
- **Base URL**: `http://localhost:5000`
- **Health Check**: `GET /health`
- **Jobs**: `GET /jobs?CATEGORY=ELECTRICIAN`

## 📐 Architecture

Jobsy Backend follows the **Manager-Service-Controller (MSC)** pattern for optimal code organization:

```
🏗️ MSC Architecture
├── 🎮 Controllers/     # HTTP request handlers
│   ├── job.js         # Job-related endpoints
│   └── user.js        # User-related endpoints
├── 🔧 Services/       # Business logic layer
│   ├── job.js         # Job business operations
│   └── user.js        # User business operations
├── 🗄️ Managers/       # Data access layer
│   ├── job.js         # Job database operations
│   └── user.js        # User database operations
└── 📊 Models/         # Data schemas
    ├── job.js         # Job schema definition
    └── user.js        # User schema definition
```

### Layer Responsibilities

| Layer | Responsibility | Example |
|:------|:---------------|:--------|
| **Controllers** | Handle HTTP requests/responses | Route validation, status codes |
| **Services** | Implement business logic | Job matching, notification triggers |
| **Managers** | Database operations | CRUD operations, data persistence |
| **Models** | Define data structure | Schema validation, data types |

## 🔌 API Endpoints

### Jobs API (`/jobs`)

| Method | Endpoint | Description | Parameters | Response |
|:------:|:---------|:------------|:-----------|:---------|
| `GET` | `/jobs` | Fetch jobs by category | `?CATEGORY=MECHANIC` | Job listings array |
| `POST` | `/jobs` | Create new job posting | Job details in body | Created job object |
| `POST` | `/jobs/:job_id/apply` | Apply to specific job | Job ID in URL params | Application confirmation |
| `GET` | `/jobs/candidates` | Get available candidates | `?CATEGORY=LABOUR` | Candidate profiles array |

### User API (`/user`)

| Method | Endpoint | Description | Parameters | Response |
|:------:|:---------|:------------|:-----------|:---------|
| `POST` | `/user/register` | Register new user | User profile in body | User object with ID |

### Request/Response Examples

<details>
<summary>📝 Click to view detailed API examples</summary>

**Create Job Posting**
```bash
POST /jobs
Content-Type: application/json

{
  "title": "Experienced Electrician Required",
  "category": "ELECTRICIAN",
  "location": "Mumbai, Maharashtra",
  "salary": "₹25,000 - ₹35,000",
  "description": "Looking for skilled electrician with 2+ years experience",
  "contactEmail": "recruiter@company.com",
  "contactPhone": "+91-9876543210",
  "requirements": ["2+ years experience", "Valid electrical license"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Job posted successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Experienced Electrician Required",
    "category": "ELECTRICIAN",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Register Job Seeker**
```bash
POST /user/register
Content-Type: application/json

{
  "name": "Rajesh Kumar",
  "phone": "+91-9876543210",
  "category": "PLUMBER",
  "experience": "5 years",
  "location": "Delhi, India",
  "skills": ["Pipe fitting", "Leak repair", "Installation"]
}
```

**Apply for Job**
```bash
POST /jobs/64f8a1b2c3d4e5f6a7b8c9d0/apply
Content-Type: application/json

{
  "applicantId": "64f8b1c2d3e4f5a6b7c8d9e0",
  "message": "I am interested in this position"
}
```

</details>

### Supported Job Categories

| Category | Description | Icon |
|:---------|:------------|:----:|
| `ELECTRICIAN` | Electrical work and installations | ⚡ |
| `PLUMBER` | Plumbing and water systems | 🔧 |
| `LABOUR` | General construction work | 👷 |
| `DRIVER` | Transportation services | 🚗 |
| `MAID` | Domestic help services | 🏠 |
| `SECURITY_GUARD` | Security services | 🛡️ |
| `COOK` | Cooking and food preparation | 👨‍🍳 |
| `PEON` | Office assistance | 📋 |
| `MECHANIC` | Vehicle and machinery repair | 🔩 |

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test tests/user/managers/test_user.js

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Structure

```
tests/
├── user/
│   └── managers/
│       └── test_user.js    # User manager tests
├── job/
│   └── managers/
│       └── test_job.js     # Job manager tests (pending)
└── integration/
    └── api.test.js         # API integration tests (pending)
```

> **Note**: Unit test coverage is currently limited. Comprehensive testing is in the roadmap.

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Example |
|:---------|:------------|:---------|:--------|
| `MONGODB_URI` | MongoDB connection string | ✅ | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `TWILIO_ACCOUNT_SID` | Twilio account identifier | ✅ | `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| `TWILIO_AUTH_TOKEN` | Twilio authentication token | ✅ | `your_auth_token_here` |
| `TWILIO_PHONE_NUMBER` | Twilio phone number | ✅ | `+1234567890` |
| `EMAIL_SERVICE_USER` | Email service username | ✅ | `your_email@gmail.com` |
| `EMAIL_SERVICE_PASS` | Email service password | ✅ | `your_app_password` |
| `PORT` | Server port number | ❌ | `5000` (default) |
| `NODE_ENV` | Environment mode | ❌ | `development` |

### Configuration Files

- **`config.js`** - Main configuration file
- **`.env`** - Environment variables (create from `.env.example`)
- **`package.json`** - Project dependencies and scripts

## 📁 Project Structure

```
backend/
├── 📄 index.js                 # Application entry point
├── 📄 config.js                # Configuration management
├── 📁 controllers/             # Request handlers
│   ├── job.js                  # Job endpoints
│   └── user.js                 # User endpoints
├── 📁 services/                # Business logic
│   ├── job.js                  # Job services
│   └── user.js                 # User services
├── 📁 managers/                # Data access layer
│   ├── job.js                  # Job database operations
│   └── user.js                 # User database operations
├── 📁 models/                  # Database schemas
│   ├── job.js                  # Job model
│   └── user.js                 # User model
├── 📁 routes/                  # API routes
│   ├── job.js                  # Job routes
│   └── user.js                 # User routes
├── 📁 commons/                 # Shared utilities
│   ├── mail.js                 # Email service
│   ├── sms.js                  # SMS service
│   └── util.js                 # Common utilities
├── 📁 tests/                   # Test files
│   └── user/
│       └── managers/
│           └── test_user.js    # User tests
└── 📁 assets/                  # Demo assets
    ├── DemoGIF.gif
    ├── msgToApplicant.jpg
    └── recruiterMail.PNG
```

## 🚧 Development

### Workflow Process

#### For Job Seekers
1. **Registration** → Simple profile creation with minimal details
2. **Profile Update** → Add skills, experience, and preferences  
3. **Job Application** → One-click application process
4. **SMS Notification** → Instant confirmation via SMS

   ![SMS Notification](assets/msgToApplicant.jpg)

#### For Job Posters  
1. **Job Posting** → Quick job creation with detailed requirements
2. **Application Management** → View and shortlist candidates
3. **Direct Communication** → Contact qualified candidates directly
4. **Email Notification** → Instant alerts for new applications

   ![Email Notification](assets/recruiterMail.PNG)

### Development Scripts

```bash
# Start development server with hot reload
npm run dev

# Start production server
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Generate API documentation
npm run docs:generate
```

### Known Issues & Solutions

<details>
<summary>🔧 Current Limitations</summary>

#### 1. Job/Profile Visibility Management
- **Issue**: No mechanism to hide filled jobs or employed candidates
- **Impact**: Users see outdated listings
- **Solution**: Implement user dashboard with hide/show functionality
- **Status**: 🟡 Planned for Phase 2

#### 2. Profile Verification System
- **Issue**: Potential for fake profiles and spam
- **Impact**: Platform credibility concerns
- **Solution**: Aadhaar verification integration
- **Status**: 🟡 In research phase

#### 3. Session Management
- **Issue**: No user authentication system
- **Impact**: Limited personalization and security
- **Solution**: JWT-based authentication
- **Status**: 🟢 In development

</details>

### Future Enhancements

- 🔐 **Authentication System** - JWT-based user sessions
- 🌍 **Multi-language Support** - API localization
- 📍 **Location-based Filtering** - Geospatial queries
- ⭐ **Rating System** - User feedback and reviews
- 📞 **Voice Integration** - Phone-based registration
- 🤖 **AI Matching** - Intelligent job recommendations

---

<div align="center">

**Built with ❤️ for connecting blue-collar workers with opportunities**

[⬆ Back to Top](#-jobsy-backend-api)

</div>
