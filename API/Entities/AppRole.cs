using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace API.Entity
{
    public class AppRole : IdentityRole<int>
    {
        public ICollection<AppUserRole> UserRole { get; set; }
    }
}
