module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  User.associate = (models) => {
    User.hasOne(models.Profile, {
      foreignKey: 'user_id',
      as: 'profile',
    });
    User.hasMany(models.Appointment, {
      foreignKey: 'user_id',
      as: 'appointments',
    });
  };

  return User;
};