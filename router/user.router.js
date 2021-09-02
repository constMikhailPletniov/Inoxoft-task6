
const exp = require('express');
const router = new exp.Router();

const { userControl } = require('../controls');
const { getByDynamicParam,
    isValidEmail,
    isUserByIdExist,
    isUserValidCreateData,
    isUserValidUpdateData,
    isCheckRole } = require('../middlewares/user.middlewares');
const { userRoleEnum } = require('../config');

router.use(
    '/:user_id',
    getByDynamicParam('user_id', 'params', '_id'), isUserByIdExist
);

router.get(
    '/:user_id',
    isCheckRole(userRoleEnum.USER), userControl.getUserById
);
router.delete(
    '/:user_id',
    isCheckRole(userRoleEnum.USER), userControl.deleteUserById
);
router.patch(
    '/:user_id',
    isUserValidUpdateData, isCheckRole(userRoleEnum.USER),
    userControl.updateUser
);

router.get('/', userControl.getAllUsers);
router.post(
    '/',
    isUserValidCreateData,
    getByDynamicParam('email', 'body'), isValidEmail, userControl.createUser
);


module.exports = router;

