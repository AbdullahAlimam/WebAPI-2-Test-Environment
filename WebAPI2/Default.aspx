<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebAPI2.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/bootstrap-grid.min.css" rel="stylesheet" />
    <style>
        .DivBorder {
            border: 1px solid #cecece;
            border-radius: 5px;
        }
    </style>
    <title></title>
</head>
<body>
    <div class="jumbotron text-center">
        <h1>Workable WebAPI Test Environment</h1>
        <p>Will Help you test what you need!</p>
    </div>
    <form id="form1" runat="server">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 DivBorder">
                    <label class="badge bg-info col-lg-12 text-center">Log In</label>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>Username</label>
                        </div>
                        <div class="col-lg-12">
                            <input id="inUsername" type="text" class="form-control" value="admin" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>Password</label>
                        </div>
                        <div class="col-lg-12">
                            <input id="inPassword" type="text" class="form-control" value="123" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-7 col-md-0 col-sm-0"></div>
                        <div class="col-lg-1 col-md-1">
                            <button type="button" class="btn btn-secondary" onclick="Login()">Log In</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="input-group">
                        <span class="input-group-addon">
                            <label class="col-lg-1" style="font-size: xx-small">Token:</label>
                        </span>
                        <input id="myToken" class="form-control col-lg-12" style="font-size: xx-small" />
                        <span class="input-group-btn">
                            <button class="btn btn-danger" type="button" style="font-size: xx-small" onclick='deleteCookie("access_token")'>Clear Cookies</button>
                        </span>
                    </div>
                </div>
                
                
                <div class="mt-4 col-lg-5 DivBorder">
                    <label class="badge bg-success col-lg-12 text-center">Add New Employee: no authentication needed</label>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Username</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpUsername" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Password</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpPassword" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Name</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpName" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Salary</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpSalary" type="number" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Birthdate</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpBirthdate" type="date" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>IsActive</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpIsActive" type="checkbox" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Role</label>
                        </div>
                        <div class="col-lg-8">
                            <select id="inEmpRole" class="form-control">
                                <option value="" label="Select ..."></option>
                                <option value="Admin" label="Admin"></option>
                                <option value="User" label="User"></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-9 col-md-0 col-sm-0"></div>
                        <div class="col-lg-1 col-md-1">
                            <button type="button" class="btn btn-secondary" onclick="AddEmployee();">Submit</button>
                        </div>
                    </div>
                </div>
                <div class="mt-4 col-lg-2"></div>
                <div class="mt-4 col-lg-5 DivBorder">
                    <label class="badge bg-warning col-lg-12 text-center">Update Employee: need permission Type [User]</label>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>ID</label>
                        </div>
                        <div class="input-group col-lg-8">
                            <input id="inEmpIDEdit" type="number" class="form-control" />
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-secondary" onclick='GetEmployee(document.getElementById("inEmpIDEdit").value);'>Get</button>
                            </span>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Username</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpUsernameEdit" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Password</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpPasswordEdit" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Name</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpNameEdit" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Salary</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpSalaryEdit" type="number" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Birthdate</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpBirthdateEdit" type="date" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>IsActive</label>
                        </div>
                        <div class="col-lg-8">
                            <input id="inEmpIsActiveEdit" type="checkbox" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-4">
                            <label>Role</label>
                        </div>
                        <div class="col-lg-8">
                            <select id="inEmpRoleEdit" class="form-control">
                                <option value="" label="Select ..."></option>
                                <option value="Admin" label="Admin"></option>
                                <option value="User" label="User"></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-9 col-md-0 col-sm-0"></div>
                        <div class="col-lg-1 col-md-1">
                            <button type="button" class="btn btn-secondary" onclick="UpdateEmployee();">Update</button>
                        </div>
                    </div>

                </div>
                <div class="form-group row">
                    <div class="col-lg-12">
                        <label id="lblServerResponse" class="badge badge-primary">Server Response:</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <label class="badge badge-info">Employees Data</label>
                <table id="dataTable" class="table">

                </table>
            </div>
        </div>
    </form>
    <div class="jumbotron text-center" style="margin-bottom: 0rem; margin-top: 2rem">
        <h1>Workable WebAPI Test Environment</h1>
        <p>Will Help you test what you need!</p>
    </div>
    <script src="Scripts/jquery-1.9.1.js"></script>
    <script src="Scripts/ClientSide/Cookies.js"></script>
    <script src="Scripts/ClientSide/MyAPI.js"></script>
    <script src="Scripts/ClientSide/Helper.js"></script>
    <script>
        $(document).ready(function ()
        {
            document.getElementById("myToken").value = getCookie("access_token");
            GetEmployees();
        });
    </script>
</body>
</html>
