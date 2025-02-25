import { sqliteConnction } from "..";
import { tableUsers } from "./tableUsers";

export async function runMigrations() {
    const schemas = [tableUsers].join("");

    sqliteConnction()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}