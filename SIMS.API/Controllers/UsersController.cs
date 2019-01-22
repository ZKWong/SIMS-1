using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SIMS.API.Data;
using SIMS.API.Dtos;

namespace SIMS.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ISimsRepository repo;
        private readonly IMapper mapper;

        public UsersController(ISimsRepository repo, IMapper mapper)
        {
            this.repo = repo;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await repo.GetUsers();
            var usersToReturn = this.mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await this.repo.GetUser(id);
            var userToReturn = this.mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }
        
    }
}