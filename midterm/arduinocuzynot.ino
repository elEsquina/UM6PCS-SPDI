#include <Wire.h>
#include <SoftwareSerial.h>
#include <MPU6050_tockn.h>
#include <PID_v1.h>

bool commands[4] = {false, false, false, false};

// Define constants for the number of steps per revolution
int stepsPerRev = 1000;
int pulseWidthMicros = 100;  
int millisBtwnSteps = 200;

// Define PID constants
double Kp = 10.0;
double Ki = 0;
double Kd = 0;
double setpoint = 0; // Set to desired gyro angle (0 for stabilization)

double gyroY, pidOutput;

// Bluetooth
char command;


// Pin assignments
#define motor1StepPin 5
#define motor1DirPin 7
#define motor2StepPin 6
#define motor2DirPin 8
#define MPU6050_SDL 4
#define MPU6050_SCL 5

#define buzzerPin 11

// Instances
PID myPID(&gyroY, &pidOutput, &setpoint, Kp, Ki, Kd, DIRECT);
SoftwareSerial bluetooth(0, 1);

MPU6050 mpu6050(Wire);

// Function prototypes
void moveForward(int steps);
void moveBackward(int steps);
void turnLeft();
void turnRight();
void stopMotors();
void handleCommand() ;
void buzz();

void setup() {
    // Set pin modes
    pinMode(motor1StepPin, OUTPUT);
    pinMode(motor1DirPin, OUTPUT);
    pinMode(motor2StepPin, OUTPUT);
    pinMode(motor2DirPin, OUTPUT);
   
    // Initialize serial communication for debugging
    Serial.begin(9600);
   
    // Initialize Bluetooth communication
    bluetooth.begin(9600);
   
    // Initialize I2C communication
    Wire.begin();
   
    // Initialize MPU6050 and calibrate
    mpu6050.begin();
    mpu6050.calcGyroOffsets();
   


    // Initialize PID
    myPID.SetMode(AUTOMATIC); // Set PID to automatic mode
    myPID.SetOutputLimits(-255, 255); // Adjust output limits as needed
    myPID.SetSampleTime(10); // 10 ms sample time
    myPID.SetTunings(Kp, Ki, Kd);
}

void loop() {
    movemotor(20, 300, HIGH);


}

void movemotor(int steps, int stpbtwrev, int direction){
    digitalWrite(motor1DirPin, direction);
    //digitalWrite(motor2DirPin, direction);
    for (int i = 0; i < steps; i++) {
        digitalWrite(motor1StepPin, (direction) );
        //digitalWrite(motor2StepPin, (direction) );
        delayMicroseconds(pulseWidthMicros);
        digitalWrite(motor1StepPin, !(direction));
        //digitalWrite(motor2StepPin, !(direction));
        delayMicroseconds(stpbtwrev);
    }  
}

void buzz(){
   
}