document.addEventListener('DOMContentLoaded',()=>{
    const dropdown2Options=document.getElementsByClassName("dropdown2Options");
    const dropdown3Options=document.getElementsByClassName("dropdown3Options");
    for(let j=0;j<dropdown2Options.length;j++){
        dropdown2Options[j].style.display="none";
        dropdown3Options[j].style.display="none";
    }
});
function selectedOption(){
    const dropdown1=document.getElementById("dropdown1");
    const dropdown2Options=document.getElementsByClassName("dropdown2Options");
    const dropdown3Options=document.getElementsByClassName("dropdown3Options");
    const dropdown1SelectedOption= dropdown1.options[dropdown1.selectedIndex];
    const dropdown2=document.getElementById("dropdown2");
    for(let j=0;j<dropdown2Options.length;j++){
        dropdown2Options[j].style.display="none";
        dropdown3Options[j].style.display="none";
    }
    if(dropdown1SelectedOption.text=="Length"){
       
        for(let i=0;i<dropdown2Options.length-13;i++){
           dropdown2Options[i].style.display="contents";
           dropdown3Options[i].style.display="contents";
        }
    }
    else if(dropdown1SelectedOption.text=="Temprature"){
        for(let i=5;i<dropdown2Options.length-10;i++){
        dropdown2Options[i].style.display="contents";
        dropdown3Options[i].style.display="contents";
        }
    }
    else if(dropdown1SelectedOption.text=="Volume"){
        for(let i=8;i<dropdown2Options.length-5;i++){
        dropdown2Options[i].style.display="contents";
        dropdown3Options[i].style.display="contents";
        }
    }
    else{
        for(let i=13;i<dropdown2Options.length;i++){
        dropdown2Options[i].style.display="contents";
        dropdown3Options[i].style.display="contents";
        }
    }
   
}

/*const dropdown2Options=document.getElementById("dropdown2Options");
const dropdown3Options=document.getElementById("dropdown3Options");
for(let i=0;i<dropdown2Options.length;i++){
    dropdown2Options[i].style.display="contents";
    dropdown3Options[i].style.display="contents";
}*/

function inputCalculation(){
    const input1=document.getElementById("input1");
    const input2=document.getElementById("input2");
    const rule=document.getElementById("rule");
    const dropdown1=document.getElementById("dropdown1");
    const dropdown2=document.getElementById("dropdown2");
    const dropdown3=document.getElementById("dropdown3");
    const dropdown2SelectedOption=dropdown2.options[dropdown2.selectedIndex];
    const dropdown3SelectedOption=dropdown3.options[dropdown3.selectedIndex];
    const dropdown1SelectedOption=dropdown1.options[dropdown1.selectedIndex];
    if(dropdown1SelectedOption.text=="Choose Measure"){
        rule.innerHTML="Instruction: Please select a measure."
    }
    else if(dropdown2SelectedOption.text=="Choose Unit" || dropdown3SelectedOption.text=="Choose Unit"){
        rule.innerHTML="Instruction: Please select both units.";
    }
    else if(dropdown2SelectedOption.text==dropdown3SelectedOption.text){
         input2.value=input1.value*1;
       rule.innerHTML="Rule: both unit are same.";
     }
    else if(dropdown2SelectedOption.text=="Centimetre" && dropdown3SelectedOption.text=="Kilometre"){
        input2.value=input1.value/100000;
        rule.innerHTML="Rule: divide the length by 100000.";
    }
    else if(dropdown2SelectedOption.text=="Centimetre" && dropdown3SelectedOption.text=="Metre"){
        input2.value=input1.value/100;
        rule.innerHTML="Rule: divide the length by 100.";
    }
    else if(dropdown2SelectedOption.text=="Centimetre" && dropdown3SelectedOption.text=="Foot"){
        input2.value=input1.value/30.48;
        rule.innerHTML="Rule: divide the length by 30.48.";
    }
    else if(dropdown2SelectedOption.text=="Centimetre" && dropdown3SelectedOption.text=="Inch"){
        input2.value=input1.value/2.54;
        rule.innerHTML="Rule: divide the length by 2.54.";
    }
    else if(dropdown2SelectedOption.text=="Metre" && dropdown3SelectedOption.text=="Centimetre"){
        input2.value=input1.value*100;
        rule.innerHTML="Rule: multiply the length by 100";
    }
    else if(dropdown2SelectedOption.text=="Metre" && dropdown3SelectedOption.text=="Kilometre"){
        input2.value=input1.value/1000;
        rule.innerHTML="Rule: divide the length by 1000";
    }
   else if(dropdown2SelectedOption.text=="Metre" && dropdown3SelectedOption.text=="Foot"){
        input2.value=input1.value*3.281;
        rule.innerHTML="Rule: for an approximate result, multiply the length value by 3.281";
    }
    else if(dropdown2SelectedOption.text=="Metre" && dropdown3SelectedOption.text=="Inch"){
        input2.value=input1.value*39.37;
        rule.innerHTML="Rule: multiply the length value by 39.37";
    }
    else if(dropdown2SelectedOption.text=="Kilometre" && dropdown3SelectedOption.text=="Centimetre"){
        input2.value=input1.value*100000;
        rule.innerHTML="Rule: multiply the length value by 100000";
    }
    else if(dropdown2SelectedOption.text=="Kilometre" && dropdown3SelectedOption.text=="Metre"){
        input2.value=input1.value*1000;
        rule.innerHTML="Rule: multiply the length value by 1000";
    }
    else if(dropdown2SelectedOption.text=="Kilometre" && dropdown3SelectedOption.text=="Foot"){
        input2.value=input1.value*3281;
        rule.innerHTML="Rule: for an approximate result, multiply the length value by 3281";
    }
    else if(dropdown2SelectedOption.text=="Kilometre" && dropdown3SelectedOption.text=="Inch"){
        input2.value=input1.value*39370;
        rule.innerHTML="Rule: for an approximate result, multiply the length value by 39370";
    }
    else if(dropdown2SelectedOption.text=="Foot" && dropdown3SelectedOption.text=="Centimetre"){
        input2.value=input1.value*30.48;
        rule.innerHTML="Rule: multiply the length value by 30.48";
    }
    else if(dropdown2SelectedOption.text=="Foot" && dropdown3SelectedOption.text=="Metre"){
        input2.value=input1.value/3.281;
        rule.innerHTML="Rule: divide the length value by 3.281";
    }
    else if(dropdown2SelectedOption.text=="Foot" && dropdown3SelectedOption.text=="Kilometre"){
        input2.value=input1.value/3281;
        rule.innerHTML="Rule: divide the length value by 3281";
    }
    else if(dropdown2SelectedOption.text=="Foot" && dropdown3SelectedOption.text=="Inch"){
        input2.value=input1.value*12;
        rule.innerHTML="Rule: multiply the length value by 12";
    }
    else if(dropdown2SelectedOption.text=="Inch" && dropdown3SelectedOption.text=="Centimetre"){
        input2.value=input1.value*2.54;
        rule.innerHTML="Rule: multiply the length value by 2.54";
    }
    else if(dropdown2SelectedOption.text=="Inch" && dropdown3SelectedOption.text=="Metre"){
        input2.value=input1.value/39.37;
        rule.innerHTML="Rule: divide the length value by 39.37";
    }
    else if(dropdown2SelectedOption.text=="Inch" && dropdown3SelectedOption.text=="Kilometre"){
        input2.value=input1.value/39370;
        rule.innerHTML="Rule: divide the length value by 39370";
    }
    else if(dropdown2SelectedOption.text=="Inch" && dropdown3SelectedOption.text=="Foot"){
        input2.value=input1.value/12;
        rule.innerHTML="Rule: divide the length value by 12";
    }
    else if(dropdown2SelectedOption.text=="Litre" && dropdown3SelectedOption.text=="Milliletre"){
        input2.value=input1.value*1000;
        rule.innerHTML="Rule: multiply the volume value by 1000";
    }
    else if(dropdown2SelectedOption.text=="Litre" && dropdown3SelectedOption.text=="Cubic Metre"){
        input2.value=input1.value/1000;
        rule.innerHTML="Rule: divide the volume value by 1000";
    }
    else if(dropdown2SelectedOption.text=="Litre" && dropdown3SelectedOption.text=="Cubic Foot"){
        input2.value=input1.value/28.317;
        rule.innerHTML="Rule: for an approximate result, divide the volume value by 28.317";
    }
    else if(dropdown2SelectedOption.text=="Litre" && dropdown3SelectedOption.text=="Cubic Inch"){
        input2.value=input1.value*61.204;
        rule.innerHTML="Rule: for an approximate result, multiply the volume value by 61.024";
    }
    else if(dropdown2SelectedOption.text=="Milliletre" && dropdown3SelectedOption.text=="Litre"){
        input2.value=input1.value/1000;
        rule.innerHTML="Rule: divide the volume value by 1000";
    }
    else if(dropdown2SelectedOption.text=="Milliletre" && dropdown3SelectedOption.text=="Cubic Metre"){
        input2.value=input1.value/1000000000;
        rule.innerHTML="Rule: divide the volume value by 1000000000";
    }
    else if(dropdown2SelectedOption.text=="Milliletre" && dropdown3SelectedOption.text=="Cubic Foot"){
        input2.value=input1.value/28320;
        rule.innerHTML="Rule: for an approximate result, divide the volume value by 28320";
    }
    else if(dropdown2SelectedOption.text=="Milliletre" && dropdown3SelectedOption.text=="Cubic Inch"){
        input2.value=input1.value/16.387;
        rule.innerHTML="Rule: divide the volume value by 16.387";
    }
    else if(dropdown2SelectedOption.text=="Cubic Metre" && dropdown3SelectedOption.text=="Milliletre"){
        input2.value=input1.value*1000000000;
        rule.innerHTML="Rule: multiply the volume value by 1000000000";
    }
    else if(dropdown2SelectedOption.text=="Cubic Metre" && dropdown3SelectedOption.text=="Litre"){
        input2.value=input1.value*1000;
        rule.innerHTML="Rule: multiply the volume value by 1000";
    }
    else if(dropdown2SelectedOption.text=="Cubic Metre" && dropdown3SelectedOption.text=="Cubic Foot"){
        input2.value=input1.value*35.315;
        rule.innerHTML="Rule: for an approximate result, multiply the volume value by 35.315";
    }
    else if(dropdown2SelectedOption.text=="Cubic Metre" && dropdown3SelectedOption.text=="Cubic Inch"){
        input2.value=input1.value*61020;
        rule.innerHTML="Rule: for an approximate result, multiply the volume value by 61020";
    }
    else if(dropdown2SelectedOption.text=="Cubic Foot" && dropdown3SelectedOption.text=="Milliletre"){
        input2.value=input1.value*28320;
        rule.innerHTML="Rule: for an approximate result, multiply the volume value by 28320";
    }
    else if(dropdown2SelectedOption.text=="Cubic Foot" && dropdown3SelectedOption.text=="Letre"){
        input2.value=input1.value*28.317;
        rule.innerHTML="Rule: for an approximate result, multiply the volume value by 28.317";
    }
    else if(dropdown2SelectedOption.text=="Cubic Foot" && dropdown3SelectedOption.text=="Cubic Metre"){
        input2.value=input1.value/35.315;
        rule.innerHTML="Rule: for an approximate result, divide the volume value by 35.315";
    }
    else if(dropdown2SelectedOption.text=="Cubic Foot" && dropdown3SelectedOption.text=="Cubic Inch"){
        input2.value=input1.value*1728;
        rule.innerHTML="Rule: multiply the volume value by 1728";
    }
    else if(dropdown2SelectedOption.text=="Cubic Inch" && dropdown3SelectedOption.text=="Milliletre"){
        input2.value=input1.value*16.387;
        rule.innerHTML="Rule: multiply the volume value by 16.387";
    }
    else if(dropdown2SelectedOption.text=="Cubic Inch" && dropdown3SelectedOption.text=="Letre"){
        input2.value=input1.value/61.204;
        rule.innerHTML="Rule: for an approximate result, divide the volume value by 61.024";
    }
    else if(dropdown2SelectedOption.text=="Cubic Inch" && dropdown3SelectedOption.text=="Cubic Metre"){
        input2.value=input1.value/61020;
        rule.innerHTML="Rule: for an approximate result, divide the volume value by 61020";
    }
    else if(dropdown2SelectedOption.text=="Cubic Inch" && dropdown3SelectedOption.text=="Cubic Foot"){
        input2.value=input1.value/1728;
        rule.innerHTML="Rule: divide the volume value by 1728";
    }
    else if(dropdown2SelectedOption.text=="Kilogram" && dropdown3SelectedOption.text=="Gram"){
        input2.value=input1.value*1000;
        rule.innerHTML="Rule: multiply the Weight value by 1000.";
    }
    else if(dropdown2SelectedOption.text=="Kilogram" && dropdown3SelectedOption.text=="Milligram"){
        input2.value=input1.value*1000000;
        rule.innerHTML="Rule: multiply the Weight value by 1000000.";
    }
    else if(dropdown2SelectedOption.text=="Kilogram" && dropdown3SelectedOption.text=="Tonne"){
        input2.value=input1.value/1000;
        rule.innerHTML="Rule: divide the Weight value by 1000.";
    }
    else if(dropdown2SelectedOption.text=="Kilogram" && dropdown3SelectedOption.text=="Pound"){
        input2.value=input1.value*2.205;
        rule.innerHTML="Rule: for an approximate result, multiply the weight value by 2.205";
    }
    else if(dropdown2SelectedOption.text=="Gram" && dropdown3SelectedOption.text=="Kilogram"){
        input2.value=input1.value/1000;
        rule.innerHTML="Rule: divide the weight by 1000.";
    }
    else if(dropdown2SelectedOption.text=="Gram" && dropdown3SelectedOption.text=="Milligram"){
       input2.value=input1.value*1000;
        rule.innerHTML="Rule: multiply the Weight value by 1000.";
    }
    else if(dropdown2SelectedOption.text=="Gram" && dropdown3SelectedOption.text=="Tonne"){
        input2.value=input1.value/1000000;
         rule.innerHTML="Rule: divide the Weight value by 1000000.";
     }
    else if(dropdown2SelectedOption.text=="Gram" && dropdown3SelectedOption.text=="Pound"){
        input2.value=input1.value/453.6;
         rule.innerHTML="Rule: for an approximate result, divide the mass value by 453.6";
     }
    else if(dropdown2SelectedOption.text=="Milligram" && dropdown3SelectedOption.text=="Gram"){
        input2.value=input1.value/1000;
        rule.innerHTML="Rule: divide the Weight value by 1000.";
    }
    else if(dropdown2SelectedOption.text=="Milligram" && dropdown3SelectedOption.text=="Kilogram"){
        input2.value=input1.value/1000000;
        rule.innerHTML="Rule: divide the Weight value by 1000000.";
    }
    else if(dropdown2SelectedOption.text=="Milligram" && dropdown3SelectedOption.text=="Tonne"){
        input2.value=input1.value/1000000000;
        rule.innerHTML="Rule: divide the Weight value by 1000000000.";
    }
    else if(dropdown2SelectedOption.text=="Milligram" && dropdown3SelectedOption.text=="Pound"){
        input2.value=input1.value/453600;
        rule.innerHTML="Rule: for an approximate result, divide the mass value by 453600";
    }
    else if(dropdown2SelectedOption.text=="Tonne" && dropdown3SelectedOption.text=="Kilogram"){
        input2.value=input1.value*1000;
        rule.innerHTML="Rule: multiply the Weight value by 1000.";
    }
    else if(dropdown2SelectedOption.text=="Tonne" && dropdown3SelectedOption.text=="Gram"){
        input2.value=input1.value*1000000;
         rule.innerHTML="Rule: multiply the Weight value by 1000000.";
    }
    else if(dropdown2SelectedOption.text=="Tonne" && dropdown3SelectedOption.text=="Milligram"){
        input2.value=input1.value*1000000000;
        rule.innerHTML="Rule: multiply the Weight value by 1000000000.";
    }
    else if(dropdown2SelectedOption.text=="Tonne" && dropdown3SelectedOption.text=="Pound"){
        input2.value=input1.value*2205;
        rule.innerHTML="Rule: for an approximate result, multiply the mass value by 2205.";
    }
    else if(dropdown2SelectedOption.text=="Pound" && dropdown3SelectedOption.text=="Kilogram"){
        input2.value=input1.value/2.205;
        rule.innerHTML="Rule: for an approximate result, divide the weight value by 2.205";
    }
    else if(dropdown2SelectedOption.text=="Pound" && dropdown3SelectedOption.text=="Gram"){
        input2.value=input1.value*453.6;
         rule.innerHTML="Rule: for an approximate result, multiply the mass value by 453.6";
    }
    else if(dropdown2SelectedOption.text=="Pound" && dropdown3SelectedOption.text=="Milligram"){
        input2.value=input1.value*453600;
        rule.innerHTML="Rule: for an approximate result, multiply the mass value by 453600";
    }
    else if(dropdown2SelectedOption.text=="Pound" && dropdown3SelectedOption.text=="Tonne"){
        input2.value=input1.value/2205;
        rule.innerHTML="Rule: for an approximate result, divide the mass value by 2205.";
    } 
    else if(dropdown2SelectedOption.text=="Degree Celsius" && dropdown3SelectedOption.text=="Fahrenheit"){
        input2.value=(input1.value*1.8)+32;
        rule.innerHTML=`Rule: (${input1.value}°C × 9/5) + 32 = ${input2.value}°F`;
    }
    else if(dropdown2SelectedOption.text=="Degree Celsius" && dropdown3SelectedOption.text=="Kelvin"){
        input2.value=(input1.value)+(273.15);
        rule.innerHTML=`Rule: (${input1.value}°C × 9/5) + 32 = ${input2.value}°F`;
    }
    else if(dropdown2SelectedOption.text=="Fahrenheit" && dropdown3SelectedOption.text=="Degree Celsius"){
        input2.value=(input1.value-32)*(5/9);
        rule.innerHTML=`Rule: (${input1.value}°F − 32) × 5/9 = ${input2.value}°C`;
    }
    else if(dropdown2SelectedOption.text=="Fahrenheit" && dropdown3SelectedOption.text=="Kelvin"){
        input2.value=(input1.value-32)*(5/9)+273.15;
        rule.innerHTML=`Rule: (${input1.value}°F − 32) × 5/9 + 273.15 = ${input2.value}K`;
    }
    else if(dropdown2SelectedOption.text=="Kelvin" && dropdown3SelectedOption.text=="Degree Celsius"){
        input2.value=input1.value-273.15;
        rule.innerHTML=`Rule: ${input1.value}K − 273.15 = ${input2.value}°C`;
    }
    else if(dropdown2SelectedOption.text=="Kelvin" && dropdown3SelectedOption.text=="Fahrenheit"){
        input2.value=((input1.value-273.15)*1.8)+32;
        rule.innerHTML=`Rule: (${input1.value}K − 273.15) × 9/5 + 32 = ${input2.value}°F`;
    } 
    else{
        rule.innerHTML="thank you";
    }
}
  

