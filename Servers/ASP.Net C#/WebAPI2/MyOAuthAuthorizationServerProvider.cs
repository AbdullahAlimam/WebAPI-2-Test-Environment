using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Security.Claims;
using WebAPI2.Models;

namespace WebAPI2
{
    public class MyOAuthAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);

            var employee = MyDatabase.Employees.Where(
                x => x.Username == context.UserName &&
                x.Password == context.Password).FirstOrDefault(); // should be SingleOrDefault() on real database

            if (employee != null)
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, employee.Role.ToString()));
                identity.AddClaim(new Claim(ClaimTypes.Name, employee.Username));
                context.Validated(identity);
            }
            else
                context.SetError("Login Field", "Error username or password");
        }
    }
}