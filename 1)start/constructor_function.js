
// Create a constructor function Student which takes in first name, 
// last name , roll number , Sex and Student's age
// Make 2 students objects
// Console log the full name (first name + last name) of the student object with greater age
// Write a function inside the constructor to getBirthYear and fullName of the student
// Write a function outside which takes minimum age to be egligible as arguments and return 
// whether the student is egligible or not by calculating his age from dob .
// If student's age greater than or equal to minimum age to be egligible => he is egligible, else 
// he is not egligible


function Student(fname,lname,rollno,Sex,age,dob){
    this.fn=fname;
    this.ln=lname;
    this.rn=rollno;
    this.s=Sex;
    this.a=age;
    this.dob=new Date(dob);
    console.log(this.fn+" "+this.ln);       //veer verma // jay sharma
    this.getFullName=function(){
        return this.fn+" "+this.ln
    }
    this.getBirthYear=function(){
      return this.dob.getFullYear();
    }
    }
    Student.prototype.minAge=function(ag){
     this.ag=ag;
     (this.ag<=this.a) ?console.log(`he is egligible`) : console.log(`he is not egligible`);
    }
    const st1=new Student("veer","verma",20,"Male",18,"10-8-1999");
    const st2=new Student("jay","sharma",12,"Male",27,"4-3-1995");
    console.log(st1.getFullName());                                     //veer verma
    console.log(st2.getBirthYear());                                    //1995
    console.log(st1.getBirthYear());                                     //1999
    st1.minAge(20);                                                       // he is not egligible
    st2.minAge(20);                                                     // he is egligible
    