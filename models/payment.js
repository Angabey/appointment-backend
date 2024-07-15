module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    amount: DataTypes.DECIMAL(10, 2),
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  Payment.associate = (models) => {
    Payment.belongsTo(models.Appointment, {
      foreignKey: 'appointment_id',
      as: 'appointment',
    });
  };

  return Payment;
};