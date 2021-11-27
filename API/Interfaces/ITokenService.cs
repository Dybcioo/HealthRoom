using API.Entity;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface ITokenService
    {
        Task<string> CreateTokenAsync(AppUser user);
    }
}
