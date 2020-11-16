/*requirement

Create new index.js file, write program output 9*9 times table. The output is as follows：

```
1*1=1
2*1=2 2*2=4
3*1=3 3*2=6 3*3=9
……
9*1=9 9*2=18 9*3=27 …… 9*9=81 */

var num=0;
    for(var i=1 ;i<10;i++){
        for(var j=1;j<10;j++){
            num=i*j;
            //If the product is a single digit, add two spaces in front to keep the queue
            if(num/10<1){
                num="&nbsp;&nbsp;"+i*j;
            }
            if(j<=i) {
                document.write(j + "*" + i + "=" + num + "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }