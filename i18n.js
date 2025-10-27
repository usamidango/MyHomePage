let langData = {
    "nav": {
        "about": { "zh": "关于我", "ja": "自己紹介", "en": "About" },
        "works": { "zh": "作品", "ja": "プロジェクト", "en": "Works" },
        "notes": { "zh": "学习笔记", "ja": "学習ノート", "en": "Notes" },
        "contact": { "zh": "联系我", "ja": "連絡先", "en": "Contact" }
    },
    "hero": {
        "title": { "zh": "你好，我是 <span class='name'>刘鑫</span>", "ja": "こんにちは、<span class='name'>劉鑫</span>です", "en": "Hi, I'm <span class='name'>Liu Zian</span>" },
        "bio": { "zh": "京都情报大学院大学 · ウェブビジネス専攻 · 2024级", "ja": "京都情报大学院大学・ウェブビジネス専攻・2024", "en": "Kyoto U. · Informatics · 2025" }
    },
    "about": {
        "h2": { "zh": "关于我", "ja": "自己紹介", "en": "About" },
        "desc": { "zh": "我来自新疆奎屯……", "ja": "私は7年間のIT経験を持ち、ユーザー視点を重視したインターフェースの設計・開発に取り組んできました。常に最新の技術動向を意識しながら、使いやすさとパフォーマンスの両立を目指して改善を続けてきました。 ", "en": "I'm from XinJang..." },
        "skills": ["JavaScript / TypeScript", "React & Node.js", "Rust（学习中）", "HTTP / TLS 协议"]
    },
    "works": { "p1": { "zh": "作品", "ja": "商品の基本情報やサンプル、SKUを一元管理するシステム。効率的なデータ管理を実現。", "en": "Works" } },
    "notes": { "h2": { "zh": "学习笔记", "ja": "Notes", "en": "Notes" } },
    "contact": {
        "h2": { "zh": "联系我", "ja": "Contact", "en": "Contact" },
        "tip": { "zh": "欢迎邮件 or GitHub Issue 交流～", "ja": "メール・GitHub Issue へどうぞ", "en": "Mail or GitHub Issue welcome~" },
        "btn": { "zh": "发邮件", "ja": "Mail", "en": "Drop a Mail" }
    }
};

// 默认语言
const defaultLang = 'ja';
let currentLang = localStorage.getItem('lang') || defaultLang;

// 初始化直接套用语言
applyLang(currentLang);

// 监听按钮
document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        localStorage.setItem('lang', currentLang);
        applyLang(currentLang);
    });
});

// 替换函数
function applyLang(lang) {
    // 更新按钮状态
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    // 遍历所有带 data-i18n 的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const text = getNested(langData, key, lang);
        if (text) el.innerHTML = text;
    });
}

function getNested(obj, path, lang) {
    return path.split('.').reduce((o, k) => o?.[k], obj)?.[lang];
}
