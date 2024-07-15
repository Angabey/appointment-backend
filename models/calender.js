module.exports = (sequelize, DataTypes) => {
  const Calendar = sequelize.define('Calendar', {
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    is_available: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  });

  return Calendar;
};