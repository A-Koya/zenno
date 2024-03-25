若者同士やエンジニア同士をつなげるサービスはたくさん存在しますが、

「若手と高齢者をつなぐサービス」は新しいのではないか?と考えて作成しました

農業情報知恵袋「全知全農」です

#よくできた点やアピールポイント
*データフェッチ /next/lib/functions/
*SQL文  /go/adapter/gateway/question.go

#反省点
*画面設計があいまいなままの開発
*テストコードの勉強不足

#今後作成予定の機能
###進捗は7割ほどで未完成の機能があります
*jtf認証
*タグ検索
*アイコン変更

#使用した技術の概要
##フロントエンド
*Next.js
*typescript
*tailwindcss

##APIサーバー
*golang
*クリーンアーキテクチャ(不完全な部分あり)

##データベース
*postgres
###ER図は以下の通りです
![ER図](./img/スクリーンショット%20(186).png)

##その他
*git
*docker-compose

