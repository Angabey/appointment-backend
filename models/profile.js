module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  return Profile;
};