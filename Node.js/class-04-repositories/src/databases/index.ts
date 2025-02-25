import * as sqlite from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";

export async function sqliteConnction() {
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "database.db"), //".\database.db"
        driver: sqlite3.Database,
    });

    return database as sqlite.Database;
}