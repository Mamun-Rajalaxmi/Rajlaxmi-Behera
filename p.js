class A
{
    xyz(a)
    {
        console.log("parent class method")
    }
}
    class B extends A
    {
        xyz(a)
        {
            console.log("child class method")
        }
    }
    let obj=new A()
        obj.xyz(10)
    let c=new B()
        c.xyz(5)