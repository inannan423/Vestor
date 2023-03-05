// 引入 better-sqlite3 模块
import * as sqlite3 from 'better-sqlite3';

// 创建数据库对象
const db = sqlite3('vestor.db');

// 创建表格（如果不存在）来存储页面名和访问次数
db.exec(`CREATE TABLE IF NOT EXISTS page_visit (
  page_name TEXT PRIMARY KEY,
  visit_count INTEGER DEFAULT 0
)`);

// 导出数据库对象供其他模块使用
export default db;
