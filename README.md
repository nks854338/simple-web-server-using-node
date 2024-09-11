# 👟 SneakerSellingStore - Simple Web Server with Node.js

🚀 **Live Demo**: [Demo Link](https://simple-web-server-using-node.vercel.app/)

---

## Project Overview 🛍️
The **SneakerSellingStore** project is a simple Node.js web server that serves different HTML pages based on user navigation. The server routes include Home, About, and Contact pages, each styled with CSS. Users can click on buttons to navigate through different sections of the store.

## Features ✨
- **🖥️ Node.js HTTP Module**: Basic server routing using Node.js.
- **📄 Static HTML Pages**: Routes serve pre-built HTML pages.
- **🎨 CSS Styling**: Added CSS for enhanced visuals.
- **🚫 404 Error Handling**: Custom page for invalid routes.
- **🖱️ Interactive Buttons**: Navigate between pages using clickable buttons.

## Tech Stack 🛠️
- **Node.js**: Backend framework for creating the server.
- **HTML**: To structure the different pages.
- **CSS**: For adding styles to the pages.
- **Icons**: Implemented icons using FontAwesome or other libraries.

## Prerequisites 📋
To run this project, make sure you have **Node.js** installed. You can download it from [Node.js Official Website](https://nodejs.org/).

---

## Installation ⚙️

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/simple-web-server-using-node.git
    ```

2. Navigate to the project folder:

    ```bash
    cd simple-web-server-using-node
    ```

3. Install any required dependencies (if applicable):

    ```bash
    npm install
    ```

---

## File Structure 📁

```plaintext
.
├── server.js         # Main server file
├── public
│   ├── home.html     # Home page
│   ├── Product.html    # Product page
│   ├── ShoppingCart.html  # ShoppingCart page
│   ├── Payment.html  # Payment page
│   └── 404.html      # Custom 404 error page
└── styles
    └── style.css     # Styling for the web pages
