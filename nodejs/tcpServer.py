#!/usr/bin/env python

import socket
import serial
import random
import atexit

port = "/dev/ttyUSB0"
rate = 9600
TCP_IP = '127.0.0.1'
TCP_PORT = 1338
BUFFER_SIZE = 20

def close():
    conn.close()
    s.close()


# s1 = serial.Serial(port, rate)
# s1.flushInput()

s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))
s.listen(1)

while True:
   # if s1.inWaiting() > 0:
   #      inputValue = s1.readline()
   #      print(inputValue)
   # conn, addr = s.accept()
   #      data = conn.recv(BUFFER_SIZE)
   #      try:
   #          data
   #          conn.send(inputValue)
   #      except:
   #          True
   conn, addr = s.accept()
   sensor1 = random.randint(0, 23200)
   sensor2 = random.randint(0, 23200)
   sensor3 = random.randint(0, 23200)

   message = "US_" + str(sensor1) + "_" + str(sensor2) + "_" + str(sensor3) + "\n"
   conn.send(message)
   print("Message has been sent!")

atexit.register(close)
