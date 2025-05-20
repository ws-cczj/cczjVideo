# 项目名称
PROJECT_NAME = cczjVideo
# 项目版本
PROJECT_VERSION = 1.0.0

# 添加伪目标，即使目标名称与文件名相同，也不会因为文件存在而跳过执行以下命令中的一个
.PHONY: dev build install default help

# 默认操作
default: dev

# 打包项目
build:
	@echo "Build project: $(PROJECT_NAME)"
	yarn

# 启动开发服务器
dev:
	@echo "project: $(PROJECT_NAME) server started"
	yarn android

# 清理打包产物
clean:
	rm -rf dist

# 安装依赖
install:
	yarn install

help:
	@echo "Usage:"
	@echo "  make dev - start local development server"
	@echo "  make build - build project for release deployment"
	@echo "  make preview - preview the build"
	@echo "  make clean - clean the build artifacts"
	@echo "  make install - install dependencies"