/**
 * Created by dell liangyq on 2017/7/25.
 */
var n1=$("#num1").value;
var n2=$("#num2").value;
var n3=$("#num3").value;
var sum=n1+n2+n3;
$(document).ready(function () {


    function choujiang() {

    }






});



function validate_required(one,two,three,alerttxt)
{

    if (one.value==null||one.value==""||two.value==null||two.value==""||three.value==null||three.value=="")
    {alert(alerttxt);return false}
    else {return true}

}

function validate_form(thisform)
{
    with (thisform)
    {
        if (validate_required(one,two,three,"must be filled out!")==false)
        {one.focus();return false}
        else alert("您已成功提交，总数为"+sum);
    }
}
// function overData(one,two,three){
//     var text1=one.value;
//     var text2=two.value;
//     var text3=three.value;
//
// }

/*var text1=new Array();
 text1[0]="fasfasdf";
 var person={
 firstname:"bill",
 lastname:"gate",
 id: 5656
 var hh(){
 }
 };
 var name=person.lastname;
 name=null;
 var a;
 var b=new String;
 var x= new Number;
 var s="hello";
 var ss=s.length;//计算长度
 txt1="What a very";
 txt2="nice day";
 txt3=txt1+txt2;
 function myFunction(var xxx,var xxx2,var xxx3){
 document.write("heihei");
 return xxx;
 }
 var x=document.getElementById("main");
 var y=x.getElementsByTagName("p");
 */


