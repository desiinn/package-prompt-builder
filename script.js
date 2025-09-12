// パッケージタイプとその詳細設定（修正案）
const packageTypes = {
    box: {
        name: "箱",
        imageUrl: "/package-prompt-builder/images/icon-sample.jpg",
        details: {
            形状: {
                cube: "立方体",
                rectangular: "長方形",
                round: "円筒形",
                oval: "楕円形",
                thin: "薄い",
                tall: "背が高い",
                horizontal: "横長",
            },
            蓋: {
                closed: "閉じている",
                open: "開いている",
                insert: "差し込み式",
                cover: "かぶせ式"
            }
        },
        basePrompt: "white cardboard box packaging mockup"
    },
    pouch: {
        name: "袋",
        imageUrl: "/package-prompt-builder/images/icon-sample.jpg",
        details: {
            種別: {
                stand_pouch: "スタンドパック",
                gusset: "ガゼット袋",
                individual: "個包装袋",
                flat: "平袋",
                spout_pouch: "スパウトパウチ",
            },
            素材: {
                white: "プラスチック（白）",
                transparent: "プラスチック（透明）",
                kraft: "クラフト紙",
                aluminum: "アルミ"
            },
        },
        basePrompt: "white plastic pouch packaging mockup"
    },
    bottle: {
        name: "ボトル",
        imageUrl: "/package-prompt-builder/images/icon-sample.jpg",
        details: {
            酒瓶: {
                sake: "日本酒瓶",
                beer: "ビール瓶",
                whisky: "ウイスキー瓶",
            },
            ワイン瓶: {
                bordeaux: "肩が高い（ボルドー型）",
                burgundy: "なで肩（ブルゴーニュ型）",
                red_wine: "赤ワイン用",
                white_wine: "白ワイン用"
            },
            その他: {
                pet_bottle:"ペットボトル",
                juice: "ジュース瓶",
                jam: "ジャム瓶",
                pudding: "プリン瓶"
            },
            形状: {
                tall_bin: "背が高い",
                short: "背が低い",
                mini_bottle: "小さい",
                square: "角型",
                slim: "スリムな"
            },
            色: {
                clear: "透明",
                green: "緑",
                amber: "茶色",
                blue: "青",
                frosted: "フロスト"
            },
        },
        basePrompt: "bottle packaging mockup"
    },
    can: {
        name: "缶",
        imageUrl: "/package-prompt-builder/images/icon-sample.jpg",
        details: {
            形状: {
                tall_can: "背が高い",
                short_can: "背が低い",
                round_can: "円筒形",
                square_can: "角缶",
                oval_can: "楕円形",
                cokie_can:"クッキー缶"
            },
            蓋: {
                easy_open: "イージーオープン式",
                cover: "かぶせ式"
            }
        },
        basePrompt: "can packaging mockup"
    },
    other: {
        name: "その他",
        imageUrl: "/package-prompt-builder/images/icon-sample.jpg",
        details: {
            用途: {
                icecream: "カップアイス",
                milk_carton: "牛乳パック",
                paper_bag: "紙袋",
            },
            形状: {
                usesketch: "添付のスケッチに合わせる",
            },
            素材: {
                white: "プラスチック（白）",
                transparent: "プラスチック（透明）",
                paper: "紙",
                kraft: "クラフト紙",
                aluminum: "アルミ",
                glass: "ガラス",
            },
        },
        basePrompt: "packaging mockup"
    }
};

const angles = {
    front: {
        name: "正面",
        imageUrl: "/package-prompt-builder/images/icon-sample.jpg",
        prompt: "front view, centered composition, No angled view, no side view, no three-quarters view"
    },
    diagonal: {
        name: "斜めから",
        imageUrl: "/package-prompt-builder/images/icon-sample.jpg",
        prompt: "3/4 angle view, slight perspective"
    },
    three_views: {
        name: "複数方向から",
        imageUrl: "/package-prompt-builder/images/icon-sample.jpg",
        prompt: "shown at three rotational angles"
    }
};

// 詳細プロンプトマッピング
const detailPrompts = {
    cube: "cubic shape, equal dimensions",
    rectangular: "rectangular shape, standard proportions",
    round: "cylindrical shape",
    oval: "oval shape, ",
    thin: "thin and flat shape",
    tall: "tall and slim shape",
    horizontal: "wide and flat shape",
    closed: "closed lid",
    open: "open lid",
    insert: "tuck-end lid",
    cover: "telescoping lid",
    stand_pouch: "stand-up pouch, flexible packaging",
    gusset: "gusseted pouch, expandable sides",
    individual: "individual plastic pouch, sealed plastic sachet",
    flat: "flat pouch, simple rectangular shape",
    spout_pouch: "spout pouch, a white stand-up pouch with a spout",
    white: "white plastic",
    transparent: "Transparent plastic",
    kraft: "Kraft paper",
    aluminum: "frosted aluminum",
    sake: "sake bottle",
    beer: "beer bottle",
    whisky: "whisky bottle",
    bordeaux: "bordeaux bottle",
    burgundy: "burgundy bottle",
    red_wine: "red wine",
    white_wine: "white wine",
    pet_bottle: "pet bottle",
    juice: "juice bottle",
    jam: "jam jar",
    pudding: "pudding jar",
    tall_bin: "tall bottle",
    short: "short bottle",
    mini_bottle: "mini bottle",
    square: "square bottle",
    slim: "slim bottle",
    clear: "transparent grass bottle",
    green: "green grass bottle",
    amber: "amber glass bottle",
    blue: "blue grass bottle",
    frosted: "frosted grass",
    tall_can: "tall can",
    short_can: "short can",
    round_can: "round can",
    square_can: "square can",
    oval_can: "oval can",
    cokie_can:"cokie can",
    easy_open: "easy open",
    cover: "telescoping lid",
    icecream: "icecream cup",
    milk_carton: "milk carton",
    paper_bag: "paper bag",
    usesketch: "Render the package design closely following the details and layout of the provided sketch",
    paper: "paper",
    glass: "glass",
};

// アプリケーションの状態
let selectedPackageType = "";
let selectedPackageDetails = [];
let selectedAngle = "";

// DOM要素
let packageTypesContainer;
let packageDetailsContainer;
let anglesContainer;
let showPromptBtn;
let copyPromptBtn;
let resetBtn;
let copyMessage;
let promptDisplay;
let generatedPrompt;
let selectionSummary;
let dynamicImageGrid;

// 初期化関数
function initializeElements() {
    packageTypesContainer = document.getElementById("package-types");
    packageDetailsContainer = document.getElementById("package-details");
    anglesContainer = document.getElementById("angles");
    showPromptBtn = document.getElementById("show-prompt-btn");
    copyPromptBtn = document.getElementById("copy-prompt-btn");
    resetBtn = document.getElementById("reset-btn");
    copyMessage = document.getElementById("copy-message");
    promptDisplay = document.getElementById("prompt-display");
    generatedPrompt = document.getElementById("generated-prompt");
    selectionSummary = document.getElementById("selection-summary");
    imageDisplayArea = document.getElementById("image-display-area");
    dynamicImageGrid = document.getElementById("dynamic-image-grid");
}

// パッケージタイプボタンの生成
function renderPackageTypes() {
    packageTypesContainer.innerHTML = "";
    
    Object.keys(packageTypes).forEach(key => {
        const type = packageTypes[key];
        const button = document.createElement("button");
        const isSelected = selectedPackageType === key;
        
        button.className = `package-btn rounded-lg border-2 transition-all duration-200 ${
            isSelected ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
        }`;
        
        button.innerHTML = `
            <div class="flex flex-row items-center space-x-4 p-1">
                <div class="w-24 h-24 flex-none border border-gray-300 rounded-lg flex items-center justify-center">
                    <img src="${type.imageUrl}" alt="${type.name}アイコン" class="w-full h-full object-cover rounded-lg">
                </div>
                <div class="font-medium flex-grow">${type.name}</div>
            </div>
        `;
        
        button.onclick = () => {
            if (selectedPackageType === key) {
                selectedPackageType = "";
                selectedPackageDetails = [];
            } else {
                selectedPackageType = key;
                selectedPackageDetails = [];
            }
            updateUI();
        };
        
        packageTypesContainer.appendChild(button);
    });
}

// 詳細設定ボタンの生成（修正後）
function renderPackageDetails() {
    if (!selectedPackageType) {
        packageDetailsContainer.innerHTML = '<div class="text-gray-500 text-center py-8">パッケージの種類を選択してください</div>';
        return;
    }

    const detailsGroups = packageTypes[selectedPackageType].details;
    let groupsHTML = "";

    // グループごとにループ
    Object.keys(detailsGroups).forEach(groupName => {
        const groupDetails = detailsGroups[groupName];
        let buttonsHTML = "";

        // 各グループ内の詳細設定ボタンを生成
        Object.keys(groupDetails).forEach(key => {
            const detail = groupDetails[key];
            const isSelected = selectedPackageDetails.includes(key);
            const buttonClass = isSelected ? 
                "border-green-500 bg-green-50 text-green-700" : 
                "border-gray-200 hover:border-green-300 hover:bg-green-50";
            
            buttonsHTML += `
                <button class="detail-btn p-3 rounded-lg border-2 transition-all duration-200 ${buttonClass}" data-key="${key}">
                    <div class="text-sm font-medium text-center">${detail}</div>
                </button>
            `;
        });

        // グループごとの見出しとボタンを組み合わせる
        groupsHTML += `
            <div class="space-y-2">
                <h3 class="text-md font-semibold text-gray-700">${groupName}</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">${buttonsHTML}</div>
            </div>
        `;
    });
    
    packageDetailsContainer.innerHTML = `<div class="space-y-4">${groupsHTML}</div>`;

    // 詳細設定ボタンのイベントリスナー
    const detailButtons = packageDetailsContainer.querySelectorAll(".detail-btn");
    detailButtons.forEach(button => {
        button.onclick = function() {
            const key = this.getAttribute("data-key");
            const index = selectedPackageDetails.indexOf(key);
            if (index !== -1) {
                selectedPackageDetails.splice(index, 1);
            } else {
                selectedPackageDetails.push(key);
            }
            updateUI();
        };
    });
}

// アングルボタンの生成
function renderAngles() {
    anglesContainer.innerHTML = "";
    
    Object.keys(angles).forEach(key => {
        const angleData = angles[key];
        const button = document.createElement("button");
        const isSelected = selectedAngle === key;
        
        // 1. ボタン全体のパディングを削除
        button.className = `angle-btn rounded-lg border-2 transition-all duration-200 ${
            isSelected ? "border-purple-500 bg-purple-50 text-purple-700" : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
        }`;
        
        button.innerHTML = `
            <div class="flex flex-row items-center space-x-4 p-1">
                <div class="w-24 h-24 flex-none border border-gray-300 rounded-lg flex items-center justify-center">
                    <img src="${angleData.imageUrl}" alt="${angleData.name}アイコン" class="w-full h-full object-cover rounded-lg">
                </div>
                <div class="font-medium flex-grow">${angleData.name}</div>
            </div>
        `;
        
        button.onclick = () => {
            if (selectedAngle === key) {
                selectedAngle = "";
            } else {
                selectedAngle = key;
            }
            updateUI();
        };
        
        anglesContainer.appendChild(button);
    });
}
// 関連画像表示
const availableImages = [
    { src: "images/sample.png", tags: ["sake", "tall_bin"] },
    { src: "images/sake_short.png", tags: ["sake", "short"] },
    { src: "images/whisky_square.png", tags: ["whisky", "square"] },
    { src: "images/whisky_round.png", tags: ["whisky", "round"] },
    { src: "images/wine_red.png", tags: ["bordeaux", "red_wine"] },
    { src: "images/pouch_stand.png", tags: ["pouch", "stand_pouch"] },
    { src: "images/pouch_stand_clear.png", tags: ["pouch", "stand_pouch", "transparent"] },
    // 他の画像もこの形式で追加
];
function updateFilteredImages() {
    dynamicImageGrid.innerHTML = ""; // コンテナを空にする
    imageDisplayArea.classList.add("hidden");

    // フィルター条件を収集
    const filters = [selectedPackageType, ...selectedPackageDetails].filter(Boolean); // 空の文字列を除去

    if (filters.length === 0) {
        return; // フィルター条件がなければ何もしない
    }
    
    // フィルター条件にすべて一致する画像を抽出
    const matchingImages = availableImages.filter(image => {
        // image.tagsがfiltersをすべて含んでいるかをチェック
        return filters.every(filter => image.tags.includes(filter));
    });

    if (matchingImages.length > 0) {
        imageDisplayArea.classList.remove("hidden");
        
        matchingImages.forEach(image => {
            const imageEl = document.createElement("img");
            imageEl.src = image.src;
            imageEl.alt = "選択されたパッケージのイメージ";
            imageEl.className = "w-full h-full object-contain rounded-lg border border-gray-300";
            
            const wrapper = document.createElement("div");
            wrapper.className = "flex justify-center items-center";
            wrapper.appendChild(imageEl);

            dynamicImageGrid.appendChild(wrapper);
        });
    }
}


// プロンプト生成
function generatePrompt() {
    let prompt = "Create a professional ";
    
    if (selectedPackageType && packageTypes[selectedPackageType]) {
        prompt += packageTypes[selectedPackageType].basePrompt;
        
        if (selectedPackageDetails.length > 0) {
            const detailPromptTexts = selectedPackageDetails
                .filter(detail => detailPrompts[detail])
                .map(detail => detailPrompts[detail]);
            
            if (detailPromptTexts.length > 0) {
                prompt += ", " + detailPromptTexts.join(", ");
            }
        }
        
        if (selectedAngle && angles[selectedAngle]) {
            prompt += ", " + angles[selectedAngle].prompt;
        }
        
        prompt += ", clean white background, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text,";
    } else {
        prompt += "white packaging mockup, clean background, professional quality";
    }
    
    return prompt;
}

// UI更新
function updateUI() {
    renderPackageTypes();
    renderPackageDetails();
    renderAngles();
    updateFilteredImages(); // 新しい画像表示関数を呼び出す
    
    const hasPackageType = selectedPackageType !== "";
    showPromptBtn.disabled = !hasPackageType;
    copyPromptBtn.disabled = !hasPackageType;
    
    // Lucideアイコンの再レンダリング
    if (window.lucide) {
        lucide.createIcons();
    }
}

// プロンプト表示
function showPrompt() {
    if (!selectedPackageType) return;
    
    const prompt = generatePrompt();
    generatedPrompt.textContent = prompt;
    
    // 選択内容の表示
    let summaryHTML = `<div><strong>パッケージタイプ:</strong> ${packageTypes[selectedPackageType].name}</div>`;
    
    // 修正箇所
    if (selectedPackageDetails.length > 0) {
        // すべての詳細設定グループから名前を取得するように変更
        const allDetails = Object.values(packageTypes[selectedPackageType].details).reduce((acc, current) => {
            return acc.concat(Object.keys(current));
        }, []);

        const detailNames = selectedPackageDetails
            .filter(detailKey => allDetails.includes(detailKey))
            .map(detailKey => {
                // グループをループして正しい名前を見つける
                let name = '';
                Object.values(packageTypes[selectedPackageType].details).forEach(group => {
                    if (group[detailKey]) {
                        name = group[detailKey];
                    }
                });
                return name;
            });
        
        if (detailNames.length > 0) {
            summaryHTML += `<div><strong>詳細設定:</strong> ${detailNames.join(", ")}</div>`;
        }
    }
    
    if (selectedAngle) {
        summaryHTML += `<div><strong>アングル:</strong> ${angles[selectedAngle].name}</div>`;
    }
    
    selectionSummary.innerHTML = summaryHTML;
    promptDisplay.classList.remove("hidden");
    promptDisplay.classList.add("fade-in");
}

// プロンプトをクリップボードにコピー
async function copyToClipboard() {
    const prompt = generatePrompt();
    
    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(prompt);
            showCopyMessage("プロンプトをコピーしました！");
        } else {
            // フォールバック: 古いブラウザ対応
            const textArea = document.createElement("textarea");
            textArea.value = prompt;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showCopyMessage("プロンプトをコピーしました！");
        }
    } catch (err) {
        showCopyMessage("コピーに失敗しました");
    }
}

function showCopyMessage(message) {
    copyMessage.textContent = message;
    copyMessage.classList.remove("hidden");
    setTimeout(() => {
        copyMessage.classList.add("hidden");
    }, 3000);
}

// リセット
function reset() {
    selectedPackageType = "";
    selectedPackageDetails = [];
    selectedAngle = "";
    promptDisplay.classList.add("hidden");
    copyMessage.classList.add("hidden");
    updateUI();
}

// イベントリスナーの設定
function setupEventListeners() {
    showPromptBtn.addEventListener("click", showPrompt);
    copyPromptBtn.addEventListener("click", copyToClipboard);
    resetBtn.addEventListener("click", reset);
}

// ページ読み込み完了時の初期化
document.addEventListener("DOMContentLoaded", function() {
    initializeElements();
    setupEventListeners();
    updateUI();
});
