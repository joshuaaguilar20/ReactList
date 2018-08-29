class Oldsyntax{
    constructor(){
        this.name = joshua
    }
    getGretting(){
        return `hi my name is ${this.name}.`  
    }
}


const Oldsyntax = new Oldsyntax();
    console.log(Oldsyntax) 
     ///will out put my name
     console.log(getgretting()); //will output ERROR Due to Breaking this binding***** 
    

//-------------------------------------------------------------------------------------------------------------------------------------



//class properties 

class NewSyntax {
    name = 'joshua';

    getGretting = () => {
        return `hi my name is ${this.name}.`  
    }
}

const NewSyntax = new NewSyntax();
console.log(NewSyntax);
console.log(getgretting()); //will output  without breaking the binding 