using BusinessSpecificLogic.EF;
using System.Web.Http;
using BusinessSpecificLogic.Logic;

namespace ReusableWebAPI.Controllers
{
    [RoutePrefix("api/First")]
    public class FirstController : BaseController<First>
    {
        public FirstController(IFirstLogic logic) : base(logic)
        {
        }
    }
}
