const microservice = require('./microservice');

exports.newSponsor = async (req, res) => {
    try {
        const { 
            id_sponsor: sponsor, 
            id_sponsored: sponsored, 
            bonus: bonus
        } = req.body;

        const account = await microservice.new(sponsor, sponsored, bonus);
        
        res.status(201).json(account);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getSponsorByAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const sponsor = await microservice.get(id);
        
        if (sponsor.length === 0) {
          return res.status(404).json({ error: 'Sponsor not found' });
        }

        res.status(200).json(sponsor);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.updateSponsor = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            bonus: bonus,
            progress: progress
        } = req.body;

        const sponsor = await microservice.update(id, { bonus, progress });

        if (sponsor.length === 0) {
            return res.status(404).json({ error: 'Sponsor not found' });
        }

        res.status(200).json(sponsor);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.deleteSponsor = async (req, res) => {
    try {
        const { id } = req.params;

        const sponsor = await microservice.delete(id);

        if (sponsor.length === 0) {
            return res.status(404).json({ error: 'Sponsor not found' });
        }

        res.status(204).end();
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

