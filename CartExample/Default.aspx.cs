using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

namespace CartExample
{

    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void TestButton1_Click(object sender, EventArgs e)
        {
            TextBoxTestData.Text = File.ReadAllText(HelperFunctions.ProjectPath() + HelperFunctions.TestDataPath() + "Trial1.txt");
        }

        protected void TestButton2_Click(object sender, EventArgs e)
        {
            TextBoxTestData.Text = File.ReadAllText(HelperFunctions.ProjectPath() + HelperFunctions.TestDataPath() + "Trial2.txt");
        }

        protected void TestButton3_Click(object sender, EventArgs e)
        {
            TextBoxTestData.Text = File.ReadAllText(HelperFunctions.ProjectPath() + HelperFunctions.TestDataPath() + "Trial3.txt");
        }

        protected void TestDataC_Click(object sender, EventArgs e)
        {
            cartList basket = new cartList();
            TextBoxSolution.Text = basket.CreateShoppingList(TextBoxTestData.Text);
        }

    }
}