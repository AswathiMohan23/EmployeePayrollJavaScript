
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

    const save=()=>{
        try{
            let employeePayrollData=createEmployeePayroll();
            createAndUpdateStorage(employeePayrollData);
        }catch(e){
            return;
        }
    }

    function createAndUpdateStorage(employeePayrollData){
        let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
        if(employeePayrollList!=undefined){
            employeePayrollList.push(employeePayrollData);
        }else{
            employeePayrollList=[employeePayrollData]
        }
        alert(employeePayrollList.toString());
        localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
    }

    const createEmployeePayroll=()=>{
        let employeePayrollData=new EmployeePayrollData();
        try{
            employeePayrollData.name=getInputValueById('#name');
        }catch(e){
            setTextValue('.text-error',e);
            throw e;
        }
        employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
        employeePayrollData.department=getSelectedValues('[name=department]');
        employeePayrollData.salary=getInputValueById('#salary');
        employeePayrollData.note=getInputValueById('#notes');
        let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
        employeePayrollData.date=Date.parse(date);
        alert(employeePayrollData.toString());
        return employeePayrollData;
    }

    const getSelectedValues=(propertyValue) =>{
        let allItems=document.querySelectorAll(propertyValue);
        let selItems=[];
        allItems.forEach(item=>{
            if(item.checked)selItems.push(item.value);
        });
        return selItems;
    }

    const getInputValueById=(id) =>{
        let value=document.querySelector(id).value;
        return value;
    }

    const getInputElementValue=(id)=>{
        let value=document.getElementById.value;
        return value;
    }

    
});  

class EmployeePayrollData{
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
