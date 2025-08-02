# 🛒 FullStack E-commerce Project

> A complete backend system for an E-commerce platform with user management, product handling, cart features, and order processing.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🧾 Table of Contents

* [Demo](#-demo--screenshot)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Getting Started](#-getting-started)
* [Folder Structure](#-folder-structure)
* [Deployment](#-deployment)
* [API Reference](#-api-reference)
* [Contributing](#-contributing)
* [License](#-license)
* [Contact](#-contact)

---

## 📸 Demo / Screenshot

> Add screenshots or API demo here (e.g., Postman response examples)

---

## ✨ Features

* 🧑 User Registration & Login (with bcrypt password hashing)
* 👨‍💼 Admin-only product creation
* 🛍️ Product listing, update, and delete
* 🛒 Cart: Add, update, delete products
* 📦 Order placement (from cart or direct)
* 🔐 Secure MongoDB operations with Mongoose models
* 🌐 API endpoints for full CRUD operations

---

## 🛠 Tech Stack

**Backend:** Node.js, Express.js
**Database:** MongoDB, Mongoose
**Tools:** Postman, VS Code, Git

---

## 🚀 Getting Started

```bash
git clone https://github.com/ManjunathDharappanavar/FullStack-E-commerce-Project.git
cd FullStack-E-commerce-Project
npm install
node index.js
```

> Server runs on `http://localhost:4000`

Test endpoint: `GET /api/test` ➝ ✅ "server working fine"

---

## 📁 Folder Structure

```bash
├── controller/         # All route logic
│   ├── usercontroller.js
│   ├── productcontroller.js
│   ├── orderscontroller.js
│   └── cartcontroller.js
├── model/              # Mongoose schemas
│   ├── usermodel.js
│   ├── productmodel.js
│   ├── ordermodel.js
│   └── cartmodel.js
├── route/              # Express routers
│   ├── userroute.js
│   ├── productroute.js
│   ├── orderroute.js
│   └── cartroute.js
├── db/
│   └── connectdb.js    # DB connection utility
├── index.js            # Server entry point
└── README.md
```

---

## 🌐 Deployment

> Add deployment URL here (e.g., Render, Vercel, or Railway)

---

## 📡 API Reference

| Method | Endpoint                                      | Description                        |
| ------ | --------------------------------------------- | ---------------------------------- |
| POST   | `/api/register`                               | Register new user                  |
| POST   | `/api/login`                                  | Login user                         |
| GET    | `/api/getusers`                               | Get all users                      |
| GET    | `/api/getuserbyemail/:email`                  | Get user by email                  |
| PUT    | `/api/updateuser/:id`                         | Update user                        |
| DELETE | `/api/deleteuser/:id`                         | Delete user                        |
| POST   | `/api/createproduct/:userid`                  | Create product (admin only)        |
| GET    | `/api/product`                                | Get all products                   |
| GET    | `/api/getproductbyid/:id`                     | Get product by ID                  |
| PUT    | `/api/updateproduct/:id`                      | Update product                     |
| DELETE | `/api/deleteproduct/:id`                      | Delete product                     |
| POST   | `/api/addtocart/:userid/:productid/:quantity` | Add to cart                        |
| GET    | `/api/getcartofuser/:userid`                  | Get cart by user ID                |
| PATCH  | `/api/updatecart/:cartid/:quantity`           | Update cart quantity               |
| DELETE | `/api/deletecart/:cartid`                     | Delete cart item                   |
| POST   | `/api/createorder`                            | Create order (from cart or direct) |
| GET    | `/api/getorders`                              | Get all orders                     |
| GET    | `/api/getuserorders/:userid`                  | Get user order history             |
| PUT    | `/api/updateorder/:id`                        | Update order status                |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

**Manjunath Dharappanavar**
📫 Email: [manjunathgd85@gmail.com](mailto:manjunathgd85@gmail.com)

Feel free to reach out for feedback, ideas, or collaboration!
