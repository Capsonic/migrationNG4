using Reusable;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessSpecificLogic.EF
{
    [Table("First")]
    public class First : BaseEntity
    {
        public First()
        {
            ///Start:Generated:Constructor<<<
			///End:Generated:Constructor<<<
            
        }

        [Key]
        public int FirstKey { get; set; }

        public override int id { get { return FirstKey; } }

        ///Start:Generated:Properties<<<
        ///End:Generated:Properties<<<
    }
}
