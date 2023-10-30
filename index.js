const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AngularJSdb');

const UserSchema = new mongoose.Schema({
    name: String,
  });
  
const User = mongoose.model('User', UserSchema);

// Rota POST /submit-form
app.post('/submit-form', async (req, res) => {
    try {
      // Cria uma nova instância do modelo User com o nome enviado no corpo da requisição
      const user = new User({
        name: req.body.name
      });
  
      // Salva o novo usuário no banco de dados
      const savedUser = await user.save();
  
      // Se bem-sucedido, envia uma resposta com o usuário salvo
      res.status(201).json(savedUser);
      console.log("Usuário salvo")
    } catch (error) {
      // Em caso de erro, envia uma resposta com status 500 e a mensagem de erro
      res.status(500).json({ message: error.message });
    }
  });

app.listen(3000, () => console.log('Server listening on port 3000'));
