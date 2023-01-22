const ormconfig = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'VerySecuredPasswordYouWillNeverHack',
  database: 'postgres',
  logging: false,
};
export default ormconfig;
