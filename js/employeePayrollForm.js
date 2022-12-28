const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});  


class EmployeeData{
    name;
    profileImage;
    gender;
    department;
    phone;
    email;
    salary;
    startDate;
    notes;

    //constructor

    constructor(...params){
        this.setName=params[0];
        this.setProfilePic=params[1];
        this.setGender=params[2];
        this.setDepartment=params[3];
        this.setPhone=params[4];
        this.setEmail=params[5];
        this.setSalary=params[6];
        this.setStartDate=params[7];
        this.setNotes=params[8];
    }
    get getName(){
        return this.name;
    }
    get getProfilePic(){
        return this.profilePic;
    }
    get getGender(){
        return this.gender;
    }
    get getDept(){
        return this.Dept;
    }
    get getPhone(){
        return this.phone;
    }
    get getEmail(){
        return this.email;
    }
    get getSalary(){
        return this.salary;
    }
    get getStartDate(){
        return this.startDate;
    }
    get getNotes(){
        return this.notes;
    }

    set setName(name){
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name))
            this.name=name;
        else throw "name is invalid";
    }
    
    set setStartDate(startDate){
        let startDateRegex=RegExp("^\\d[2010-2022]{4}-\\d[01-12]{2}-\\d[01-31]{2}$");
        if(startDateRegex.test(startDate))
            this.startDate=startDate;
        else throw "start date is invalid"
    }

}