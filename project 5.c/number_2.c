


#include<stdio.h>

int main (){
	int r,c,i,j;
	
	printf("enter row size : ");
	scanf("%d",&r);
	printf("enter colum size : ");
	scanf("%d",&c);
	
	int arr[r][c];
	printf ("array element : \n");
	for (i=0; i<r;i++){
		for(j=0;j<c;j++){
			printf("a[%d][%d]=",i,j);
			scanf("%d",&arr[i][j]);
			
		}	
		
	}
	int largest = arr[0][0];
	   for ( i = 0; i < r; i++) {
        for ( j = 0; j < c; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j]; 
            }
        }
    }
	
	printf("The largest element is: %d\n", largest);
	
}
