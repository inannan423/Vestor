// visit.controller.ts

// 引入 nest.js 的相关模块和装饰器
import { Controller, Get, Query } from '@nestjs/common';

// 引入数据库对象
import db from '../db';

// 记录最近的 10 个访问记录的 IP 地址
const recentIps: string[] = [];

// 定义 visit 接口的控制器类，并使用 @Controller 装饰器指定路由前缀为 /visit
@Controller('visit')
export class VisitController {
  // 定义 GET 方法，并使用 @Get 装饰器指定路由为 /
  @Get()
  // 定义处理请求的函数，并使用 @Query 装饰器获取查询参数 ip 和 page_name
  getVisit(@Query('ip') ip: string, @Query('page_name') pageName: string) {
    // 如果没有提供 ip 或者 page_name 参数，则返回错误信息
    if (!ip) {
      return { error: 'Missing ip parameter' };
    }
    if (!pageName) {
      pageName = 'home';
    }


    // 使用 better-sqlite3 的 API 查询数据库中是否存在对应的页面名记录
    const row = db
      .prepare('SELECT * FROM page_visit WHERE page_name = ?')
      .get(pageName);

    // 如果存在，则更新访问次数并返回成功信息
    if (row) {
      db.prepare(
        'UPDATE page_visit SET visit_count = visit_count + 1 WHERE page_name = ?',
      ).run(pageName);
      return { success: `Visit count for 🍉 ${pageName} increased by one` };
    }

    // 如果不存在，则插入新的记录并返回成功信息
    else {
      db.prepare(
        'INSERT INTO page_visit (page_name, visit_count) VALUES (?, ?)',
      ).run(pageName, 1);
      return {
        success: `New record for 🎃 ${pageName} created with one visit count`,
      };
    }
  }
}
