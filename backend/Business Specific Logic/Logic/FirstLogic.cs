using BusinessSpecificLogic.EF;
using Reusable;
using System.Data.Entity;

namespace BusinessSpecificLogic.Logic
{
    public interface IFirstLogic : IBaseLogic<First>
    {
    }

    public class FirstLogic : BaseLogic<First>, IFirstLogic
    {
        public FirstLogic(DbContext context, IRepository<First> repository) : base(context, repository)
        {
        }
    }
}
