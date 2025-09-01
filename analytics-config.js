// Google Analytics 設定ファイル
// 実際のGA4 Measurement IDを設定してください（例：G-XXXXXXXXXX）

const ANALYTICS_CONFIG = {
    // 本番環境でのGoogle Analytics Measurement ID
    // 実際の値に置き換えてください
    GA_MEASUREMENT_ID: 'GA_MEASUREMENT_ID',
    
    // 開発環境用設定
    DEVELOPMENT_MODE: window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1' ||
                     window.location.hostname.includes('sandbox'),
    
    // 追跡するイベントの設定
    TRACKING_EVENTS: {
        LESSON_STARTED: 'lesson_started',
        LESSON_COMPLETED: 'lesson_completed',
        CODE_EXECUTED: 'code_executed',
        CODE_FAILED: 'code_failed',
        HINT_USED: 'hint_used',
        ANSWER_SHOWN: 'answer_shown',
        CODE_COPIED: 'code_copied',
        PREVIEW_USED: 'preview_used',
        PROGRESS_UPDATED: 'progress_updated',
        SESSION_DATA: 'session_data',
        APP_INITIALIZED: 'app_initialized',
        USER_INTERACTION: 'user_interaction',
        CODE_EDITOR_ACTIVITY: 'code_editor_activity'
    },
    
    // カスタムディメンション設定（必要に応じて追加）
    CUSTOM_DIMENSIONS: {
        LESSON_ID: 'custom_parameter_1',
        USER_PROGRESS: 'custom_parameter_2',
        SESSION_DURATION: 'custom_parameter_3'
    }
};

// 設定オブジェクトをグローバルに公開
window.ANALYTICS_CONFIG = ANALYTICS_CONFIG;

console.log('Analytics configuration loaded:', ANALYTICS_CONFIG.DEVELOPMENT_MODE ? 'Development Mode' : 'Production Mode');