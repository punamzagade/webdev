
class Student {
    constructor(fname, lname, rollno, Sex, age, dob) {
        this.fn = fname;
        this.ln = lname;
        this.rn = rollno;
        this.s = Sex;
        this.a = age;
        this.dob = new Date(dob);
    
        console.log(this.fn + " " + this.ln); //veer verma // jay sharma
    }
        getFullName(){
            return this.fn + " " + this.ln;
        };
        getBirthYear() {
            return this.dob.getFullYear();
        };
        minAge(ag) {
        this.ag = ag;
        (this.ag <= this.a) ? console.log(`he is egligible`) : console.log(`he is not egligible`);
    }
}
    const st1=new Student("veer","verma",20,"Male",18,"10-8-1999");
    const st2=new Student("jay","sharma",12,"Male",27,"4-3-1995");
    console.log(st1.getFullName());                                     //veer verma
    console.log(st2.getBirthYear());                                    //1995
    console.log(st1.getBirthYear());                                     //1999
    st1.minAge(20);                                                       // he is not egligible
    st2.minAge(20);                                                     // he is egligible
    