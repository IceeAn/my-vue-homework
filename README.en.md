[简体中文](README.md) ｜ English

English version is translated by ChatGPT.

# Course Assignment: Web Development Frameworks



## Project Overview

This project is a "Project Design" assignment for the "Web Development Frameworks" course. In this project, the author will use Vue3 to develop the front end for a "Lab Booking System". Additionally, the project includes a simple backend for providing simulated data.



## Technology Stack

In addition to Vue3, which is required by the course, and Bootstrap, which the author is familiar with, the author plans to learn and apply the following technologies that are new to them to expand their knowledge ~~actually just to satisfy personal interest~~:

- WASM (developed using Rust)
- SASS
- Spring + Kotlin (for developing the simulated backend)



## Project Requirements and Progress

> Requirements include both the course design requirements and those added by the author.

A lab booking system that allows teachers to flexibly schedule experimental lab sessions. By default, the system includes 4 bookable labs, available over a period of 18 weeks. Each lab supports 4 sessions per day in two slots each in the morning (12/34 periods) and afternoon (56/78 periods).

#### Frontend Requirements

- [x] *TODO*
- [ ] *TODO*

#### Simulated Backend Requirements

- [x] *TODO*
- [ ] *TODO*




## Deployment

#### Using docker compose

- Install [docker](https://www.docker.com), including docker-compose.

- Clone the project to your local machine.

  ```bash
  git clone https://github.com/IceeAn/my-vue-homework.git ./LabBookingSystem
  ```

- Enter the folder.

  ```bash
  cd LabBookingSystem
  ```

- Run `docker compose`. This may take a long time, especially when the network conditions are poor.

  ```bash
  docker compose --env-file docker-mysql.env up -d
  ```

- Once `docker compose` has finished running, you should be able to access the webpage locally. You can test by running the following command:

  ```bash
  (curl -Isf -m 3 localhost:8080 && curl -Isf -m 3 localhost:8080/api/test-status) > /dev/null && echo "success" || echo "failed"
  ```

  If the output is `success`, the web project is running properly.

#### Using native deployment

- *TODO*



## Precautions

- Since this project involves several technologies that the author is not yet familiar with and has limited development time, there may be errors, design flaws, and non-standard implementations in the project. Therefore, ***please refer to the code of this project with caution***.
- The backend part is only planned as a simulation (the actual course project does not require a backend), and the author used it only to familiarize themselves with Kotlin-based Spring projects. Compared to the frontend, the backend may have more issues and lacks design. ~~In fact, it's been about 5 years since the author last touched Kotlin, so the writing might be quite poor, don't learn from it~~



## Contributions

If you find any issues in the project, you are welcome to submit an Issue or a Pull Request.