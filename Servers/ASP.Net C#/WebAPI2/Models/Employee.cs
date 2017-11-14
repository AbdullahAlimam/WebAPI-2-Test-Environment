using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI2.Models
{
    public class Employee
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public float Salary { get; set; }
        public DateTime Birthdate { get; set; }
        public bool IsActive { get; set; }
        public string Role { get; set; }
    }
}