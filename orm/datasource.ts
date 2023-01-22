import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
// import { vod } from './entities/vod.entity';
import ormconfig from './ormconfig';

class Database {
  private static AppDataSource: DataSource;

  private constructor() {
    try {
      Database.createConnection();
    } catch (error) {
      console.log(error);
    }
  }

  public static createConnection() {
    if (!Database.AppDataSource) {
      Database.AppDataSource = new DataSource(<DataSourceOptions>ormconfig);
      Database.AppDataSource.initialize()
        .then(() => {
          console.log('Driver Connected');
          // here you can start to work with your database
        })
        .catch((error) => console.log(error));
    }
    return Database.AppDataSource;
  }
}
// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap

export default Database;
