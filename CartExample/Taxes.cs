using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CartExample
{
    public class taxes
    {
        public decimal salesTax { get; } = .1m;
        public decimal importTax { get; } = .05m;
    }
}