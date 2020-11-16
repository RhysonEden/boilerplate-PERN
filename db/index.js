const { Client } = require("pg");
const bcrypt = require("bcrypt");
const DB_NAME = "change";

const client = new Client(
  process.env.DATABASE_URL ||
    `postgressql://postgres:james@localhost:5432/${DB_NAME}`
);

async function createUser({ username, password, email }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password, email)
      VALUES ($1, $2, $3);
    `,
      [username, password, email]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    console.log("Firing User by Username");
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [userName]
    );
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  console.log("running");
  if (!username || !password) {
    return;
  }

  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const matchingPassword = await bcrypt.compareSync(password, user.password);
    if (!matchingPassword) return;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT username, email
    FROM users;
  `
  );

  return rows;
}

async function getUsersByID(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE id=$1;
    `,
      [id]
    );
    console.log("user", user);
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  getAllUsers,
  createUser,
  getUsersByID,
  getUserByUsername,
  getUser,
};
