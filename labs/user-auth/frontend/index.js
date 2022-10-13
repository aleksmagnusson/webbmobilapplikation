const axios = require("axios");

let token;

async function login(email, password) {
  const response = await axios.post("http://localhost:8080/auth", {
    email: email,
    password: password,
  });

  token = response.data.token;
}

async function getUserData(token) {
  const response = await axios.get("http://localhost:8080/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
}

async function doEverything() {
  await login("alice@example.com", "alice123");
  await getUserData(token);
}

doEverything();

/**
 * Inloggningar:
 * bob@example.com:bob123
 * alice@example.com:alice123
 * eve@example.com:eve123
 */
