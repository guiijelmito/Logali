const fs = require('fs');
const User = require('../models/User');

const user = new User(1, 'username', 'email@example.com', 'password');

const data = {
  users: [user]
};

fs.writeFile('data.json', JSON.stringify(data, null, 2), (error) => {
  if (error) throw error;
  console.log('Dados salvos com sucesso!');
});
