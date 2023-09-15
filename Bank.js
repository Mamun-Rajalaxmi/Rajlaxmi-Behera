class Bank
{
    constructor(name1,phno,adhar,bal,pin)
    {
        this.name1=name1
        this.phno=phno
        this.adhar=adhar
        this.bal=bal
        this.pin=pin
    }
    display()
    {
         var p=Number(prompt("Enter Your Pin:"))
         if(this.pin==p)
         {
            alert("your name is"+this.name1+"your balance is"+this.bal)
         }
        else{
            alert("incorrect pin")
        }
    }
    deposite()
    {
        var p=Number(prompt("Enter Your pin:"))
       if (this.pin==pin)
       {
        var a=Number(prompt("Enter Your Amount:"))
        alert("previous amount is"+this.bal)
        this.bal=this.bal+a
        alert("your current amount is"+this.bal)
       }
       else
       {
        alert("incorrect pin")
       }
    }
    withdraw()
    {
        var p=Number(prompt("Enter Your Pin:"))
        if(this.pin==p)
        {
            var a=Number(prompt("Enter Your Amount:"))
            if(a<=this.bal)
            {
                alert("your previous balance is"+this.bal)
                this.bal=this.bal-a
                alert("Your Current Balance is"+this.bal)
            }
            else{
                alert("insufficent balance")
            }
        }
            else
            {
               alert("incorrect pin")
            }
        }
}
alert("Welcome To My Bank")
var n=prompt("Enter Your Name:")
var ph=Number(prompt("Enter Your phno:"))
var adh=Number(prompt("Enetr Your Adhar:"))
var b=Number(prompt("Enetr Your balance:"))
var pi=Number(prompt("Enter Your pin:"))

let obj=new Bank(n,ph,adh,a,pi)
var k=Number(prompt("Enetr Your choice1 for inquary2 for deposite and 3 withdra"))
if(k==1)
{
    obj.display()
}
else if(k==3)
{
    obj.deposite()
}
else if(k==3)
{
    obj.withdraw()
}
else{
    alert("invalid input")
}