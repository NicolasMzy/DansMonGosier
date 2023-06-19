const microservice = require('./microservice');


exports.createAccount = async (req, res) => {
    try {
        const { 
            email: email, 
            phone: phoneNb, 
            pwd: password,
            type: userType 
        } = req.body;

        const account = await microservice.create(email, phoneNb, password, userType);
        
        res.status(201).json(account);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.login = async (req, res) => {
    
    try {
        const { email, password } = req.body;

        const token = await microservice.login(email, password);
        
        res.status(201).json(token);
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

exports.updateAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            mail: email,
            phone: phoneNb,
            pwd: password
        } = req.body;

        const account = await microservice.update(id, { email, phoneNb, password});

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

exports.deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;

        const account = await microservice.delete(id);

        if (account.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(204).end();
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

