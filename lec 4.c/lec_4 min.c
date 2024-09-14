#include <stdio.h>

int main (){
	int num1,num2,num3;
	
	printf("enter the 1 number : ");
	scanf("%d", &num1);
	
	printf("enter the 2 number : ");
	scanf("%d",&num2);
	
	printf("enter the 3 number : ");
	scanf("%d",&num3);
	
	 int ans = (num1<num2?num1:num2);
	 ans =(ans<num3?ans:num3);
	printf("the minimum number is: %d ",ans);

	
}

