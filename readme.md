# Show Me: A True End-to-End Encrypted Chat App

## Introduction

**Show Me** is a secure chat application that provides true end-to-end encryption using a **Secret Key** for each chatroom. The key is provided by the user and stored only in the browser's local storage, ensuring that messages can only be decrypted on the client side with the key supplied by the client. As a result, messages remain safe and encrypted on the server database.

## Features and How It Works

- **Sign Up:** Create an account with a username and password.
- **Add Friends:** Add friends using their usernames.
- **Start Chatting:** Select your friend and begin chatting by entering the **Secret Key** shared between you and your friend.
- **Security:** Each time you log in on a new browser, you'll need to enter the **Secret Key** again, as it is never saved on the server.
- **Encryption:** Messages are encrypted using the **Secret Key** and stored securely on the server. They can only be decrypted by the recipient with the same key.

## How It Works

You and your friend share a **Secret Key** that is known only to both of you. To chat, both parties must use the same **Secret Key**. After entering the **Secret Key**, it is stored in your browser's local storage and never on the server. Messages are encrypted using this key before being stored on the server. The recipient's browser decrypts the message using the same **Secret Key** they provided. This ensures that the **Secret Key** remains in your local storage, keeping your messages truly encrypted and safe.

## Installation

Make sure you have Node.js and MongoDB installed on your device.

### Step 1: Clone the Project

Download both the **Front End** and **Back End** projects named **Show_Me_API** and **Show_Me_front**.

### Step 2: Install Dependencies

Run the following command in both the **Show_Me_API** and **Show_Me_front** directories:

```
npm install
```

### Step 3: Configure MongoDB

If your MongoDB is connected to port **27017**, ensure the following changes are made in the **Show_Me_API/index.js** file:

```javascript
...
await mongoose.connect('mongodb://127.0.0.1:27017/showme')
...
```

Step 4:
You are ready to run.
Run this command in both **Show_Me_API** and **Show_Me_front**

```
npm run dev
```
