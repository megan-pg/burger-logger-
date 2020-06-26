let orm = require('../config/orm.js');

const burger = {
    all: function (abc) {
        orm.all('burgers', function (res) {
            abc(res);
        });
    },
    create: function (name, abc) {
        orm.create('burgers', [
            'burger_name',
            'devoured'
        ],
            [
                name, false
            ], abc)
    },
    update: function (id, abc) {
        let condition = 'id=' + id;
        orm.update('burgers', {
            devoured: true
        }, condition, abc);
    }
};

module.exports = burger;