using System.Security.Claims;

namespace API.Extension
{
    public static class ClaimExtension
    {
        public static string GetUsername(this ClaimsPrincipal user) => user.FindFirstValue(ClaimTypes.Name);
        public static int GetUserId(this ClaimsPrincipal user) => int.Parse(user.FindFirstValue(ClaimTypes.NameIdentifier));
    }
}
