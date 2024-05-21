简体中文 ｜ [English](README.en.md)

# 课程作业：Web开发框架



## 项目简介

本项目是“Web 开发框架”课程的“项目设计”作业。作者将使用 Vue3 开发“实验室预约系统”Web 前端。同时，项目还包括一个简单的后端，用于提供模拟数据。



## 技术栈

除了课程要求的 Vue3 与作者个人熟悉的 Bootstrap 外，作者还计划学习并应用以下对其而言较新的技术，以拓展知识面 ~~实际上只是满足个人兴趣而已~~ ：

- WASM（使用 Rust 开发）
- SASS
- Spring + Kotlin（用于开发模拟后端）



## 项目需求与完成情况

> 需求包括课程设计要求的内容，与作者本人添加的内容。当作者认为项目基本完成，该部分将变为项目介绍与展示。

一个允许教师灵活预约课程实验时间的实验室预约系统。该系统默认包含 4 个可预约的实验室，可在共 18 周的时间范围内预约。每间实验室每天支持上午 2 段（12/34 节）下午 2 段（56/78 节）共 4 次课。

### 前端需求

- [ ] 登录界面
  - [ ] 输入用户名与密码
  - [ ] 密码错误提示
  - [ ] 记住密码
- [ ] 预约系统
  - [ ] 实验室选择
  - [ ] 课程表显示（预计使用 grid 布局）
  - [ ] 已选择、已预约、未预约、被占用采用不同的样式体现
  - [ ] 提交预约，弹框提示
  - [ ] 已预约时间总览

- [ ] 其他需求
  - [ ] 响应式布局，优化移动端体验
  - [ ] 兼容 Chrome，Safari，Firefox
  - [ ] sticky 导航栏，给出常用入口、使用帮助


### 模拟后端需求

#### 数据库

- [ ] 用户表
- [ ] 实验室表
- [ ] 预约状态表

#### SpringBoot 项目

- [ ] 登录的鉴权
  - [ ] 模拟登录，检查用户名和密码
  - [ ] （可选）实现完整的登录逻辑
  - [ ] 退出登录
- [ ] 实验室预约
  - [ ] 预约特定时间段
  - [ ] 取消预约



## 部署

### 使用docker compose

- 安装 [docker](https://www.docker.com)，包括 docker-compose。

- clone 项目到本地，或手动下载本仓库至 `./LabBookingSystem`。

  ```bash
  git clone https://github.com/IceeAn/my-vue-homework.git ./LabBookingSystem
  ```

- 进入该文件夹。

  ```bash
  cd LabBookingSystem
  ```

- 运行 `docker compose`。这可能需要较长时间，尤其在网络条件较差时。

  ```bash
  docker compose --env-file docker-mysql.env up -d
  ```

- `docker compose` 运行完成后，你应该可以在 `localhost:8080` 访问网页了。如果不方便立即访问网页，你还可以运行以下命令测试：

  ```bash
  (curl -Isf -m 3 localhost:8080 && curl -Isf -m 3 localhost:8080/api/test-status) > /dev/null && echo "success" || echo "failed"
  ```

  输出 `success` 则说明 Web 项目已经正常运行。

### 使用原生部署

- 安装 Java 21，Node.js 20，Mysql 8 与 Rust

- clone 项目到本地。

  ```bash
  git clone https://github.com/IceeAn/my-vue-homework.git ./LabBookingSystem
  ```

- 进入该文件夹。

  ```bash
  cd LabBookingSystem
  ```

- 在Shell中设置环境变量：`DB_HOST` `DB_PORT` `DB_NAME` `DB_PARAM` `DB_USER` `DB_PASSWORD`，或直接修改 `backend/src/resources/application.yaml`，填写自己的配置。

- 编译、运行后端项目

- 编译、运行前端项目

- 现在，你应该可以在 `localhost:8080` 访问网页了。如果不方便立即访问网页，你还可以运行以下命令测试：

  ```bash
  (curl -Isf -m 3 localhost:8080 && curl -Isf -m 3 localhost:8080/api/test-status) > /dev/null && echo "success" || echo "failed"
  ```

  输出 `success` 则说明 Web 项目已经正常运行。


## 注意事项

- 由于本项目采用了多项作者尚不熟悉的技术，并且开发时间有限，项目中可能存在错误、设计缺陷与不规范的实现。因此，**请谨慎参考本项目的代码**。
- 后端项目在计划中仅作为模拟（实际课程项目不要求后端），作者也仅用其了解使用 Kotlin 的 Spring 项目，相比前端可能存在更多问题、且对其缺少设计。~~事实上，作者已经大概 5 年没碰 Kotlin 了，写得应该很差，不要学（~~



## 贡献

如果您在项目中发现任何问题，欢迎提交 Issue 或 Pull Request。