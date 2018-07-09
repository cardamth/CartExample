using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CartExample
{
    public class cartList
    {

        public string CreateShoppingList(string data)
        {
            string currencyFormat = "N2";
            taxes tax = new taxes();
            decimal totalSalesTax = 0m;
            decimal total = 0.00m;
            string[] itemList = data.Split('\n');
            string existingItems = "";
            List<CartItem> cart = new List<CartItem>();
            for (int x = 0; x < itemList.Length; x++)
            {
                if (itemList[x].IndexOf("at") <= 0)
                {
                    throw new Exception("Invalid List, no 'at' for item " + (x + 1));
                }
                if (itemList[x].Length <= 3)
                {
                    throw new Exception("Invalid List, does not contain all variables");
                }

                string[] itemCountNameAndPrice = itemList[x].Split(new[] { " at " }, StringSplitOptions.None);
                string itemDescription = itemCountNameAndPrice[0].Substring(itemCountNameAndPrice[0].IndexOf(" "));
                if (existingItems.Contains(HelperFunctions.FormatDuplicateDescription(itemDescription)))
                {
                    foreach (var item in cart)
                    {
                        if (itemDescription.Contains(item.Description)) { item.Count += 1; break; }
                    }
                }
                else
                {
                    CartItem itemToAdd = new CartItem(int.Parse(itemCountNameAndPrice[0].Substring(0, itemCountNameAndPrice[0].IndexOf(" "))),
                        decimal.Parse(itemCountNameAndPrice[1]),
                        itemDescription);
                    cart.Add(itemToAdd);
                    existingItems += HelperFunctions.FormatDuplicateDescription(itemDescription);
                }
            }
            string solution = "";
            foreach (var item in cart)
            {
                decimal printedItemSalesTax = HelperFunctions.RoundNickel((item.TaxExempt ? 0 : item.Price * tax.salesTax));
                printedItemSalesTax += HelperFunctions.RoundNickel((item.Imported ? item.Price * tax.importTax : 0));
                decimal itemTotal = (item.Price * item.Count) + (printedItemSalesTax * item.Count);
                totalSalesTax += HelperFunctions.RoundNickel(item.TaxExempt ? 0 : item.Price * tax.salesTax) * item.Count + HelperFunctions.RoundNickel(item.Imported ? item.Price * tax.importTax : 0) * item.Count;
                total += itemTotal;
                solution += HelperFunctions.FirstCharacterUpper((item.Imported ? "imported " : "") + item.Description.Replace("imported ", "").Trim()) + ": " + itemTotal.ToString(currencyFormat) + (item.Count <= 1 ? "" : " (" + item.Count.ToString() + " @ " + Math.Round((item.Price + printedItemSalesTax), 2) + ")") + "\n";
            }
            solution += "Sales Taxes: " + totalSalesTax.ToString(currencyFormat) + "\n";
            solution += "Total: " + total.ToString(currencyFormat);
            return solution;
        }

    }
}
