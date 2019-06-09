#include <Arduino.h>

class DistanceSensor {
private:
  int echoPin;
  int triggerPin;

public:
  DistanceSensor(int echoPIN, int triggerPIN);

  const int maxDistance = 23200;
  int width, t1, t2;

  int getTriggerPin() {
    return this->triggerPin;
  }

  int getEchoPin() {
    return this->echoPin;
  }

  int getEcho() {
    return digitalRead(this->echoPin);
  }

  int trigger(int state) {
    digitalWrite(this->triggerPin, state);
  }

  // Send and receive function, returns the time it took to reach the echoPin in microseconds
  int sr() {
    this->trigger(HIGH);
    // *** delayMicroseconds(10); but then without pausing the whole board ***
    delayMicroseconds(10);
    this->trigger(LOW);

    while (this->getEcho() == 0);
    t1 = micros();
    while (this->getEcho() == 1);
    t2 = micros();
    width = t2 - t1;

    return width;
  }

int getSensorState() {
    long states[5] = {2900, 2320, 1740, 1160, 870}; // 50cm, 40cm, 30cm, 20cm$
    int state = 0;

    long sensorValue = this->sr();

    for (int i = 0; i < 5; i++) {
      if (sensorValue <= states[i]) {
        state = i + 1;
      }
    }

    return state;
  }
};
