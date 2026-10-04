# OpenAI Ads Conversion Starter

OpenAI Ads のコンバージョン計測を組み込むための静的ランディングページです。

## 構成

- `index.html` — ランディングページ
- `styles.css` — レスポンシブUI
- `app.js` — フォーム送信処理

## セットアップ

1. OpenAI Ads Manager で Web のコンバージョン計測用データソースを作成します。
2. 発行された Pixel ID をサイトへ設定します。
3. Ads Manager 側で、サイトの問い合わせ完了に対応するコンバージョンイベントを設定します。
4. 広告からサイトへアクセスしてテストし、Ads Manager でイベント受信を確認します。

ChatGPT Ads からのランディング URL には `oppref` が付与され、OpenAI の Pixel / Conversions API を使った計測に利用できます。

## 注意

このスターターでは秘密鍵をブラウザへ置きません。Conversions API を追加する場合は、API キーをサーバー側の環境変数として管理してください。

個人情報や広告計測を扱う場合は、適用される同意・プライバシー要件を確認してください。

## 参考

OpenAI Help Center: Conversion Measurement
https://help.openai.com/en/articles/20001409-conversion-measurement
