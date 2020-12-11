let empPayrollList=[];
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
    //localStorage.clear();
  });

  const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem("EmployeePayrollList") ? JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
  }
  
  const createInnerHtml = () => {
     // if(empPayrollList.length==0) return;
    const headerHtml ="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Day</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
  let empList = createEmployeePayrollJSON();
  for (let emp of empPayrollList) {
    innerHtml = `${innerHtml}  
      <tr>
      <td>
        <img src="${emp._profile}" alt="P" class="profile">
      </td>
      <td>${emp._name}</td>
      <td>${emp._gender}</td>
      <td>${getDeptHtml(emp._department)}</td>
      <td>${emp._salary}</td>
      <td>${emp._startDate}</td>
      <td>
      <img id="${emp._id }" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="Delete">
      <img id="${emp._id }" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="Edit">
      </td>
      </tr>
      `;
  }
    document.querySelector("#table-display").innerHTML = innerHtml;
  }

  const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: "Akram Shaheed",
        _profile: "../assets/profile_images/Ellipse -5.png",
        _gender: "Male",
        _department: ["Others"],
        _salary: "40000",
        _note: "",
        _startDate: "16 Sep 2020",
      },
      {
        _name: "Xavier Chettan",
        _profile: "../assets/profile_images/Ellipse -2.png",
        _gender: "Male",
        _department: ["HR", "Others"],
        _salary: "100000",
        _note: "I'm groot.",
        _startDate: "01 Jan 2018",
      },
      {
        _name: "Jitendra Patel",
        _profile: "../assets/profile_images/Ellipse -2.png",
        _gender: "Male",
        _department: ["Others"],
        _salary: "40000",
        _note: "",
        _startDate: "02 Aug 2019",
      },
    ];
    return employeePayrollListLocal;
  };
  
  const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for (const dept of deptList)
      deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
    return deptHtml;
  };

  const remove = (node) => {
    let empData = empPayrollList.find((emp) => emp._id == node.id);
    if (!empData) return;
    const index = empPayrollList.map((emp) => emp._id).indexOf(empData._id);
    empPayrollList.splice(index, 1);

    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
  };
  
  const update = (node) => {
    let empData = empPayrollList.find((emp) => emp._id == node.id);
    if (!empData) return;
    localStorage.setItem("editEmp", JSON.stringify(empData));
    window.location.href="../pages/emp_Payroll_form.html";
    isUpdate = true;
    //window.location.href = site_properties.add_employee_page;
    //window.location.replace(site_properties.add_employee_page);
   // window.location.replace(site_properties.add_employee_page);
  };
  
