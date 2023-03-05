# Vestor

简单的统计页面访问次数的工具。

- 🎄 TypeScript
- 🎯 React
- 😀 Nest.js

## 使用方法

本工具分为前后端两个部分，前端是一个 React 插件，已发布到 npm，后端是一个 Nest.js 服务，需要自行部署。

### 后端部分

将项目源代码克隆到本地，进入项目目录，安装依赖：

```bash
cd vestor-back
pnpm install
```

打包：

```bash
pnpm build
```

运行：

```bash
pnpm start
```
### 前端部分

在您的 React 项目中安装依赖：

```bash
npm install vestor
```

在您的 React 项目中引入插件：

```tsx
import React from 'react'
import Vestor from './index'

function VestorDemo() {
  // url 为您的后端服务地址
  const vestor = Vestor({url: 'http://vestor-demo.app'})
  return (
    <div className="App">
      {vestor?.page_name}
      <br/>
      {vestor?.visit_count}
    </div>
  )
}

export default VestorDemo
```

vestor 为一个对象，包含两个属性：

- `page_name`: 页面名称
- `visit_count`: 访问次数

