
/*
Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

This is a short-length challenge, but requires some clever thinking.

Given two lists, find the smallest difference (subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference.*/

//solution:


var array1 = [10, 20, 14, 16, 18];
var array2 = [30, 23, 54, 33, 96];
var leastDifference,array1Index,array2Index;

for(i=0;i<array1.length;i++)
{
    for(j=0;j<array2.length;j++)
    {
        if(i==0 & j==0)
        {
            leastDifference=array1[i]-array2[j];
            if(leastDifference<0)
                leastDifference= -leastDifference
            array1Index=i;
            array2Index=j;
        }
        else
        {
            tempDifference=array1[i]-array2[j]
            
            if(tempDifference<0)
                tempDifference = -tempDifference
    
            if(tempDifference < leastDifference)
            {
                leastDifference=tempDifference;  
                array1Index=i;
                array2Index=j;
            }     
          }
    }
}

console.log("Least Difference Is::"+leastDifference + "::Array 1 Index is::"+array1Index+ "::Array 2 Index is::"+array2Index)