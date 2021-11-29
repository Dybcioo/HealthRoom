using API.Entity;
using API.Helpers;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(UserManager<AppUser> userManager,
            RoleManager<AppRole> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;

            foreach(var role in RolesHelp.GetAllRoles())
            {
                await roleManager.CreateAsync(new AppRole { Name = role}); 
            }

            var admin = new AppUser { UserName = "admin" };

            await userManager.CreateAsync(admin, "Admin@123");
            await userManager.AddToRolesAsync(admin, new[] { RolesHelp.Admin, RolesHelp.Moderator });
        }
    }
}
