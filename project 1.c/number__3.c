#include<stdio.h>

 main() {
    int one_angle, two_angle, three_angle;

    printf("Enter the first angle: ");
    scanf("%d", &one_angle);
    
    printf("Enter the second angle: ");
    scanf("%d", &two_angle);

    three_angle = 180 - (one_angle + two_angle);

    printf("Third angle: %d\n", three_angle);

}
