//#1
function reverse_number(num){
    let res="";
    if(num %10 ===0){
        console.log("The number cannot reverse");
    }else{
        while(num>0){
            let n=num;
            res=res+(n%10).toString();
            num=num/10 >>0;
        }
    }
    console.log("The original num is: "+num);
    console.log("The reverse number is: "+res);

    document.getElementById("question1").innerHTML="The answer of this question is: "+parseInt(res);
}
reverse_number(101);

console.log("-----------------");

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
console.log( s1+" is palindrome? "+check_palindrome(s1));
console.log( s2+" is palindrome? "+check_palindrome(s2));
document.getElementById("question2").innerHTML="The "+s1+" is ~~~ palindrome? "+check_palindrome(s1);
document.getElementById("question2_b").innerHTML="The "+s2+" is ~~~ palindrome? "+check_palindrome(s2);
console.log("-----------------");


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
console.log("The generated array of "+s+" is: "+generate_arr(s));
document.getElementById("question3").innerHTML="The "+s+" to generate an arr: "+generate_arr(s);

console.log("-----------------");

//4
function alphabet_order(strs){
    return strs.split('').sort().join('');
}
var word4="webmaster";
console.log("The alphabet order of "+word4+" is: "+alphabet_order(word4));
document.getElementById("question4").innerHTML="The "+word4+" in alphabet order: "+alphabet_order(word4);
console.log("-----------------");

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
console.log("The changed upper case of "+word5+" is: "+change_upper(word5));
document.getElementById("question5").innerHTML="The "+word5+" to change: "+change_upper(word5);
console.log("-----------------");


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
    console.log("The max length in "+str+" is: "+max+" is: "+maxlength);
    return document.getElementById("question6").innerHTML="The maximum length in "+str+" is: "+max;
}
max_str("Web Development Tutorial");
console.log("-----------------");


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
    console.log("The count of vowels in "+str+" is: "+count);
    return document.getElementById("question7").innerHTML="The number of vowels in "+str+" is: "+count;
}
count_vowel("The quick brown fox");
console.log("-----------------");


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
    console.log("Congratulations! The number "+num+" is prime.");
    document.getElementById("question8").innerHTML="Congratulations! The number "+num+" is prime.";
}
else{
    console.log("Sorry! The number "+num+" is not prime.");
    document.getElementById("question8").innerHTML="Sorry, the number "+num+" is not prime.";
}
console.log("-----------------");


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
var parm=false;
console.log("The type of the "+parm+" is "+typeofargument(parm));
document.getElementById("question9").innerHTML="The type of "+parm+" is: "+typeofargument(parm);
console.log("-----------------");


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
    console.log("THe result of "+n+"*"+n+" matrix is: ");
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
console.log("-----------------");


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
console.log("-----------------");

//#12
function perfect_number(num){
    var count=0;
    for(var i=1; i<num; i++){
        if(num%i === 0){
            count+=i;
        }
    }
    if(count === num && count!== 0){
        console.log("This number "+num+ " is perfect");
    }else{
        console.log("This number "+num+" is not perfect");
    }
}
perfect_number(23);
perfect_number(6);
perfect_number(496);
console.log("-----------------");


//#13
function factors_number(num){
    if(num ===0){console.log("0 is not a factor of any number");} 
    else{
        var arrFactors=[];
        for(var i=1; i<=num; i++){
            if(num%i === 0){
                arrFactors.push(i);
            }
        }
        return arrFactors;
    }
}
console.log("The "+23+" factors has "+factors_number(23));
console.log("The "+6+" factors has "+factors_number(6));
console.log("The "+496+" factors has "+factors_number(496));
console.log("-----------------");


//#14
function amountTocoins(price, arr){
    if(price===0){
        return [];
    }else{
        if(price>=arr[0]){
            var new_price=price-arr[0];
            return [arr[0]].concat(amountTocoins(new_price, arr));
        }else{
            arr.shift();
            return amountTocoins(price, arr);

        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
console.log(amountTocoins(1, [25, 10, 5, 2, 1]));
console.log(amountTocoins(0, [25, 10, 5, 2, 1]));
console.log("-----------------");


//#15
function exponent(b, n){
    var res=1;
    for(var i=1; i<=n; i++){
        res=res*b;
    }
    return res;
}
console.log("HTe answer of base is 2 and n is 3: "+exponent(2, 3));
console.log("HTe answer of base is 3 and n is 3: "+exponent(3, 3));
console.log("HTe answer of base is 3 and n is 2: "+exponent(3, 2));
console.log("The answer of base is 7 and n is 4: "+exponent(7, 4));
console.log("The answer of base is 5 and n is 0 "+exponent(5, 0));
console.log("-----------------");


//#16
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
var str_16="thequickbrownfoxjumpsoverthelazydog";
console.log("unique_char of "+str_16+": " + unique_char(str_16));
console.log("-----------------");

//#17
function frequency(str){
    return str.split("").reduce(function(arr, ch){
        if(arr.hasOwnProperty(ch)){
            arr[ch]++;
        }else{
        arr[ch]=1;
        }
        return arr;
    }, {});
}
var str_17="thequickbrownfoxjumpsoverthelazydog";
var result=frequency("thequickbrownfoxjumpsoverthelazydog");
console.log("frequency of each elements in "+str_17+": ");
console.log(result);
console.log("-----------------");

//#18
function binarysearch(arr, target){
    var low=0;
    var high=arr.length-1;
    var mid=0;
    while(low<=high){
        mid=(low+high)/2 >>0;
        if(arr[mid]==target){
            return mid;
        }else if(target>arr[mid]){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return -1;
}
var arr=[4,8,9,11,15,18,19,23,25];
var target=8;
if(binarysearch(arr,target)>=0){
    console.log("index of "+target+" in "+arr.toString()+": "+binarysearch(arr,target));
}else{
    console.log("index of "+target+" in "+arr.toString()+" not found");
}
console.log("-----------------");

//#19
var num_arr=[6, 46, 54, 6, 56, 54, 65, 4, 65, 22,30], target=25;
var larger_arr=(num_arr, num_19) =>num_arr.filter(n => n>num_19);
console.log("larger than "+target+" in "+num_arr.toString()+": ");
console.log(larger_arr(num_arr, target));
console.log("-----------------");

//#20
function generate_id(length){
    var id_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result="";
    for(var i=0; i<length; i++){
        result+=id_list.charAt(Math.random()*id_list.length);
    }
    return result;
}
console.log("id generated: "+generate_id(20));
console.log("-----------------");

//#21
const combinations = arr => arr.reduce((array, item) => {
    return array.concat(array.map(x => [...x, item]));
  }, [[]]
);
var arr_21=[1, 2, 3], len=2;
console.log("The subset in "+arr_21.toString()+" is ");
console.log(combinations(arr_21).filter(a => a.length >= len));
console.log("-----------------");

//#22
function frequency_special_letter(str, target_char){
    var count=0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)==target_char){
            count++;
        }
    }
    return count;
}

var str_22="microsoft.com", target_22='o';
console.log("The frequency "+target_22+" in "+str_22+" : "+frequency_special_letter(str_22,'c'));
console.log("-----------------");

//#23
function fist_not_repeat(str){
    var output='';
    for(var i=0; i<str.length; i++){
        var sum=0;
        for(var j=0; j<str.length; j++){
            if(str.charAt(i)===str.charAt(j)){
                sum++;
            }
        }
        if(sum <2){
            output=str.charAt(i);
            break;
        }
    }
    return output;
}
var str_23="abacddbec";
console.log("fist not repeat in "+str_23+" : "+fist_not_repeat(str_23));
console.log("-----------------");

//#24
function bubblesort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] <  arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr_24=[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log("The array "+arr_24.toString()+" sorted by bubble sort is ");
console.log(bubblesort(arr_24));
console.log("-----------------");

//#25
function longest_str(str_arr){
    if(str_arr.length < 2){
        return str_arr[0];
    }
    var max=str_arr[0];
    for(var i=1; i<str_arr.length; i++){
        if(max.length<str_arr[i].length){
            max=str_arr[i];
        }
    }
    return max;
}
var str_arr_25=["Australia", "Germany", "United States of America"];
console.log("The longest string is "+longest_str(str_arr_25));
console.log("-----------------");

//#26
function longest_not_repeat(str){
    if(str.length<2){
        return str;
    }
    var  result="", max="";
    for(var i=0; i<str.length; i++){
        for(var j=i; j<str.length; j++){
            if(max.includes(str.charAt(i))){
                break;
            }else{
                max+=str.charAt(i);
            }
            if(max.length>result.length){
                result=max;
                max="";
            }
        }
    }
    return result;
}
var str_26="abcdaaa";
console.log("The longest not repeat string is "+longest_not_repeat(str_26));
console.log("-----------------");

//#27
function isPalindrome(s) {
    var rev = s.split('').reverse().join('');
    return s == rev;
}
function longestPalindrome(s) {
    var max = "";
    for (var i = 0; i < s.length; i++) {
        var sub = s.substr(i, s.length);
        if (sub.length <= max.length) break; 
        for (var j = sub.length; j >= 0; j--) {
            var sub_subs = sub.substr(0, j);
            if (sub_subs.length <= max.length) break; 
            if (isPalindrome(sub_subs)) {
                 max = sub_subs.length;
                 max = sub_subs;
            }
        }
    }
    return max;
}
console.log("The longest palindrome is " + longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
console.log("-----------------");

//#28
function mycar(){
    const carobj={
        name: "Honda",
        year: 2009,
    }
    return carobj.name;
}
function print_car(user, func) {
    return user + " used "+func;
}
console.log("The new function is "+print_car("andy", mycar()));
console.log("-----------------");

//#29
function happybirthday(){
    console.log(arguments.callee.name);
}
console.log("Get the function name: ");
happybirthday();



