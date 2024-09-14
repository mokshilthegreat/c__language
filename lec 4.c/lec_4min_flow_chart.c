 #include <stdio.h>

int main() {
    int num1, num2, num3;
    int min;


    printf("Enter the value of the first number: ");
    scanf("%d", &num1);
    printf("Enter the value of the second number: ");
    scanf("%d", &num2);
    printf("Enter the value of the third number: ");
    scanf("%d", &num3);


    if (num1 <= num2) {
        if (num1 <= num3) {
            min = num1;
        } else {
            min = num3;  
        }
    } else {
        if (num2 <= num3) {
            min = num2;  
        } else {
            min = num3;  
        }
    }

 
    printf("The minimum value is: %d\n", min);

 
}
