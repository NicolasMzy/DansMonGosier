const microservice = require('./microservice');

exports.createAccount = async (req, res) => {
    try {
        const { email, phone_number, password, user_type } = req.body;
        await microservice.create(email, phone_number, password, user_type);

        res.status(201).json('Account successfully created !');
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await microservice.getAll();
        res.status(200).json(accounts);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const account = await microservice.get(id);
        
        if (account.length === 0) {
          return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(account);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

//   async updateUser(req, res) {
//     try {
//       const { id } = req.params;
//       const { name, email } = req.body;

//       // Call the appropriate microservice to update a user
//       // Example: const updatedUser = await UserMicroservice.updateUser(id, { name, email });

//       const user = await User.findByPk(id);
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       user.name = name;
//       user.email = email;
//       await user.save();

//       res.status(200).json(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server Error' });
//     }
//   }

//   async deleteUser(req, res) {
//     try {
//       const { id } = req.params;

//       // Call the appropriate microservice to delete a user
//       // Example: await UserMicroservice.deleteUser(id);

//       const user = await User.findByPk(id);
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       await user.destroy();

//       res.status(204).end();
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server Error' });
//     }
//   }
// };
