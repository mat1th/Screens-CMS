var moment = require('moment');

var isValidDate = function(date) { //validate the user input date and than confert it
    if (moment(date, 'DD-MM-YYYY').isValid()) {
        //dutch format
        return moment(date, 'DD-MM-YYYY').format('YYYY-M-D');
    } else if (moment(date, 'DD-MM-YY').isValid()) {
        //span year
        return moment(date, 'DD-MM-YY').format('DD-MM-YY');
    } else if (moment(date, 'YYYY-MM-DD').isValid()) {
        //browser fromat
        return moment(date, 'YYYY-MM-DD').format('YYYY-M-D');
    } else if (moment(date, 'MM-DD-YYYY').isValid()) {
        //english fromat
        return moment(date, 'MM-DD-YYYY').format('YYYY-M-D');
    } else {
        return false;
    }
};

module.exports = isValidDate;
