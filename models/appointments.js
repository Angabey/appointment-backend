module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    appointment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    appointment_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    Appointment.hasOne(models.Payment, {
      foreignKey: 'appointment_id',
      as: 'payment',
    });
  };

  return Appointment;
};