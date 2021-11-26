using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {

        [HttpGet]
        public ActionResult<string> GetSmt()
        {
            return "Elo";
        }
    }
}
