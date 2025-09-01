# Google Analytics 実装について

このPython練習アプリにGoogle Analytics 4 (GA4)の包括的なトラッキング機能を実装しました。

## 🎯 実装された機能

### 1. 基本トラッキング
- Google Analytics 4 (GA4) の導入
- ページビューとセッション追跡
- 開発環境では自動的に無効化（プライバシー保護）

### 2. ユーザーアクション追跡
- **レッスン開始**: `lesson_started`
- **レッスン完了**: `lesson_completed` (所要時間付き)
- **コード実行**: `code_executed` (成功/失敗)
- **ヒント使用**: `hint_used`
- **解答表示**: `answer_shown`
- **コードコピー**: `code_copied`
- **プレビュー使用**: `preview_used`

### 3. 学習進捗追跡
- **進捗更新**: `progress_updated` (完了率、完了レッスン数)
- **セッションデータ**: `session_data` (滞在時間、現在のレッスン時間)
- **アプリ初期化**: `app_initialized` (初期状態、デバイス情報)

### 4. ユーザーエンゲージメント追跡
- **ユーザー操作**: `user_interaction` (ボタンクリック、フォーカスなど)
- **コードエディター活動**: `code_editor_activity` (入力回数、コード長)

## 📁 ファイル構成

- `index.html` - メインアプリケーション（GA4実装済み）
- `analytics-config.js` - Google Analytics設定ファイル
- `GOOGLE_ANALYTICS_README.md` - このファイル

## ⚙️ 設定方法

### 1. Google Analytics Measurement IDの設定

`analytics-config.js`ファイルを編集：

```javascript
const ANALYTICS_CONFIG = {
    // 実際のGA4 Measurement IDに置き換えてください
    GA_MEASUREMENT_ID: 'G-YOUR-MEASUREMENT-ID',
    // ... その他の設定
};
```

### 2. 本番環境での有効化

現在の設定では、開発環境（localhost、127.0.0.1、sandboxドメイン）では
Google Analyticsが自動的に無効化されます。

本番環境では自動的に有効化されます。

## 📊 追跡されるイベント詳細

### レッスン関連イベント
```javascript
// レッスン開始
trackEvent('lesson_started', {
    lesson_id: 1,
    lesson_title: "文字を表示してみよう"
});

// レッスン完了（所要時間付き）
trackEvent('lesson_completed', {
    lesson_id: 1,
    lesson_title: "文字を表示してみよう",
    duration_seconds: 120
});
```

### コード実行イベント
```javascript
// コード実行
trackEvent('code_executed', {
    lesson_id: 1,
    lesson_title: "文字を表示してみよう",
    code_length: 25
});
```

### 進捗イベント
```javascript
// 進捗更新
trackEvent('progress_updated', {
    completion_rate: 30,
    completed_lessons: 3,
    total_lessons: 10
});
```

### セッションデータ
```javascript
// セッション統計（5分毎 + ページ離脱時）
trackEvent('session_data', {
    session_duration_seconds: 600,
    current_lesson_duration_seconds: 180,
    current_lesson_id: 3,
    completed_lessons_count: 2,
    completion_rate: 20
});
```

## 🔧 カスタマイズ

### 新しいイベントの追加
1. `analytics-config.js`の`TRACKING_EVENTS`に新しいイベント名を追加
2. 該当する場所で`trackEvent()`を呼び出し

### カスタムディメンションの追加
`analytics-config.js`の`CUSTOM_DIMENSIONS`にディメンションを追加し、
trackEvent呼び出し時にパラメーターとして送信

## 🛡️ プライバシー配慮

- 開発環境では自動的にトラッキング無効
- 個人識別情報は収集しない
- コードの内容自体は送信しない（長さのみ）
- ユーザーが明示的に操作したアクションのみ追跡

## 📈 分析可能な指標

この実装により以下の分析が可能になります：

1. **学習効果分析**
   - レッスン別完了率
   - 各レッスンの平均所要時間
   - 困難なレッスンの特定

2. **ユーザーエンゲージメント分析**
   - セッション時間
   - リピート率
   - ヒント/解答使用頻度

3. **UIパフォーマンス分析**
   - 各機能の使用頻度
   - ユーザーの操作パターン
   - 離脱ポイントの特定

4. **技術的指標**
   - デバイス/ブラウザ別使用状況
   - 画面解像度別UI適合性

## 🚀 運用開始方法

1. Google Analytics 4でプロパティを作成
2. Measurement IDを取得
3. `analytics-config.js`にIDを設定
4. 本番環境にデプロイ
5. GA4ダッシュボードでデータ確認

これで、Python学習アプリの詳細な使用状況とユーザー行動を分析できるようになります。