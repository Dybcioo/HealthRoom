using API.Entity;
using API.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly ITokenService _token;
        private readonly UserManager<AppUser> _userManager;

        public AccountController(ITokenService token, UserManager<AppUser> userManager)
        {
            _token = token;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<ActionResult<string>> GetSmt()
        {
            var user = _userManager.Users.FirstOrDefault();

            return await _token.CreateTokenAsync(user);
        }
    }
}
