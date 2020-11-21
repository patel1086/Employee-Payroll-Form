window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
    const headerHtml =
      "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Day</th><th>Actions</th></tr>";
    const innerHtml = `
      ${headerHtml}  
      <tr>
            <td>
              <img src="../assets/profile_images/Ellipse -2.png" alt="" class="profile">
            </td>
            <td>Jitendra Patel</td>
            <td>Male</td>
            <td>
              <div class="dept-label">HR</div>
              <div class="dept-label">Finance</div>
            </td>
            <td>20202020</td>
            <td>16 Sep 2020</td>
            <td>
              <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="Delete">
              <img id="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="Edit">
            </td>
      </tr>
      `;
    document.querySelector("#table-display").innerHTML = innerHtml;
  };