---------Java Script------------

---Output---
 1.Inner Html
   <script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>
 2.document.write()
 <script>
document.write(5 + 6);
</script>
 3.window.alert()
 <script>
window.alert(5 + 6);
</script>
 4.console.log()
 <script>
console.log(5 + 6);
</script>
5.Javascript Print
<button onclick="window.print()">Print this page</button>

-----Comments-----

def : Used to explain javascript code 

1.Single lilne Comments (using //)
2.Multiline Comments(using /* */)

----variable-----(container for storing values)

declared in 4 ways 

1.Automatically
2.var
3.let
4.const

note: 1.always declare variables
      2.use const- if the value should not be changed.
      3.use let-if cant use const
      4.variables must be identified with unique names called identifiers
      5.case sensitive.
      A variable declared without a value will have the value undefined.

--One statement , Many variables--
 <script>
 let person = "John Doe", carName = "Volvo", price = 200;
 </script>

 ----OPerators----

 Types 


Arithmetic 
Assignment 
Comparison 
String 
Logical 
Bitwise 
Ternary 
Type 

Assignment Operators 

= , += , -= , *= , /= , %= , **=

Comparision OPerators 

== , === ,!= , !== ,  > , < , >= , <= , ? 



adding String and NUmbers 
ex 1 : 
<script>
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5+ 4;

</Script>
 output : Hello54
  ex 2 : 
   <script>
   let x = 5 + 5;
let y = "5" + 5;
let z = 5+4+"hello"
   </script>
   output: 9hello


 ------DataTypes-----

 String , Number , bigint , boolean , undefined , null , symbol , object

 object data types:

 Object , array , date 

 --- JS String ---
 <script>

 // Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';
 
 let answer3 = 'He is called "Johnny"';
</script>

< JS Boolean> 
<script>

let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false

</script>





