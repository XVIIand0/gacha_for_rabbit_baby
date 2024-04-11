// script.js
function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    if (password === '20240407') { // 設定密碼為 "correctPassword"
        document.getElementById('login').style.display = 'none';
        document.getElementById('cards').style.display = 'block';
        generateCards();
    } else {
        alert('密碼錯誤');
    }
}

function generateCards() {
    let container = document.querySelector('.card-container');
    cardsData.forEach((card, index) => {
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.textContent = `獎項號碼: ${index + 1}`;
        cardDiv.addEventListener('click', function() {
            showDetails(`獎項${index + 1}: ${card.title}`, card.content, index);
            disableOtherCards(index + 1); // 添加這個函數來禁用其他卡片
        });
        container.appendChild(cardDiv);
    })
}   

function showDetails(title, content, index) {
    let detailsContainer = document.getElementById('cardDetail');
    detailsContainer.innerHTML = `<h2>${title}</h2><p>${content}</p><img src='img/${index}.webp' alt='Card Image'>`;
    detailsContainer.style.display = 'block';
}

function hideDetails() {
    document.getElementById('cardDetail').style.display = 'none';
}
// 禁用除了當前選擇的卡片以外的所有卡片
function disableOtherCards(selectedCardIndex) {
    let cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if (index !== (selectedCardIndex - 1)) {
            card.style.pointerEvents = 'none';
            card.style.opacity = '0.5'; // 顯示卡片已被禁用的視覺效果
        }
    });
}

const cardsData = [
    {
        "title": "特別旅行",
        "content": "我們將一起規劃一次周末旅行，去到你夢想中的那個地方，創造屬於我們的回憶。"
    },
    {
        "title": "星空觀賞夜",
        "content": "我們會在一個適合觀賞星空的郊外地點，共享一個浪漫的夜晚。"
    },
    {
        "title": "潛水體驗課程",
        "content": "如果你對海洋充滿好奇，這次潛水體驗將帶你探索神秘的海底世界。"
    },
    {
        "title": "專業按摩券",
        "content": "預約給你一次專業的按摩體驗，幫助你徹底放鬆，放下所有疲憊。"
    },
    {
        "title": "高級晚餐體驗",
        "content": "我們將在城市中一家評價極高的餐廳享受一頓浪漫的晚餐，品嚐美味佳肴。"
    },
    {
        "title": "手工藝工作坊",
        "content": "我們將一起參加手工藝工作坊，學習製作陶瓷、皮革工藝品或珠寶，手作獨一無二的藝術品。"
    },
    {
        "title": "手作甜點課程",
        "content": "讓我們一起學習如何製作甜點，享受甜蜜的學習時光。"
    },
    {
        "title": "精油DIY體驗",
        "content": "參加一次精油混合DIY工作坊，一起學習如何製作專屬的香氛產品。"
    },
    {
        "title": "藝術或音樂活動門票",
        "content": "我們將一起去看一場戲劇、音樂會或藝術展，享受文化的饗宴。"
    },
    {
        "title": "個性化T恤",
        "content": "我為你設計了一件印有特別圖案或文字的T恤，希望它能夠成為我們之間的特別記號。"
    },
    {
        "title": "美味巧克力",
        "content": "為你挑選了精選的高品質巧克力，希望這份甜蜜能夠融化你的心。"
    },
    {
        "title": "桌上型迷你溫室",
        "content": "為你準備了一個桌上型迷你生態小盒子~。"
    },
    {
        "title": "可愛動物造型拖鞋",
        "content": "為你準備了一對造型可愛且舒適的動物拖鞋，希望它們能在你疲憊時給予你最大的舒適。"
    },
    {
        "title": "攝影相關",
        "content": "攝影相關，包括了一台相機、拍立得等，希望能夠捕捉我們每一刻的美好。"
    },
    {
        "title": "烹飪挑戰",
        "content": "讓我來為你展現我的廚藝，準備一頓只屬於我們的美味晚餐。"
    },
    {
        "title": "甚麼都聽你卷",
        "content": "這是一次讓你決定想要做什麼的特別機會，無論是一個活動或是一個小願望，我都會全力以赴。"
    },
    {
        "title": "200元獎卷",
        "content": "這是價值200元的購物禮券，你可以在喜歡的店鋪自由使用。"
    },
    {
        "title": "精緻巧克力蛋糕",
        "content": "你最愛的巧克力蛋糕。"
    },
    {
        "title": "無光晚餐",
        "content": "在城市下體驗無光晚餐，提升你的嗅覺與味覺，並品嘗美食。"
    }
];
