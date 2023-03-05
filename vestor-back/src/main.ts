// main.ts

// 引入 nest.js 的相关模块和函数
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 使用 NestFactory 创建一个 Nest 应用实例，并传入 AppModule 类作为参数
  const app = await NestFactory.create(AppModule);
  // 允许跨域
  app.enableCors({

    "origin": "*",
    // "origin": "*",

    "credentials": true,

    // "allowedHeaders":['Authorization','content-type'],

    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",

    "preflightContinue": false,

    "optionsSuccessStatus": 204

  });
  // 设置应用程序监听的端口号为 3000
  await app.listen(3000);
}

// 调用 bootstrap 函数来启动应用程序
bootstrap();
