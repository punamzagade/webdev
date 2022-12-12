
class User {
    constructor(Username,email,password) {
        this.un = Username;
        this.em =email;
        this.pw= password;
    }
    static count=0;
    static registeredUsers(){
        return `The total registered users are ${User.count}`
     }
        register() {
            User.count++;
            return `${this.un} is now registered`;
        };
       
}

class Member extends User {
    constructor(Username,email,password,memberPackage,td){
        super(Username,email,password);
        this.mpkg=memberPackage;
        this.td= new Date(td);
         this.yr=this.td.getFullYear();
        this.m=this.td.getMonth();
        this.d=this.td.getDay();
            this.packagetilldate = new Date(this.yr,this.m + 1,this.d);
    }
   
    renewMembership(){
        this.yr=this.packagetilldate.getFullYear();
        this.m=this.packagetilldate.getMonth();
        this.d=this.packagetilldate.getDay();
        if(this.mpkg === "Standard package"){
            this.packagetilldate = new Date(this.yr,this.m + 1,this.d)
        }
       else if(this.mpkg === "Yearly package"){
            this.packagetilldate = new Date(this.yr+1,this.m + 1,this.d)    
        }
return `package is validated till the ${this.packagetilldate}`;
    }
    membershipactivetilldate(){
       return "this.un + ' subscribed to '+ this.mpkg + ' to ' + this.packagetilldat";
      }
    getPackage(){
        return `${this.un} is subscribed to this ${this.mpkg}`;
    }
}
    const us=new User("veer","verma@gmail.com","veerv","Standard package");
    const mem=new Member("jay","sharma@gmail.com","jays","Yearly package","2-3-2000");
    const mem1=new Member("ram","ram@gmail.com","ram","Standard package","2-3-2000");
    console.log(us.register());                                    
    console.log(mem.register());  
    mem1.register();                                  
    console.log(User.registeredUsers());    
     console.log(mem.getPackage())  
     console.log(mem.renewMembership());
     console.log(mem.membershipactivetilldate());                   
    console.log(us);                                                      
   console.log(mem); 
   console.log(mem1);                                                           
    