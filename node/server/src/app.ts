// import express, { Application, Request, Response } from "express";
import express = require("express");
import { getPostgresClient } from "./postgres";
import sjcl = require("sjcl");

const cors = require("cors");

let insertOrder = (db, values: any) => {
  return db
    .query(
      `INSERT INTO orders (id, first_name, last_name, quantity, city, province, country)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      values
    )
    .then((res) => res.rows[0])
    .catch((err) => console.log("BREAKS HERE", err));
};

getPostgresClient()
  .then((pgClient) => {
    console.log("connected to db!");
    const app = express();
    app.use(
      cors({
        origin: "http://localhost:3000",
      })
    );

    app.use(express.json());
    app.use(express.urlencoded());

    app.get("/", (req, res) => {
      res.send("HELLO");
    });

    // app.get("/order/:id", async (req, res) => {
    //   console.log("REQ", req.params);
    //   const id = req.params.id;
    //   const data = await pgClient.query(
    //     `SELECT * FROM public.photographer WHERE id = ${id};`
    //   );
    //   res.send(data.rows);
    // });

    app.post("/order/:id", async (req, res) => {
      //decrypting incoming data
      let password: string = "encryptData71&$";
      var decryptedText = sjcl.decrypt(password, req.body.name);
      console.log("decrypteddd", decryptedText);

      console.log("REQ", req.body);

      const name: unknown = decryptedText.split(" ");
      const first_name: string = name[0];
      const last_name: string = name[1];
      const { id, city, province, country } = req.body;
      const values = [id, first_name, last_name, city, province, country];
      await insertOrder(pgClient, values).then(() =>
        console.log("data insterted!")
      );

      res.send(id);
    });

    app.listen(5002, () => console.log("Server running"));
  })
  .catch((err) => {
    console.error("Error connecting to postgres: ", err);
  });
