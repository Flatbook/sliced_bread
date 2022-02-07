import { Client } from "pg";

/** Get a new connection to the postgres database */
export async function getPostgresClient(): Promise<Client> {
  const client = new Client({
    host: "localhost",
    database: "postgres",
    user: "postgres",
    password: "database1",
    port: 5432,
  });

  await client.connect();

  await client
    .query(
      `CREATE TABLE ORDERS(id SERIAL PRIMARY KEY, first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL,
quantity INTEGER NOT NULL,
city VARCHAR(40) NOT NULL,
province VARCHAR(40) NOT NULL,
country VARCHAR(40) NOT NULL)`
    )
    .then((res) => console.log(res))
    .catch((err) => err);

  // firstName: string;
  // lastName: string;
  // quantity: number;
  // city: string;
  // province: string;
  // country: string;

  // await client.query(`DROP DATABASE IF EXISTS postgres;`);
  // await client.query(`CREATE DATABASE postgres;`);
  await client.end();
  return client;
}
