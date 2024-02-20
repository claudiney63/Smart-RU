#include <WiFi.h>
#include <HTTPClient.h>
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 21
#define RST_PIN 22
#define REFUSED 15
#define ACCEPTED 4

MFRC522 mfrc522(SS_PIN, RST_PIN); 

const char* ssid = "G73";
const char* password = "melo1234";
const float amount = 0.8;
String serverName = "http://192.168.138.204:8080/payment/";

void setup() {
  Serial.begin(115200);

  WiFi.begin(ssid, password);

  Serial.println("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());

  SPI.begin();
  mfrc522.PCD_Init();  

  Serial.println();

  pinMode(15, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop() {
  if (!mfrc522.PICC_IsNewCardPresent()) {
    return;
  }

  if (!mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  String  id = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
    Serial.print(mfrc522.uid.uidByte[i], HEX);
    id.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
    id.concat(String(mfrc522.uid.uidByte[i], HEX));
  }

  id.toUpperCase();

  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;


    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");
    String data = "{\"card_id\":\"" + id + "\", \"amount\":" + amount + "}";
    int httpResponseCode = http.POST(data);

    if (httpResponseCode == 200){
      digitalWrite(ACCEPTED, HIGH);
      delay(2000);
      digitalWrite(ACCEPTED, LOW);
    }else{
      digitalWrite(REFUSED, HIGH);
      delay(2000);
      digitalWrite(REFUSED, LOW);
    }

    Serial.println();
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);

    // Free resources
    http.end();
  } else {
    Serial.println("WiFi Disconnected");
  }
}