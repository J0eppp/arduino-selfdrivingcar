#include "Motor.cpp"
#include "DistanceSensor.cpp"

// Constructor of class DistanceSensor
DistanceSensor::DistanceSensor(int echoPIN, int triggerPIN) {
  DistanceSensor::echoPin = echoPIN;
  DistanceSensor::triggerPin = triggerPIN;
  pinMode(echoPIN, INPUT);
  pinMode(triggerPIN, OUTPUT);
}

DistanceSensor dist1(8, 9);

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(dist1.sr());
}
