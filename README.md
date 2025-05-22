# 🧭 Wanderlust

**Wanderlust** is a full-stack web application that enables users to list, discover, and book homestays across various destinations. Inspired by Airbnb, it offers a seamless experience for both hosts and travelers, featuring interactive maps, category filters, user reviews, and secure authentication mechanisms.

---

## 🔧 Tech Stack

### Frontend
- **HTML5**, **CSS3**, **JavaScript**
- **Bootstrap**: For responsive and modern UI design

### Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas**: Cloud-based NoSQL database
- **Mongoose**: ODM for MongoDB

### Additional Packages & Services
- **Mapbox**: Interactive maps and geolocation services
- **Cloudinary**: Image upload and storage
- **Passport.js**: Authentication middleware
- **Joi**: Data validation
- **Multer**: Handling multipart/form-data (for image uploads)
- **dotenv**: Environment variable management

---

## ✅ Features

- **User Authentication & Authorization**: Secure sign-up, login, and session management using Passport.js.
- **Property Listings**: Users can create, edit, and delete homestay listings with details like title, description, price, and images.
- **Image Uploads**: Seamless image uploading and storage via Cloudinary.
- **Interactive Maps**: Display property locations using Mapbox with geocoding capabilities.
- **Category Filters**: Filter listings based on categories like beach, mountain, city, etc.
- **Reviews & Ratings**: Users can leave feedback and rate properties they've stayed at.
- **Responsive Design**: Mobile-first design ensuring compatibility across devices.

---

## 🏁 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust

2. **Install Dependencies**:
   ```bash
   npm install

3. **Configure environmental variables**:
   Create a .env file in the root directory and add the following:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   MAPBOX_TOKEN=your_mapbox_token
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret

4. **Start application**:
   ```bash
   npm start

5. **Access the application**:
   Open your browser and navigate to http://localhost:8080/listings

## 📁Project Structure

## 🌐 Deployment

For deploying Wanderlust to a production environment:
1. **Choose a hosting platform**: Platforms like Render, Heroku, or Vercel are suitable.
2. **Set environment variables**: Configure the necessary environment variables on your hosting platform.
3.**Database**: Ensure your MongoDB Atlas cluster is accessible from your hosting platform.
4.**Domain**: Set up a custom domain if desired.

## 🛡️ Security Considerations

- **Environment Variables**: Never commit your .env file to version control. Use .gitignore to exclude it.
- **Input Validation**: All user inputs are validated using Joi to prevent malicious data.
- **Authentication**: Sessions are managed securely, and sensitive routes are protected to ensure only authorized access.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 📬 Contact

For any inquiries or feedback:
Email: k.pranavraj123@gmail.com
LinkedIn: Pranav Raj Katikala
