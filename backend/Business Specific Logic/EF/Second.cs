using Reusable;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessSpecificLogic.EF
{
    [Table("Second")]
    public class Second : BaseEntity
    {
        public Second()
        {
            ///Start:Generated:Constructor<<<
			///End:Generated:Constructor<<<
            
        }

        [Key]
        public int SecondKey { get; set; }

        public override int id { get { return SecondKey; } }

        ///Start:Generated:Properties<<<
        ///End:Generated:Properties<<<
    }
}
