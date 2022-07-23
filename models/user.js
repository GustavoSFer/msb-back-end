const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    message: DataTypes.STRING,
    file: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  return User;
};

module.exports = User;