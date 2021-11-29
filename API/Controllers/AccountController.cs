using API.DTO;
using API.Entity;
using API.Extension;
using API.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly ITokenService _token;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public AccountController(ITokenService token, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _token = token;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            if (await _userManager.Users.AnyAsync(u => u.UserName == registerDto.Login.ToLower()))
                return BadRequest("Użytkownik zajęty");

            var user = new AppUser
            {
                UserName = registerDto.Login.ToLower(),
                ChangePassword = true
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            var resultRole = await _userManager.AddToRoleAsync(user, "Moderator");

            if (!resultRole.Succeeded) return BadRequest(resultRole.Errors);

            return Ok();
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(u => loginDto.Login.ToLower() == u.UserName);

            if (user == null) return Unauthorized("Nie ma takiego użytkownika");

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded) return Unauthorized();

            var resultUser = new UserDto
            {
                Login = user.UserName,
                Token = await _token.CreateTokenAsync(user)
            };

            return /*user.ChangePassword ? Redirect("Somewhere") :*/ Ok(resultUser);
        }

        [HttpPost("ChangePassword")]
        public async Task<ActionResult<UserDto>> ChangePassword(ChangePasswordDto changePaswwordDto)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(u => User.GetUsername().ToLower() == u.UserName);

            if (user == null) return Unauthorized("Nie ma takiego użytkownika");

            var changeResult = await _userManager.ChangePasswordAsync(user, changePaswwordDto.Password, changePaswwordDto.NewPassword);

            if (!changeResult.Succeeded) return BadRequest(changeResult.Errors);

            user.ChangePassword = false;

            await _userManager.UpdateAsync(user);

            await _signInManager.SignInAsync(user, false);


            var resultUser = new UserDto
            {
                Login = user.UserName,
                Token = await _token.CreateTokenAsync(user)
            };

            return Ok(resultUser);
        }

    }
}
