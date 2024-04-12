FROM openjdk:21-jdk-slim

WORKDIR /app
COPY . /app

RUN ./gradlew build --no-daemon

CMD ["./gradlew", "bootRun", "-Pargs=--server.port=8080"]
