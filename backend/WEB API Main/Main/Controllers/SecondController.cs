using BusinessSpecificLogic.EF;
using System.Web.Http;
using BusinessSpecificLogic.Logic;

namespace ReusableWebAPI.Controllers
{
    [RoutePrefix("api/Second")]
    public class SecondController : BaseController<Second>
    {
        public SecondController(ISecondLogic logic) : base(logic)
        {
        }
    }
}
