using System.Collections.Generic;

namespace API.Helpers
{
    public static class RolesHelp
    {
        public const string Admin = "Admin";

        public const string Moderator = "Moderator";

        public static IEnumerable<string> GetAllRoles()
        {
            return new List<string>
            {
                Admin,
                Moderator
            };
        }
    }
}
