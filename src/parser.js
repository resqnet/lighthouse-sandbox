import * as fs from 'fs';

const LHR_SETTINGS = {
    "categories": [
        "performance",
        "accessibility",
        "best-practices",
        "seo"
    ],
    "audits": [
        // First Contentful Paint (FCP)：何らかのDOMコンテンツがレンダリングされたとき
        "first-contentful-paint",
        // First Meaningful Paint (FMP)：コンテンツとして意味がある要素がレンダリングされたとき
        "first-meaningful-paint",
        // Largest Contentful Paint：テキストや画像などの最大コンテンツが表示されるまでの時間
        "largest-contentful-paint",
        // Speed Index：Webページの読み込み速度を示す指標
        "speed-index",
        // Total Blocking Time：Webページ表示開始からユーザーの操作に応答できるまでのページの読み込み待ち時間
        "total-blocking-time",
        // Server Response Time: サーバー応答時間
        "server-response-time",
        // Time to Interactive：ユーザーの操作に応答できるようになるまでの時間
        "interactive",
        // Cumulative Layout Shift：Webページを表示している間に文字などのレイアウトにずれが生じていないかなどの指標
        "cumulative-layout-shift"
    ]
};

export const parse = (lhr) => {
    const result = {};
    Object.keys(LHR_SETTINGS).forEach(key => {
        result[key] = (() => {
            const items = {};
            LHR_SETTINGS[key].forEach(item => {
                items[item] = lhr[key][item];
            });
            return items;
        })();
    });
    return JSON.parse(JSON.stringify(result));

};

export const toJson = filePath => JSON.parse(fs.readFileSync('./score/' + filePath));
