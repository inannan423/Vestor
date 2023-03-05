// app.module.ts

// 引入 nest.js 的相关模块和装饰器
import { Module } from '@nestjs/common';

// 引入控制器类
import { VisitController } from './controllers/visit.controller';
import { DataController } from './controllers/data.controller';

// 使用 @Module 装饰器定义 AppModule 类，并指定 controllers 数组为控制器类
@Module({
  controllers: [VisitController, DataController],
})
export class AppModule {}
