#include <stdio.h>

int main() 
 {
   float mathsmarks, engmarks,scimarks;
   float averagemarks;
 printf("enter the mathsmarks :");
 scanf("%f",&mathsmarks);
 
 printf("enter the engmarks :");
 scanf("%f",&engmarks);
 
 printf("enter the scimarks :");
 scanf("%f",scimarks);
 
 averagemarks=(mathsmarks+engmarks+scimarks)/3;
 printf("averagemarks : %f", averagemarks);
}
