const exp = require('express')
const router = new exp.Router();

const { pestMiddleWare } = require('../middlewares');
const { pestControl } = require('../controls');

router.use(
    '/:pest_id', pestMiddleWare.
        getByDynamicParam('pest_id', 'params', '_id'),
    pestMiddleWare.isPestExistId
);

router.get('/', pestControl.getAllPests);
router.post(
    '/', pestMiddleWare.isValidPestData,
    pestMiddleWare.isValidName, pestControl.createPest
);

router.get(
    '/:pest_id',
    pestControl.getPestsById
);
router.delete(
    '/:pest_id',
    pestControl.deletePestById
);
router.patch(
    '/:pest_id',
    pestMiddleWare.isValidUpdatePestData,
    pestControl.updatePest
);

module.exports = router;
