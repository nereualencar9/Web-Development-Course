import express from "express";
import { router } from "./routes";
import { appErrors } from "./errors/app-errors";
import { sqliteConnction } from "./databases";
import { runMigrations } from "./databases/migrations";

const app = express();

const PORT = process.env.PORT || 3333;

// middleware
app.use(express.json());
app.use(router);

app.use(appErrors);

app.listen(3000, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

sqliteConnction()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error(error));

  runMigrations()
  .then(() => console.log("Migrations are done..."));