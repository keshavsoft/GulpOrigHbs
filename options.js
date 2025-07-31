const LocalFuncForVisible = (inObject) => {
    return "visible" in inObject;
};

const LocalFuncForEqual = (value1, value2) => {
    return value1 === value2;
};

const LocalFuncForKeyPresent = (inObject, inKey) => {
    return inKey in inObject;
};

let options = {
    ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
    partials: {
        footer: '<footer>the end</footer>'
    },
    batch: ['./src/partials/Hbs'],
    helpers: {
        isEqual: LocalFuncForEqual,
        isKeyPresent: LocalFuncForKeyPresent,
        isVisible: LocalFuncForVisible
    }
};

module.exports = {
    options
}