webpackJsonp([37],{1165:function(n,e){n.exports="# 更新日志\n\n### 1.0\n\n#### 1.0.7\n- Modal.Submit 延时提交。\n- Message DOM render 改为ref，ReactDOM.render 某些情况下会返回 null。\n- 修复 Message closeAll 后关闭动画无效。\n- 修复 Table 宽度变化时，某些场景下内容表与表头宽度不一致。\n\n#### 1.0.6\n- 修复 Table 浏览器缩放后，如果数据量不满一屏，仍会出现滚动条并可以滚动。\n- 修改 Alert 图标布局为 flex。\n- Message 增加 4 个 position，实现 Notification 功能。 \n- Form.validate 性能优化（提交时不处理状态）。\n- Windows 下表格滚动速度调整。\n- Upload 文件名过长换行。\n\n#### 1.0.5\n- Form.inputable bind 移动到 componentDidMount 中（React 组件修改key时会先创建新组件，再移除旧组件）。\n\n#### 1.0.2\n- Select动态修改数据时，重置滚动条位置。\n\n#### 1.0.1\n- 修复 Table column render 函数丢失 index。"}});