using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SIMS.API.Data;
using SIMS.API.Dtos;
using SIMS.API.Models;

namespace SIMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository repo;
        public AuthController(IAuthRepository repo)
        {
            this.repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            // validate request
            
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await this.repo.UserExists(userForRegisterDto.Username)) {
                return BadRequest("Username already exists");
            }

            var userToCreate = new User
            {
                Username = userForRegisterDto.Username
            };

            var createdUser = await this.repo.Register(userToCreate, userForRegisterDto.Password);
            
            return StatusCode(201); // throw code for now
        }
    }
}