const leapYears = function() {

    let year = arguments[0];

    if (year % 4 == 0) {

        if (year >= 100 && year % 100 == 0) {
            if (year % 400 == 0) return true;
            else return false;
        }

        return true;
    } else return false;

}

module.exports = leapYears
