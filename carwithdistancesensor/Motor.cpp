#include <Arduino.h>

class Motor {
private:
  int outputF, outputB;

public:
  void init(int f, int b) {
    this->outputF = f;
    this->outputB = b;
    pinMode(this->outputF, OUTPUT);
    pinMode(this->outputB, OUTPUT);
  }

  void forwards() {
    digitalWrite(this->outputB, LOW);
    digitalWrite(this->outputF, HIGH);
  }

  void backwards() {
    digitalWrite(this->outputF, LOW);
    digitalWrite(this->outputB, HIGH);
  }

  void halt() {
    digitalWrite(this->outputF, LOW);
    digitalWrite(this->outputB, LOW);
  }
};
