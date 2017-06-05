# WebAPI-Test-Environment
 **This Project Should Help every one New to WEBAPI to build API for an Empity ASP Project.**

a simple project to manage employees [Login,Token, Add, Edit, Delete and Search] from Client Side by [Javascript and Ajax]

## Token

1. How to Get a Token from API for a User. [Login]
2. Write Your Own AuthAuthorizationServerProvider

## API Controler

1. How to Get (Select) Employees List. [AllowAnonymous]
2. How to Get (Select with Filter) Employee By ID. [Need Authentication]
3. How to Post (Add) New Employee Data using java scripit. [Need Authentication]
4. How to Put (Edit) Employee Information. [Need Authorize with role of User]
5. How to Delete Employee Data. [Need Authorize with role of Admin]
6. How to Change the Route (Path) of an API. [Route]

## Client Side

1. I use Bootstrap to create an awful page design for Now :).
2. Javascript with Ajax to Control the APIs from the client side.

## Main Files

1. Files that help to store the Employees Data or any Data are located in this path [\Models].
2. Files that help to ganerate the Token  [Startup.cs, MyOAuthAuthorizationServerProvider.cs].
3. Files that help to ganerate the API [EmployeesController.cs, WebApiConfig.cs].
4. Javascript Files for client side Can be Found in this path [\Scripts\ClientSide].

