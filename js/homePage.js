let employeePayrollList;
window.addEventListener('DOMContentLoaded',(event) => {
    employeePayrollList=getEmployeePayrollDateFromStorage();
    document.querySelector(".emp-count").textContent=employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDateFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.geItem('EmployeePayrollList')):[];
}


// Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(employeePayrollList.length==0)return;                    
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for (const employeePayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" src="${employeePayrollData._profilePic}" alt=""></td>
                <td>${employeePayrollData._name}</td>
                <td>${employeePayrollData._gender}</td>
                <td>${getDeptHtml(employeePayrollData._department)}</td>
                <td>${employeePayrollData._salary}</td>
                <td>${employeePayrollData._startDate}</td>
                <td>
                    <img name="${employeePayrollData._id}" onclick="remove(this)"
                        src="./assets/icons/delete-black-18dp.svg" alt="delete">
                    <img name="${employeePayrollData._id}" onclick="update(this)"
                        src="./assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON=()=>{
    let empPayrollListLocal=[
        {
            _name:'Harry Potter',
            _gender:'male',
            _department:[
                'Engineerig',
                'Fimamce'
            ],
            _salary:'5000000',
            _startDate:'29 oct 2019',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse-5.png'

        }
    ];
    return empPayrollListLocal;
}
const getDeptHtml=(deptList) => {
    let getDeptHtml='';
    for(const dept of deptList){
        deptHtml=`${deptHtml} < div class='dept-label'> ${dept}<div>`
    }
    return deptHtml;
}
