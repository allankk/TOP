let findTheOldest = function() {
    const people = arguments[0];

    const fromOldest = people.sort((personA, personB) => {
        let personAAge = 0;
        let personBAge = 0;

        if (!personA.yearOfDeath) {
            personAAge = (new Date().getFullYear()) - personA.yearOfBirth;
        } else {
            personAAge = personA.yearOfDeath - personA.yearOfBirth;
        }
        if (!personB.yearOfDeath) {
            personBAge = (new Date().getFullYear()) - personB.yearOfBirth;
        } else {
            personBAge = personB.yearOfDeath - personB.yearOfBirth;
        }

        return (personAAge > personBAge) ? -1 : 1;
    })

    return fromOldest[0];
}

module.exports = findTheOldest
