# マクベス 公演サイト

HTML / CSS / JavaScript の静的サイトです。ビルドやパッケージのインストールは不要です。

## 表示

`index.html` をブラウザーで開けます。ローカルサーバーを使う場合：

```sh
python3 -m http.server 8000
```

ブラウザーで http://localhost:8000 を開いてください。

## ファイル

- `index.html`：トップ、公演概要、日程、料金、会場
- `flyer.html`：チラシ両面、原寸表示、ダウンロード
- `trigger.html`：トリガーアラート
- `blog.html`：ブログ一覧
- `blog/performance.html`：公演案内の記事
- `assets/style.css`：配色、レイアウト、スマートフォン対応
- `assets/site.js`：スマートフォンのメニュー
- `assets/flyer-front.jpg` / `flyer-back.jpg`：提供チラシのコピー

## 更新

本文は各HTMLを編集します。共通のヘッダー・フッターは各ページにあるため、リンク等を変更する際はすべてのHTMLを更新してください。
ブログを追加する場合は `blog/performance.html` を複製し、タイトル・本文・descriptionを書き換え、`blog.html` に記事リンクを追加します。
申し込みURL、公式X、日程・料金・会場は提供チラシに基づきます。トリガーアラートは指定の文言を掲載しています。

## 公開

ルートの4つのHTMLと `blog/`、`assets/` を同じ構成で静的ホスティングにアップロードできます。原本の日本語名JPG、README、開発環境の設定ファイルのアップロードは不要です。外部フォント・CDNへの依存はありません。
