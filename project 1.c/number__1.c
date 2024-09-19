#include <stdio.h>


 
 main() {
	
    float celsius, fahrenheit;

    printf("Enter the temperature in Celsius: ");
    scanf("%f", &celsius);

    fahrenheit = (celsius * 9/5) + 32;

    printf("The temperature in Fahrenheit: %0.1f\n",fahrenheit);

}
