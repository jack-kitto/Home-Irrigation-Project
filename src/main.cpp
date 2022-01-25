#include <Arduino.h>
#include "WiFi.h"
#include "WebServer.h"
#include "ESPmDNS.h"
#include "WiFiClient.h"
#include "ArduinoJson.h"

#define WIFI_NETWORK "WiFry"
#define WIFI_PASSWORD "SG9mb3dlbGF3dQ=="
#define WIFI_TIMEOUT_MS 20000

WebServer server(80);

const int led1 = 12;
const int led2 = 13;
const int led3 = 26;
const int led4 = 27;

bool led1State = false;
bool led2State = false;
bool led3State = false;
bool led4State = false;

void handleRoot() {
  String message = "Hello, ";
  message += server.client();
  server.sendHeader("Access-Control-Allow-Origin","*");
  server.send(200, "text/plain", message);
}

void handleCheck1State() {
  if(led1State) {
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"LED1\": \"HIGH\"}");
  }else {
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"LED1\": \"LOW\"}");
  }
}

void handleCheck2State() {
  if(led2State) {
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"LED2\": \"HIGH\"}");
  }else {
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"LED2\": \"LOW\"}");
  }
}

void handleCheck3State() {
  if(led3State) {
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"LED3\": \"HIGH\"}");
  }else {
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"LED3\": \"LOW\"}");
  }
}

void handleCheck4State() {
  if(led4State) {
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"LED4\": \"HIGH\"}");
  }else {
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"LED4\": \"LOW\"}");
  }
}

int handle1High() {
  if(!led1State) {
    led1State = true;
    digitalWrite(led1, led1State);
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"data\": \"LED 1 set HIGH\"}");
  }else{
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"No change\", \"data\": \"HIGH\"}");
  }
}

int handle2High() {
  if(!led2State) {
    led2State = true;
    digitalWrite(led2, led2State);
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"data\": \"LED 2 set HIGH\"}");
  }else{
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"No change\", \"data\": \"HIGH\"}");
  }
}

int handle3High() {
  if(!led3State) {
    led3State = true;
    digitalWrite(led3, led3State);
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"data\": \"LED 3 set HIGH\"}");
  }else{
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"No change\", \"data\": \"HIGH\"}");
  }
}

int handle4High() {
  if(!led4State) {
    led4State = true;
    digitalWrite(led4, led4State);
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"data\": \"LED 4 set HIGH\"}");
  }else{
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"No change\", \"data\": \"HIGH\"}");
  }
}

void handle1Low() {
  if(led1State) {
    led1State = false;
    digitalWrite(led1, led1State);
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"data\": \"LED 1 set LOW\"}");
  }else{
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"NO change\", \"data\": \"LOW\"}");
  }
}

void handle2Low() {
  if(led2State) {
    led2State = false;
    digitalWrite(led2, led2State);
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"data\": \"LED 2 set LOW\"}");
  }else{
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"NO change\", \"data\": \"LOW\"}");
  }
}

void handle3Low() {
  if(led3State) {
    led3State = false;
    digitalWrite(led3, led3State);
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"data\": \"LED 3 set LOW\"}");
  }else{
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"NO change\", \"data\": \"LOW\"}");
  }
}

void handle4Low() {
  if(led4State) {
    led4State = false;
    digitalWrite(led4, led4State);
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"success\", \"data\": \"LED 4 set LOW\"}");
  }else{
    server.sendHeader("Access-Control-Allow-Origin","*");
    server.send(200, "application/json", "{\"response\": \"NO change\", \"data\": \"LOW\"}");
  }
}

void handleNotFound() {
  String message = "File Not Found \n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.sendHeader("Access-Control-Allow-Origin","*");
  server.send(404, "text/plain", message);
}

void connectToWifi() {

  Serial.print("Connecting to WiFi");
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_NETWORK, WIFI_PASSWORD);

  unsigned long startAttemptTime = millis();

  while (WiFi.status() != WL_CONNECTED && millis() - startAttemptTime < WIFI_TIMEOUT_MS) {
    Serial.print(".");
    delay(100);
  }

  if(WiFi.status() != WL_CONNECTED){
    Serial.print(" Failed!");
  }else{
    Serial.println("Connected!");
    Serial.print("IP Address: ");
    Serial.print(WiFi.localIP());
  }
}

void setup(void) {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);

  led1State = false;
  digitalWrite(led1, led1State);
  led2State = false;
  digitalWrite(led2, led2State);
  led3State = false;
  digitalWrite(led3, led3State);
  led4State = false;
  digitalWrite(led4, led4State);

  Serial.begin(9600);

  connectToWifi();

  if (MDNS.begin("esp32")) {
    Serial.println("MDNS responder started!");
  }

  server.on("/", handleRoot);
  server.on("/inline", []() {
    server.send(200, "text/plain", "inline handler!!");
  });

  server.on("/1/state", handleCheck1State);
  server.on("/1/high", handle1High);
  server.on("/1/low", handle1Low);

  server.on("/2/state", handleCheck2State);
  server.on("/2/high", handle2High);
  server.on("/2/low", handle2Low);

  server.on("/3/state", handleCheck3State);
  server.on("/3/high", handle3High);
  server.on("/3/low", handle3Low);

  server.on("/4/state", handleCheck4State);
  server.on("/4/high", handle4High);
  server.on("/4/low", handle4Low);

  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started!");
}
void loop(void) {
  server.handleClient();
  delay(2);
}