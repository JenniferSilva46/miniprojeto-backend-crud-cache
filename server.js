const express = require('express');
const server = express();
server.use(express.json());
const port = 3000;

const db = require('./src/controllers/crud_user_controller');
const cache = require('./src/controllers/cache_controller');

server.get('/users', db.getUsers);
server.post('/users', db.createUser);
server.put('/users', db.updateUser);
server.delete('/users/:id', db.deleteUser);

server.post('/users/:id', cache.setText);
server.get('/users/:id', cache.getText);
server.listen(port);