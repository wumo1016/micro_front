- 修改默认配置
  - 安装包 `cnpm i @rescripts/cli -D`
  - 在根目录下新建配置文件 `.rescriptsrc.js`
  - 将 package.json 中的命令都使用 `rescripts` 替代

- 添加环境变量
  - 在根目录下新建 `.env` 文件
  - 修改端口 `PORT=xxx`
  - 修改websocket协议端口 `WDS_SOCKET_PORT=3002`