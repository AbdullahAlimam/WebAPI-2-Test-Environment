
function GetEmployees()
{
    jQuery.ajax({
        url: 'http://localhost:55448/api/Employees',
        type: 'GET',
        success: function (response) {
            FillGrid(response);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            document.getElementById("lblServerResponse").textContent = "Error Username or Password.";
            console.log(XMLHttpRequest.status + ' ' +
                XMLHttpRequest.statusText);
            return false;
        }
    });
}

function Login()
{
    var user = document.getElementById("inUsername").value;
    var pass = document.getElementById("inPassword").value;
    var clientID = '659c279b-374a-e711-9ffa-4c72b9647535';
    jQuery.ajax({
        url: 'http://foodak.net/token',
        type: 'POST',
        data: {
            grant_type: 'password',
            username: user,
            password: pass,
            client_id: clientID
        },
        success: function (response) {
            document.cookie = "access_token=" + response.access_token;
            document.getElementById("lblServerResponse").textContent = "Login successful.";
            document.getElementById("myToken").value = response.access_token;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown)
        {
            document.getElementById("lblServerResponse").textContent = "Error Username or Password.";
            console.log(XMLHttpRequest.status + ' ' +
                XMLHttpRequest.statusText);
            return false;
        }
    });
}

function GetEmployee(EmpID)
{
    var access_token = getCookie("access_token");

    jQuery.ajax({
        url: 'http://localhost:55448/api/Search/Employees/' + EmpID,
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "BEARER " + access_token);
        },
        success: function (response) {
            console.log(response);
            document.getElementById("inEmpIDEdit").value = response[0].ID;
            document.getElementById("inEmpUsernameEdit").value = response[0].Username;
            document.getElementById("inEmpPasswordEdit").value = response[0].Password;
            document.getElementById("inEmpNameEdit").value = response[0].Name;
            document.getElementById("inEmpSalaryEdit").value = response[0].Salary;
            document.getElementById("inEmpBirthdateEdit").value = toJSDate(response[0].Birthdate);
            document.getElementById("inEmpIsActiveEdit").checked = response[0].IsActive;
            document.getElementById("inEmpRoleEdit").value = response[0].Role;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            document.getElementById("lblServerResponse").textContent = XMLHttpRequest.status + ' ' + XMLHttpRequest.statusText;
        }
    });
}

function AddEmployee()
{
    var Username = document.getElementById("inEmpUsername").value;
    var Password = document.getElementById("inEmpPassword").value;
    var Name = document.getElementById("inEmpName").value;
    var Salary = document.getElementById("inEmpSalary").value;
    var Birthdate = document.getElementById("inEmpBirthdate").value;
    var IsActive = document.getElementById("inEmpIsActive").checked;
    var Role = document.getElementById("inEmpRole").value;

    var access_token = getCookie("access_token");

    jQuery.ajax({
        url: 'http://localhost:55448/api/Employees/',
        type: 'POST',
        data:
            {
                "Username" : Username  ,
                "Password" : Password  ,
                "Name" : Name  ,
                "Salary" : Salary  ,
                "Birthdate" : Birthdate  ,
                "IsActive" : IsActive ,
                "Role" : Role ,
            },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "BEARER " + access_token);
        },
        success: function (response) {
            document.getElementById("lblServerResponse").textContent = "New Employee Added Successfully";
            GetEmployees();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            document.getElementById("lblServerResponse").textContent = XMLHttpRequest.status + ' ' + XMLHttpRequest.statusText;
        }
    });
}

function UpdateEmployee()
{
    var EmpID =     document.getElementById("inEmpIDEdit").value;
    var Username =  document.getElementById("inEmpUsernameEdit").value;
    var Password =  document.getElementById("inEmpPasswordEdit").value;
    var Name =      document.getElementById("inEmpNameEdit").value;
    var Salary =    document.getElementById("inEmpSalaryEdit").value;
    var Birthdate = document.getElementById("inEmpBirthdateEdit").value;
    var IsActive =  document.getElementById("inEmpIsActiveEdit").checked;
    var Role =      document.getElementById("inEmpRoleEdit").value;

    var access_token = getCookie("access_token");

    jQuery.ajax({
        url: 'http://localhost:55448/api/Employees/' + EmpID,
        type: 'PUT',
        data:
            {
                "Username": Username,
                "Password": Password,
                "Name": Name,
                "Salary": Salary,
                "Birthdate": Birthdate,
                "IsActive": IsActive,
                "Role": Role,
            },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "BEARER " + access_token);
        },
        success: function (response) {
            document.getElementById("lblServerResponse").textContent = "Employee #"+ EmpID +" Updated Successfully";
            GetEmployees();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            document.getElementById("lblServerResponse").textContent = XMLHttpRequest.status + ' ' + XMLHttpRequest.statusText;
        }
    });
}

function DeleteEmployee(EmpID) {
    var access_token = getCookie("access_token");

    jQuery.ajax({
        url: 'http://localhost:55448/api/Employees/' + EmpID,
        type: 'DELETE',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "BEARER " + access_token);
        },
        success: function (response) {
            document.getElementById("lblServerResponse").textContent = "Employee #" + EmpID + " Deleted Successfully";
            GetEmployees();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            document.getElementById("lblServerResponse").textContent = XMLHttpRequest.status + ' ' + XMLHttpRequest.statusText;
        }
    });
}
