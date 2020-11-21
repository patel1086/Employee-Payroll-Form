class EmployeePayrollData{
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex =RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else {
            throw "Name is Incorrect!! ";
        }
       }
    get profile(){
        return this._profile;
    }
    set profile(profile){
        this._profile = profile;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
            this._gender = gender;
        }
    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
            this._salary = salary;
    }

    get startDate(){
        return this._startDate;
        if(startDate.getMonth()<=(new Date()).getMonth()
        &&startDate.getDay()<=(new Date()).getDay()
        &&startDate.getFullYear()<=(new Date()).getFullYear())
         this._startDate = startDate;
        else
       { 
           alert("Start Date is invalid."); 
            throw "Invalid Start date "+startDate;
        }
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes=notes;
    }
    toString(){
        const options = { year: 'numeric', month: 'long' , day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined":this.startDate.toLocaleDateString("en-US",options);
        return  "Name = "+this.name+", Salary = "+this.salary+" ,Gender = "+this.gender+" ,Start date = "+empDate+" ,Department = "+this.department+" ,Profile = "+this.profile+" ,Notes = "+this.notes;
    }
}
function save(){
    let employeepayrollData=new EmployeePayrollData();
    employeepayrollData.name= document.getElementById("name").value;

    const images = document.getElementsByName("profile");
    employeepayrollData.profile=images[0];
    for(let i=0;i<images.length;i++){
        if(images[i].checked)
        employeepayrollData.profile=images[i].value;
    }

    let genders = document.getElementsByName("gender");
    for(let i=0;i<genders.length;i++){
        if(genders[i].checked)
        employeepayrollData.gender=genders[i].value;
    }

    employeepayrollData.departments = new Array();
    const departmentsForm = document.getElementsByClassName("checkbox");
    for(let i=0;i<departmentsForm.length;i++){
        if(departmentsForm[i].checked)
        employeepayrollData.departments.push(departmentsForm[i].value);
    }

   employeepayrollData.salary = document.getElementById("salary").value;
   const day = document.getElementById("day").value;
   const month = document.getElementById("month").value;
   const year = document.getElementById("year").value;
   employeepayrollData.note = document.getElementById("notes").value;
   employeepayrollData.startDate =new Date(year+"-"+month+"-"+day);


   //const employeepayrollData = new EmployeePayrollData(name, salary, gender,startDate, departments, profile, note);
   createAndUpdateStorage(employeepayrollData);
   alert("Thanks! Your form is submitted successfully!" + "\n "+employeepayrollData.toString());
   console.log("thanks for adding data!");
   console.log("3"+employeepayrollData);
}

function createAndUpdateStorage(employeepayrollData){
    console.log("1"+employeepayrollData);
    let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList!=undefined){
        employeePayrollList.push(employeepayrollData);
    }else{
        employeePayrollList=[employeepayrollData]
    }
    //alert(employeePayrollList.toString());
    console.log("2"+employeePayrollList.toString())
    //console.log("7"+employeePayrollList);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
    //console.log(JSON.parse(window.localStorage.getItem('Jitendra')));
}

const resetForm= () => {
    setValue('#name','');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department');
    unsetSelectedValues('[name=profile]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');

}
const unsetSelectedValues=(propertyValue)=>{
    let allItems= document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{item.checked=false});
}

const setTextValue=(id,value)=>{
    const element=document.querySelector(id);
    element.textContent=vaue;
}
const setValue=(id,value)=>{
    const element=document.querySelector(id);
    element.value=value;
} 

window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if ( name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});

// const save=()=>{
//     try{
//         let employeepayrollData=createEmployeePayroll();
//     }catch(e){
//         return;
//     }
// }
// const createEmployeePayroll=()=>{
//     let employeepayrollData=new EmployeePayrollData();
//     try{
//         employeepayrollData.name=getInputValueById('#name');
//     }catch(e){
//         setTextValue('.text-error',e);
//         throw e;
//     }
//     employeepayrollData.profile=getSelectedValues('[name=profile]').pop();

// }