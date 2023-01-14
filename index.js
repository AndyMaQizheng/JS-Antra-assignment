//#1
function reverse_number(num){
    let res="";
    if(num %10 ===0){
        console.log("The enter cannot reverse");
    }else{
        while(num>0){
            let n=num;
            res=res+(n%10).toString();
            num=num/10 >>0;
        }
    }
    document.getElementById("question1").innerHTML="The answer of this question is: "+parseInt(res);
}
reverse_number(101);


//#2
function check_palindrome(word){
    let right=word.length-1, left=0;
    while(right>left){
        if(word[left] !== word[right]){
            return false;
        }
        right--;
        left++;
    }
    return true;
}
var s1="woaw";
var s2="helleh"
document.getElementById("question2").innerHTML="The "+s1+" is ~~~ palindrome? "+check_palindrome(s1);
document.getElementById("question2_b").innerHTML="The "+s2+" is ~~~ palindrome? "+check_palindrome(s2);


//#3
function generate_arr(word){
    var arr= [];
    for(var i=0; i<word.length; i++){
        for(var j=1; j<=word.length-i; j++){
            arr.push(word.substr(i,j));
        }
    }
    return arr;
}
var s="dog";
document.getElementById("question3").innerHTML="The "+s+" to generate an arr: "+generate_arr(s);

//4
function alphabet_order(strs){
    return strs.split('').sort().join('');
}
var word4="webmaster";
document.getElementById("question4").innerHTML="The "+word4+" in alphabet order: "+alphabet_order(word4);

//#5
function change_upper(str){
    var arr=str.split(' ');
    var newarr=[];
    for(var i=0; i<arr.length; i++){
        newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return newarr.join(' ');
}
var word5="the quick brown fox";
document.getElementById("question5").innerHTML="The "+word5+" to change: "+change_upper(word5);

//#6
function max_str(str){
    var arr=str.split(' ');
    var maxlength=arr[0].length, max=arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i].length>maxlength){
            maxlength=arr[i].length;
            max=arr[i];
        }
    }
    return document.getElementById("question6").innerHTML="The maximum length in "+str+" is: "+max;
}
max_str("Web Development Tutorial");

//#7
function count_vowel(str){
    var vowel=['a', 'e', 'i', 'o', 'u'];
    var count=0;
    var arr=str.toLowerCase().split(' ');
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            if(vowel.includes(arr[i].charAt(j))){
                count++;
            }
        }
    }
    return document.getElementById("question7").innerHTML="The number of vowels in "+str+" is: "+count;
}
count_vowel("The quick brown fox");

//#8
function check_prime(num){
    if(num ===1) return false;
    else if(num ===2) return true;
    else{
        for(var i=2; i<=num/2; i++){
            if(num%i ===0){
                return false;
            }
        }
        return true;
    }
}
var num=13;
if(check_prime(num)){
    document.getElementById("question8").innerHTML="Congratulations! The number "+num+" is prime.";
}
else{
    document.getElementById("question8").innerHTML="Sorry, the number "+num+" is not prime.";
}


//#9
function typeofargument(parms){
    var types = [Function, RegExp, Number, String, Boolean, Object];
    if(typeof parms==="object" || parms==="function"){
        for(var i=0; i<types.length; i++){
            if(parms.localeCompare(types[i])==0) return types[i];
        }
    }
    return typeof parms;
}
var parm=false;;
document.getElementById("question9").innerHTML="The type of "+parm+" is: "+typeofargument(parm);


//#10
function matrix(n){
    var elements=[];
    var arrText='';
    
    for(var m=0; m<n; m++){
        elements.push([]);
    }
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            elements[i][j]=i*j+j;
        }
    }
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            arrText+=elements[i][j]+' ';
            document.getElementById("question10").innerHTML="The "+i+" row and "+j+" column element is "+elements[i][j];
            
        }
        console.log(arrText);
        arrText='';
    }
}
matrix(3);


//#11
function find_two_numbers(arr){
    arr=arr.sort();
    if(arr.length-2 === 1){
        console.log("The second lowest and second greatest number is:"+arr[1]);
    }else{
        console.log("The seconde lowest is "+arr[1]+" and the second greatest number is "+arr[arr.length-2]);
    }

}
find_two_numbers([1,2,3,5,7,4,9]);
find_two_numbers([1,4,3]);


//#12


function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

