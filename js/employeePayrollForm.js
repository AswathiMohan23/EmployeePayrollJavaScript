
window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });
});  

class EmployeeData{
    id;
    name;
    profilePic;
    gender;
    department;
    salary;
    startDate;
    notes;

  
    get getId(){
        return this._id;
    }
    set id(id){
        this._id=id;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name))
            this.name=name;
        else throw "name is invalid";
    }
    
    get getProfilePic(){
        return this._profilePic;
    }
    get getGender(){
        return this.gender;
    }
    set gender(gender){
        this._gender=gender;
    }
    get department(){
        return this._department;
    }
    set department(department){
        this._department=department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }
    get getStartDate(){
        return this.startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    get getNotes(){
        return this.notes;
    }
    set notes(notes){
        this._notes=notes;

    }
  
    toString(){
        const options={year:'numeric',month:'long',day:'numeric'}
        const empDate=!this.startDate?"undefined" : this.startDate.toLocaleDateString("en-US",options);
        return "id = "+this.Id+"name = "+this.Name+" , gender = "+this.gender+" ,profilePic = "+this.profilePic
                    +" ,phoneNo = "+this.phone+" , email = "+this.email+" ,startDate = "+this.startDate+" , notes = "+this.notes;
    } 
    
    
}
let employeeData =new EmployeeData()
console.log(employeeData.toString());
