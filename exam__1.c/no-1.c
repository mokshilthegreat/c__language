#include <stdio.h>


main(){
   
    int intVar = 10;
    float floatVar = 3.14f;
    double doubleVar = 2.718281828459;
    char charVar = 'A';
 	 printf("intVar: %d (int)\n", intVar);
    printf("floatVar: %.2f (float)\n", floatVar);
    printf("doubleVar: %.15lf (double)\n", doubleVar);
    printf("charVar: %c (char)\n", charVar);

    printf("Size of int: %zu bytes\n", sizeof(int));
    printf("Size of float: %zu bytes\n", sizeof(float));
    printf("Size of double: %zu bytes\n", sizeof(double));
    printf("Size of char: %zu bytes\n", sizeof(char));

}
