#Wanderlust
Wanderlust is a full-stack web application that enables users to list, discover, and book homestays across various destinations. Inspired by Airbnb, it offers a seamless experience for both hosts and travelers, featuring interactive maps, category filters, user reviews, and secure authentication mechanisms.

🔧 Tech Stack
Frontend
HTML5, CSS3, JavaScript

Bootstrap: For responsive and modern UI design
GitHub

Backend
Node.js

Express.js

MongoDB Atlas: Cloud-based NoSQL database

Mongoose: ODM for MongoDB
Towards Dev
Medium

Additional Packages & Services
Mapbox: Interactive maps and geolocation services

Cloudinary: Image upload and storage

Passport.js: Authentication middleware

Joi: Data validation

Multer: Handling multipart/form-data (for image uploads)

dotenv: Environment variable management
GitHub
GitHub
+5
GitHub
+5
GitHub
+5
GitHub
+1
GitHub
+1

✅ Features
User Authentication & Authorization: Secure sign-up, login, and session management using Passport.js.

Property Listings: Users can create, edit, and delete homestay listings with details like title, description, price, and images.

Image Uploads: Seamless image uploading and storage via Cloudinary.

Interactive Maps: Display property locations using Mapbox with geocoding capabilities.

Category Filters: Filter listings based on categories like beach, mountain, city, etc.

Reviews & Ratings: Users can leave feedback and rate properties they've stayed at.

Responsive Design: Mobile-first design ensuring compatibility across devices.
GitHub
+1
GitHub
+1
FreeCodeCamp

🏁 Getting Started
Prerequisites
Node.js and npm installed

MongoDB Atlas account

Cloudinary account

Mapbox account
GitHub
+2
Towards Dev
+2
GitHub
+2
GitHub

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
Install dependencies:

bash
Copy
Edit
npm install
Configure environment variables:

Create a .env file in the root directory and add the following:

env
Copy
Edit
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
Start the application:

bash
Copy
Edit
npm start
Access the application:
Open your browser and navigate to http://localhost:3000

📁 Project Structure
plaintext
Copy
Edit
├── app.js                 # Main application file
├── models/                # Mongoose schemas (User, Listing, Review)
├── routes/                # Express route handlers
├── controllers/           # Business logic for routes
├── views/                 # EJS templates
├── public/                # Static assets (CSS, JS, images)
├── middleware/            # Custom middleware functions
├── utils/                 # Utility functions
├── config/                # Configuration files (e.g., Cloudinary)
├── .env                   # Environment variables
└── package.json           # Project metadata and dependencies

🌐 Deployment
For deploying Wanderlust to a production environment:

Choose a hosting platform: Platforms like Render, Heroku, or Vercel are suitable.

Set environment variables: Configure the necessary environment variables on your hosting platform.

Database: Ensure your MongoDB Atlas cluster is accessible from your hosting platform.

Domain: Set up a custom domain if desired.

🛡️ Security Considerations
Environment Variables: Never commit your .env file to version control. Use .gitignore to exclude it.

Input Validation: All user inputs are validated using Joi to prevent malicious data.

Authentication: Sessions are managed securely, and sensitive routes are protected to ensure only authorized access.

🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📬 Contact
For any inquiries or feedback:

Email: k.pranavraj123@gmail.com

LinkedIn: Pranav Raj Katikala
GitHub

