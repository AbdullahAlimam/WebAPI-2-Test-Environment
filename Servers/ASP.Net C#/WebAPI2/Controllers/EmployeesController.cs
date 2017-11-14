using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using WebAPI2.Models;

namespace WebAPI2.Controllers
{
    public class EmployeesController : ApiController
    {
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return MyDatabase.Employees;
        }

        [Authorize]
        [HttpGet]
        [Route("api/Search/Employees/{id}")] // Change the Default Route
        public IEnumerable<Employee> Get(int id)
        {
            return MyDatabase.Employees.Where(x => x.ID == id);
        }

        [Authorize]
        [HttpPost]
        public void Post([FromBody]Employee value)
        {
            int NewID = 1;
            if (MyDatabase.Employees.Count > 0)
                NewID = MyDatabase.Employees.Max(x => x.ID) + 1;
            value.ID = NewID;
            MyDatabase.Employees.Add(value);
        }

        [Authorize(Roles = "User")]
        [HttpPut]
        public void Put(int id, [FromBody]Employee value)
        {
            Employee emp = MyDatabase.Employees.Where(x => x.ID == id).SingleOrDefault();
            if (emp != null)
            {
                int index = MyDatabase.Employees.IndexOf(emp);
                value.ID = id;
                MyDatabase.Employees[index] = value;
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete]
        public void Delete(int id)
        {
            Employee emp = MyDatabase.Employees.Where(x => x.ID == id).SingleOrDefault();
            if (emp != null)
            {
                MyDatabase.Employees.Remove(emp);
            }
        }
    }
}