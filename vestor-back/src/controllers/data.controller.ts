// data.controller.ts

// 引入 nest.js 的相关模块和装饰器
import { Controller, Get, Query } from '@nestjs/common';

// 引入数据库对象
import db from '../db';

// 定义 data 接口的控制器类，并使用 @Controller 装饰器指定路由前缀为 /data
@Controller('data')
export class DataController {
  // 定义 GET 方法，并使用 @Get 装饰器指定路由为 /
  @Get()
  // 定义处理请求的函数，并使用 @Query 装饰器获取查询参数 page_name
  getData(@Query('page_name') pageName: string) {
    // 如果没有提供 page_name 参数，则赋予默认值为 home
    if (!pageName) {
      pageName = 'home';
    }

    // 使用 better-sqlite3 的 API 查询数据库中是否存在对应的页面名记录
    const row = db
      .prepare('SELECT * FROM page_visit WHERE page_name = ?')
      .get(pageName);

    // 如果存在，则返回页面名和访问次数的信息
    if (row) {
      return { page_name: row.page_name, visit_count: row.visit_count };
    }

    // 如果不存在，则返回错误信息
    else {
      return { error: `No record for 😥 ${pageName} found` };
    }
  }
}
