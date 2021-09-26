const express = require('express');
const userController = require('./controller/userController');
const carsController = require('./controller/carsController');
const validate = require('./middleware/validate');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});
app.post('/', () => {});

app.get('/users', userController.getUsers);

app.post('/users', validate.validateUser, userController.createUser); //{}

app.get('/users/:userId', userController.getUserById);
app.patch('/users/0', userController.updateUser); //{}
app.delete('/users/10', userController.deleteUser);

app.get('/cars', carsController.getCars);
app.post('/cars', carsController.createCar);
app.delete('/cars/:carId', carsController.deleteCar);
app.patch('/cars/:carId', carsController.updateCar);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
