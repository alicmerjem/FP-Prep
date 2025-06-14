// piece of code that adds modern functionality to olde environments that dont support it
// example: if a browser doesnt support a feauter,
// here is a backup version of it

// example
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(search, pos) {
        pos = pos || 0;
        return this.indexOf(search, pos) == pos;
    };
}

"hello".startsWith("he"); // true