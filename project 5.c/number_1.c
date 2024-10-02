
#include <stdio.h>

int main() {
    int A,i,K;
    

    printf("Enter the array's size: ");
    scanf("%d", &A);

    int arr[A];

    
    printf("Enter array's elements:\n");
    for ( i = 0; i < A; i++) {
        printf("a[%d] = ", i);
        scanf("%d", &arr[i]);
    }

   
    printf("Negative elements from an Array: ");
    K = 0; 
    for (i = 0; i < A; i++) {
        if (arr[i] < 0) {
            if (K) {
                printf(", ");
            }
            printf("%d", arr[i]);
            K = 1;
        }
    }

    
    if (!K) {
        printf("None");
    }
    
    printf("\n");
  
}


