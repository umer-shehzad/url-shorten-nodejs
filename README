# URL Shortener Project

This is a simple URL shortener project built with **Node.js** and **MongoDB**. The application allows you to convert original URLs into shortened versions and provides analytics on the number of clicks for each shortened URL.

---

### Features:
- **Shorten URLs**: Convert long URLs into shortened versions.
- **Redirect to Original URL**: Access the original URL by using the shortened version.
- **URL Analytics**: Get analytics on the total number of clicks and the time of access for each shortened URL.

---

### Prerequisites:

1. **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org).
2. **MongoDB**: Set up MongoDB and create a database named `short-url` with a collection named `urls` to store the data.

---

### Setup Instructions:

1. **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2. **Install dependencies**:
    Run the following command to install all required dependencies:
    ```bash
    npm install
    ```
    This will set up the `node_modules` folder for you.

3. **Setup MongoDB**:
    - install MongoDB
    - Create a database named `short-url` in your MongoDB instance.
    - Create a collection named `urls` to store the URL data.

---

### API Endpoints:

You can test the following endpoints using **Postman**:

1. **Create a Short URL**  
    - **URL**: `http://localhost:8001/url`  
    - **Method**: `POST`  
    - **Description**: This endpoint will generate a shortened URL for a provided original URL.

2. **Redirect to Original URL**  
    - **URL**: `http://localhost:8001/<replace-with-shortURL>`  
    - **Method**: `GET`  
    - **Description**: This endpoint will redirect the user to the original URL based on the shortened URL.

3. **Get URL Analytics**  
    - **URL**: `http://localhost:8001/url/analytics/<replace-with-shortURL>`  
    - **Method**: `POST`  
    - **Description**: This endpoint will provide analytics for a shortened URL, including the total number of clicks and the last accessed time.

---

### Example Workflow:

1. **Create Short URL**:
   - Send a `POST` request to `http://localhost:8001/url` with the original URL in the request body.
   
2. **Redirect to Original URL**:
   - After getting a shortened URL, send a `GET` request to `http://localhost:8001/<shortened-url>` to be redirected to the original URL.
   
3. **Get Analytics**:
   - Send a `POST` request to `http://localhost:8001/url/analytics/<shortened-url>` to get analytics (click count and access time) for the shortened URL.

---

### Technologies Used:
- **Node.js**: Server-side JavaScript runtime environment.
- **MongoDB**: NoSQL database for storing URL data and analytics.
- **Postman**: Used for testing the API endpoints.

---

### Dependencies in package.json:
- You have following dependencies in your package.json file to avoid errors.

  ```bash
    "dependencies": {
    "dotenv": "^16.4.7",
    "express": "^4.21.1",
    "mongoose": "^8.8.3",
    "nanoid": "^3.1.25",
    "nodemon": "^3.1.7"
  }
  ```
