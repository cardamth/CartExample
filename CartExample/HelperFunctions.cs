using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CartExample
{
    public static class HelperFunctions
    {
        private static string projectPath = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().GetName().CodeBase).Substring(6);
        private static string testDataPath = "\\TestData\\";
        private static string[] exemptList = { "book", "chocolate", "pill" };

        public static string ProjectPath(){
            return projectPath;
        }

        public static string TestDataPath()
        {
            return testDataPath;
        }

        public static string[] ExemptList()
        {
            return exemptList;
        }

        public static string FirstCharacterUpper(string data)
        {
            switch (data)
            {
                case null: return "";
                case "": return "";
                default: return data.First().ToString().ToUpper() + data.Substring(1);
            }
        }

        public static string FormatDuplicateDescription(string data)
        {
            return "'" + data + "'";
        }

        public static decimal RoundNickel(decimal number)
        {
            return Math.Ceiling(number * 20) / 20;
        }
    }
}