//Modulo of 12 and 6 is 0
#include<stdio.h>
main(){
	
	int a, b, mod;
	
	printf("Enter value of a : ");
	scanf("%d", &a);  
	printf("\nEnter value of b : ");
	scanf("%d", &b);
	
	mod = a % b;
	printf("\nSum of %d and %d is : %d" ,a, b, mod);
	
}
  
