document.querySelector('#getemployee').addEventListener('click',loademployee);

function loademployee(){
    const xhr=new XMLHttpRequest();

    var loadimage=document.querySelector('#loading');
    loadimage.style.display='block'
    xhr.open('GET','employee.json',true);

    xhr.onload=function(){
        if(this.status===200){

           loadimage.style.display='none';
            let employee=JSON.parse
            (this.responseText);
       

            let html="";
            employee.forEach(employee => {
              html+=  `
            <tr>
                <td>${employee.firstname}</td>
                <td>${employee.lastname}</td>
                <td>${employee.age}</td>
                <td>${employee.job}</td>
            
            </tr>`;
                
            });
            
            document.querySelector('#employees').innerHTML=html;
        }
    }


    xhr.send();
}