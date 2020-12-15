document.querySelector("#getemployee").addEventListener("click", loadEmployee);

function loadEmployee() {
    
const loadimage= document.querySelector('#loading');
loadimage.style.display='block';
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "employee.json", true);

  xhr.onload = function () {
    if (this.status === 200) {

        loadimage.style.display='none';

      let employees=JSON.parse
      (this.responseText);

      let html =" ";

      employees.forEach(employee => {

          html+=`
          <tr>
             <th>${employee.firstname}</th>
             <th>${employee.lastname}</th>
             <th>${employee.age}</th>
             <th>${employee.job}</th>
         </tr>
             
             `;
             document.querySelector('#employees')
             .innerHTML=html;
          
      });
    }
  };

  xhr.send();
}
