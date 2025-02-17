# Community-Driven Disaster Preparedness System

## Project Overview
The **Community-Driven Disaster Preparedness System** is designed to help communities prepare for and respond to natural disasters such as earthquakes, floods, and wildfires. The system enables users to share preparedness guides, track emergency resources, and coordinate response plans collaboratively.

## Technologies Used

### Frontend (Angular 19):
- **Angular Material** - UI Components
- **NgRx** - State Management
- **RxJS** - Real-time updates
- **Angular Guards & Interceptors** - Security


---

## Features & Workflows
### 1. User Authentication
- Sign Up, Login, Logout
- Role-based access control

### 2. Community Dashboard
- View real-time alerts
- Access disaster preparedness resources
- Locate nearby shelters
- Access guideline for particular disaster

### 3. Disaster Preparedness Guide Management
- Create, edit, delete, and verify guides (for authorities & experts)

### 4. Real-time Emergency Alerts
- Local authorities can send location-based alerts
- WebSockets for instant updates

### 5. Resource & Shelter Tracking
- Volunteers & NGOs can update real-time availability of food, medical aid, and shelter capacity

### 6. Community Collaboration
- All users can access community Chat using WebSocket in RxJS
- Upload posts like video, image, pdfs etc.

---

## Roles and Responsibility

- Authentication Module -> **Dhrupal Mavani, Dhruvi Shah**
- Alert Module -> **Akshar Parekh, Khushi Shah**
- Dashboard Module including SideBar and Navbar -> **Dhrupal Mavani, Dhruvi Shah**
- GuideLine module add, edit with Requests -> **Akshar Parekh, Harsh Godkar**
- Resource/Shelter Tracking with filtering feature -> **Khushi Shah, Rucha Jogsan**
- Community Chat -> **Harsh Godkar, Rucha Jogsan**

## Installation & Setup
### Prerequisites:
- Rust & npm (for frontend)

### Clone Repository:
```sh
git clone https://github.com/Akshar1199/Disaster_Preparedness.git
cd Disaster_preparedness
```


### Frontend Setup:
```sh
npm install
ng serve
```

## Contribution Guidelines
- Fork the repository and create a feature branch.
- Follow Rust Analyzer & TypeScript best practices.
- Ensure proper documentation and testing.
- Submit a pull request with detailed changes.

---

## License
This project is licensed under the MIT License.

---

## Contact
For queries, open an issue on GitHub or contact the maintainers.

