# Reqres User Management App --created By ABHINAV SHARMA

## 📌 Overview
This is a **React-based user management app** that integrates with the [Reqres API](https://reqres.in/) to handle authentication, user listing, editing, and deletion.

## 🚀 Features
- **User Login** (with token authentication)
- **Paginated User Listing**
- **Edit User Details**
- **Delete Users**
- **Protected Routes** (users cannot access pages without logging in)
- **Mobile-Friendly UI**

## 🛠️ Technologies Used
- **React.js** (Frontend framework)
- **Axios** (API calls)
- **React Router** (Navigation)
- **Tailwind CSS / Custom CSS** (Styling)

## 📥 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/reqres-user-management.git
cd reqres-user-management
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```
The app will open at **http://localhost:3000**.

## 🔑 Authentication Details
Use the following credentials to log in:
```
Email: eve.holt@reqres.in
Password: cityslicka
```

## 🌎 Live Demo (Optional)
[Deploy on Vercel/Netlify] and add the live link here.

## 📜 API Endpoints Used
1. **Login:** `POST https://reqres.in/api/login`
2. **Get Users:** `GET https://reqres.in/api/users?page=1`
3. **Update User:** `PUT https://reqres.in/api/users/{id}`
4. **Delete User:** `DELETE https://reqres.in/api/users/{id}`

## 💡 Assumptions & Considerations
- **Token is stored in local storage** for authentication persistence.
- **Users can log out** by clearing the token.
- **No real database changes occur** since Reqres is a mock API.

## 🤝 Contributing
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to GitHub (`git push origin feature-name`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License.

