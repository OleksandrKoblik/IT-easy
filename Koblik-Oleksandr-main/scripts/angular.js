var Human = /** @class */ (function () {
    function Human(height, width, name, date, gender, disability) {
        this.height = height;
        this.width = width;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.disability = disability;
    }
    return Human;
}());
var firstHuman = new Human(182, 78, "Alex", new Date(1997, 10, 20), "male", "have");
console.log(firstHuman);
