using API.Entity;
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

            var roles = new List<AppRole>()
            {
                new AppRole() { Name = "Admin"},
                new AppRole() { Name = "Moderator"}
            };

            foreach(var role in roles)
            {
                await roleManager.CreateAsync(role); 
            }

            var admin = new AppUser { UserName = "admin" };

            await userManager.CreateAsync(admin, "Admin@123");
            await userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" });
        }
    }
}
