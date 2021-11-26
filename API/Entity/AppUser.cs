using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace API.Entity
{
    public class AppUser : IdentityUser<int>
    {
        public ICollection<AppUserRole> UserRole { get; set; }
    }
}
