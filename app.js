const express = require('express');
const userController = require('./controller/userController');
const carsController = require('./controller/carsController');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});
app.post('/', () => {});

app.get('/users', userController.getUsers);
app.post('/users', userController.createUser); //{}

app.get('/users/:userId', userController.getUserById);
app.patch('/users/0', userController.updateUser); //{}
app.delete('/users/10', userController.deleteUser);

app.get('/cars', carsController.getCars);
app.post('/cars', carsController.createCar);
app.delete('/cars/:carId', carsController.deleteCar);
app.patch('/cars/:carId', carsController.updateCar);

module.exports = app;
