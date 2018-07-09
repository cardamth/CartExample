using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;

namespace CartExample.Tests
{
    [TestClass]
    public class TestCases
    {
        [TestMethod]
        public void RegressCalcs()
        {
            string[] fileList = Directory.GetFiles(HelperFunctions.ProjectPath() + HelperFunctions.TestDataPath(), "Trial*.txt");
            foreach (string filename in fileList)
            {
                string testData = File.ReadAllText(filename);
                string solutionData = File.ReadAllText(filename.Replace(@"\Trial", @"\Solution"));
                cartList basket = new cartList();
                string test = basket.CreateShoppingList(testData);
                if (test != solutionData)
                {
                    Assert.Fail($"{filename} failed assertion\n" + test + "\n---\n" + solutionData);
                }
            }
        }
    }
}
