## cyb ant design pro

[cyb-ant-design-pro] 开箱即用的中台前端/设计解决方案。它基于 [React](https://reactjs.org/) 和 [ant design](https://ant.design/)。

<div align="center">
  <img src="./demo.png" alt="demo">
</div>

## 开发

```
# 全局安装CYB

npm install -g cyb-cli
```

```bash
# 克隆项目

git clone https://github.com/jd-cyb/cyb-ant-design-pro.git

# 安装依赖

cd cyb-ant-design-pro
npm install

# 启动服务

cyb dev
```

> cyb会帮助我们自动打开浏览器进入研发环境。

## 发布
```bash
# 发布

cyb dist

# 本地测试

cyb test
```

## 特性

- :gem: **优雅美观**：基于 Ant Design 体系精心设计
- :triangular_ruler: **常见设计模式**：提炼自中后台应用的典型页面和场景
- :rocket: **最新技术栈**：使用 React/dva/antd 等前端前沿技术开发
- :iphone: **响应式**：针对不同屏幕大小设计
- :art: **主题**：可配置的主题满足多样化的品牌诉求
- :globe_with_meridians: **国际化**：内建业界通用的国际化方案
- :gear: **最佳实践**：良好的工程实践助您持续产出高质量代码
- :1234: **Mock 数据**：实用的本地数据调试方案
- :white_check_mark: **UI 测试**：自动化测试保障前端产品质量

## 模板

```
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 帐户
  - 登录
  - 注册
  - 注册成功
```

## 支持环境

现代浏览器及 IE11。

## 其他

本项目源码使用了[ANT DESIGN PRO](https://pro.ant.design/)，用于演示塞伯坦（cybertron）-CYB前端模块化工程构建工具强大的工程构建能力。

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018, 京东商城-基础平台研发部-[CYB前端小组](https://github.com/jd-cyb)
