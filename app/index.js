const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes");
const config = require("config");

const app = express();

class App {
  constructor() {
    this.setupErrorHandlers();
    this.setupMongoDB();
    this.setupRoutesAndMiddlewares();
    this.setupExpressServer();
  }

  setupErrorHandlers() {
    //
  }

  setupMongoDB() {
    mongoose.connect(config.get("databaseUrl"), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    mongoose.connection.on("connected", () => {
      console.log("connected to db");
    });
    mongoose.connection.on("error", (error) => {
      console.log(error);
    });
    mongoose.connection.on("disconnected", () => {
      console.log("db disconnected");
    });
  }

  setupRoutesAndMiddlewares() {
    // middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    // routes
    app.use("/api", api);
    // error middleware
  }

  setupExpressServer() {
    const port = process.env.myEnve || 4000;
    app.listen(port, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`listen to port ${port}`);
      }
    });
  }
}

module.exports = App;
