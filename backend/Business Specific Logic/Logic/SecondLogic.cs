using BusinessSpecificLogic.EF;
using Reusable;
using System.Data.Entity;

namespace BusinessSpecificLogic.Logic
{
    public interface ISecondLogic : IBaseLogic<Second>
    {
    }

    public class SecondLogic : BaseLogic<Second>, ISecondLogic
    {
        public SecondLogic(DbContext context, IRepository<Second> repository) : base(context, repository)
        {
        }
    }
}
