import sjcl = require("sjcl");
const { Pool } = require("pg");
// db configuration
const pool = new Pool({
  host: "localhost",
  database: "postgres",
  user: "postgres",
  password: "database1",
  port: 5432,
});

// basic endpoint

const index = (request, response) => {
  response.status(200).json({ info: "Application started successfully" });
};

// application endpoints

// get all users
// const getUsers = (request, response) => {
//     console.log('Getting all users');
//     pool.query('SELECT * FROM users', (err, results) => {
//         error(err, response);
//         response.status(200).json({ info: results.rows });
//     });
// };

//creating database
pool
  .query(`CREATE DATABASE postgres;`)
  .then((res) => console.log("created database successfully", res))
  .catch((err) =>
    console.log("there was an error in creating database :", err)
  );

// creating pre-orders table
pool
  .query(
    `CREATE TABLE IF NOT EXISTS PRE_ORDERS (id SERIAL PRIMARY KEY, order_id INTEGER NOT NULL, first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  quantity VARCHAR(40) NOT NULL,
  city VARCHAR(40) NOT NULL,
  province VARCHAR(40) NOT NULL,
  country VARCHAR(40) NOT NULL)`
  )
  .then((res) => console.log(res))
  .catch((err) => err);

// save new order
const save = (request, response) => {
  console.log("Saving new order");

  //decrypting incoming data
  let password: string = "encryptData71&$";
  var decryptedText = sjcl.decrypt(password, request.body.name);
  console.log("decrypteddd", decryptedText);

  console.log("request", request.body);

  const name: unknown = decryptedText.split(" ");
  const first_name: string = name[0];
  const last_name: string = name[1];
  const { id, quantity, city, province, country } = request.body;

  pool
    .query(
      "INSERT INTO pre_orders (order_id, first_name, last_name, quantity, city, province, country) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [id, first_name, last_name, quantity, city, province, country]
    )
    .then((res) => response.send(res.rows[0]));
};

// helper method
function error(err, response) {
  if (err) {
    // console.log(err);
    response.status(503).json({ info: "Some internal server error occurred" });
  }
}

module.exports = {
  index,
  save,
};
