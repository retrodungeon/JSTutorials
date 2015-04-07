var calculator = {
    Man : {
        C1 : 88.362,
        C2 : 13.397,
        C3 : 4.799,
        C4 : 5.677
    },
    
    Woman : {
        C1 : 447.593,
        C2 : 9.247,
        C3 : 3.098,
        C4 : 4.330
    },
    
    getGender : function() {
        return this.gender;
    },
    getParameters : function(){
        var arr = {};
        arr.weight = prompt('Ваш вес в кг:');
        arr.height = prompt('Рост в см:');
        arr.age = prompt('Возраст в годах:');
        return arr;
    },
    
    getConstants : function() {
        var gender = this.getGender();
        return this[gender];
    }, 
    
    calculate : function(){
        var obj = this.getConstants(),
            person = this.getParameters();
        result = parseFloat(obj.C1) + ((parseFloat(obj.C2) * person.weight)+(parseFloat(obj.C3) * person.height) - (parseFloat(obj.C4) * person.age));
        console.log(result);
    }
}
calculator.calculate();