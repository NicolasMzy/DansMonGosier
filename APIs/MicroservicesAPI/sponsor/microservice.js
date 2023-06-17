const sequelize = require('./config/db');
const models = require('./models/index');

exports.new = async (sponsor, sponsored, bonus) => {
    await models.Sponsor.create(
        { 
            id_sponsor: sponsor,
            id_sponsored: sponsored,
            bonus: bonus,
            progress: "pending"
        }
    );
};

exports.get = async (accountId) => {
    const sponsor = await models.Sponsor.findAll({
        where: {
            id_sponsored: accountId
        }
    });
    return sponsor;
};

exports.update = async (accountId, { bonus, progress  }) => {
    const sponsor = models.Sponsor.update(
        {
            bonus: bonus,
            progress: progress,
        },
        {
            where: {
                id_sponsored: accountId
            }
        }
    );
    return sponsor;
};

exports.delete = async (accountId) => {
    const sponsor = await models.Sponsor.destroy({
        where: {
            id_sponsored: accountId
        }
    })
    return sponsor;
};
