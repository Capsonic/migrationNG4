using Reusable;
using System.Collections.Generic;
using System.Web.Http;

namespace ReusableWebAPI.Controllers
{
    [AllowAnonymous]
    public class PingController : ApiController
    {
        // GET: api/Ping
        public IEnumerable<string> Get()
        {
            return new string[] { "Test", "is", "working!" };
        }

        // GET: api/Ping/5
        public string Get(int id)
        {
            return "Test is working!";
        }

        //-----
        [HttpGet, Route("api/ping/pingError")]
        public CommonResponse pingError()
        {
            CommonResponse response = new CommonResponse();
            
            response.Error(new KnownError("Test has failed this is in porpouse error"));
            
            return response;
        }
        //-----


        // POST: api/Ping
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Ping/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Ping/5
        public void Delete(int id)
        {
        }
    }
}
