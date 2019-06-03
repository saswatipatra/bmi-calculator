var height = parseInt(prompt("Enter your height in inches (in):"));
var weight = parseInt(prompt("Enter your weight in pound (lb) :"));

var square = function(height)
{
  return height * height;
};
var bmi = function(height, weight)
{
  var result = (weight/square(height)*703) ;
  return result;
  
};



alert("Your BMI is : " + bmi(height,weight));
