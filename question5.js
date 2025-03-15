const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
});