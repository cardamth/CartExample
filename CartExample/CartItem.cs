namespace CartExample
{
    public class CartItem
    {
        public int Count { get; set; } = 0;
        public decimal Price { get; } = 0.00m;
        public string Description { get; } = "";
        public bool TaxExempt { get; } = false;
        public bool Imported { get; } = false;

        public CartItem(int number, decimal cost, string name)
        {
            Count = number;
            Price = cost;
            Imported = name.Contains("imported");
            TaxExempt = TaxExemptItem(name);
            Description = name.Trim();
        }

        public string lineOfCartItem()
        {
            return Description + " " + Price.ToString();
        }

        private bool TaxExemptItem(string data)
        {
            foreach (var exemptItem in HelperFunctions.ExemptList())
            {
                if (data.Contains(exemptItem))
                {
                    return true;
                }
            }
            return false;
        }
    }
}