/* eslint-disable camelcase */
const { Pest } = require('../database');
const { statusEnum } = require('../config');

module.exports = {

    createPest: async (req, res, next) => {
        try {
            await Pest.create(req.body);

            res.status(statusEnum.CREATE).
                json({ message: 'The pest is add to base' });

        } catch (err) {
            next(err);
        }
    },
    deletePestById: async (req, res, next) => {
        try {
            const { pest_id } = req.params;

            const pestDelete = await Pest.findByIdAndDelete(pest_id);

            res.status(statusEnum.OK).json(pestDelete);
        } catch (err) {
            next(err);
        }
    },
    getAllPests: async (req, res) => {
        try {
            const Pests = await Pest.find({}).select('-__v');
            res.status(statusEnum.OK).json(Pests);

        } catch (err) {
            res.status(statusEnum.BAD_REQUEST).json(err.message);
        }
    },
    getPestsById: async (req, res, next) => {
        try {
            const { pest_id } = req.params;

            const findPest = await Pest.findById(pest_id);

            res.status(statusEnum.OK).json(findPest);

        } catch (err) {
            next(err);
        }
    },
    updatePest: async (req, res, next) => {
        try {
            const data = req.body;
            const { pest_id } = req.params;

            await Pest.findByIdAndUpdate(pest_id, data);

            res.status(statusEnum.OK).json({ message: 'The data was update' });

        } catch (err) {
            next(err);
        }
    }

}
