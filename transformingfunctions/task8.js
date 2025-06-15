// TASK 8
// create a function sayHi(name, language) that returns
// a greeting message like:
// "Hi NAME!" (English)
// "Hola NAME!" (Spanish)
// "Salut NAME!" (French)
// then write a curried function 

function sayHi(name, language) {
    switch(language) {
        case "Spanish":
            return `Hola ${name}`;
            break;
        case "English":
            return `Hi ${name}`;
            break;
        case "French":
            return `Salut ${name}`;
            break;
    }
}

function hiIn(lang) {
    return function(name) {
        return sayHi(name, lang);
    };
}