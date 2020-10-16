module.exports = {
  sever_port: 5000,
  db_url:
    "mongodb+srv://ejun:j6432636@profile.vrk9e.mongodb.net/govlgovl?authSource=admin&replicaSet=atlas-ez24ee-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true",
  db_schemas: [
    {
      file: "./user_schema",
      collection: "users",
      schemaName: "UserSchema",
      modelName: "UserModel",
    },
  ],
  route_info: [],
};
