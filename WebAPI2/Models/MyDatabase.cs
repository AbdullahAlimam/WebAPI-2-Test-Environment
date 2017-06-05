using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI2.Models
{
    public static class MyDatabase
    {
        public static List<Employee> Employees = null;

        static MyDatabase()
        {
            Employees = new List<Employee>()
            {
                new Employee()
                {
                    ID = 1,
                    Username = "admin",
                    Password = "123",
                    Role = "Admin",
                    Name ="Admin",
                    Birthdate = new DateTime(1985,09,30),
                    Salary =5000,
                    IsActive =true
                }
            };
        }
    }
}