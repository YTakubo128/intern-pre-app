# Node.js公式イメージをベースに
FROM node:20-alpine

# 作業ディレクトリ作成
WORKDIR /app

# 依存関係のインストール
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# Next.jsのビルド
RUN npm run build

# ポート3000を公開
EXPOSE 3000

# アプリケーション起動
CMD ["npm", "start"]
