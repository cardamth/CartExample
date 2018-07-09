<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CartExample.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>

    <script src="~/Script/ShoppingList.js"></script>
    <script src="~/Script/Item.js"></script>
    <script src="~/Script/Cart.js"></script>
    <script src="~/Script/Helper.js"></script>
    <script src="~/Script/Taxes.js"></script>
    <script>
        function testdata() {
            var inputTextBox = document.getElementById('<%= TextBoxTestData.ClientID %>').innerText;
            var outputTextBox = document.getElementById('TextBoxSolution').innerHTML;

            var greet = new Greeter("world");
            var test = greeter.greet;
            alert(test);


            var shop = new ShoppingList();            
            var list = shop.createShoppingList(inputTextBox);
            alert(list);
        }
    </script>

    <div class="row"> 
        <div>
            Load Test Examples
        </div>
        <div>
            <asp:Button id="TestButton1" Text="Test1" runat="server" OnClick="TestButton1_Click"></asp:Button>
            <asp:Button id="TestButton2" Text="Test2" runat="server" OnClick="TestButton2_Click"></asp:Button>
            <asp:Button id="TestButton3" Text="Test3" runat="server" OnClick="TestButton3_Click"></asp:Button>
        </div>
    </div>
    <div>Test Data</div>
    <asp:TextBox runat="server" Width="1000px" Height="150px" TextMode="MultiLine" ID="TextBoxTestData" ></asp:TextBox> 
    <div></div>
    <div>
        <!-- <button id="TestData" title="Run Test Data" onclick="testdata();" >Run Test Data</button> -->
        <asp:Button ID ="TestDataC" Text="Run Test Data C#" runat="server" OnClick="TestDataC_Click" />
    </div>
        <div>Solution Data</div>
        <asp:TextBox runat="server" Width="1000px" Height="150px" TextMode="MultiLine" ID="TextBoxSolution" ></asp:TextBox> 
    </div>
    </form>
</body>
</html>


