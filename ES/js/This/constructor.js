function Parent(){
    this.name='baba'
    this.method = function() {
        // this 指向全局对象
        console.log(this)   // 输出window  第二个this
        console.log(this.name); // 输出：undefined   第二个this
    };
    setTimeout(this.method, 500);  // this指向Foo的实例对象  第一个this
}
var p=new Parent()
p.method()