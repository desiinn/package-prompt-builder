// パッケージタイプとその詳細設定（修正案）
const packageTypes = {
    box: {
        name: "箱",
        imageUrl: "/package-prompt-builder/images/box.jpeg",
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
        basePrompt: "white paper box packaging mockup, seamless edges"
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
            },
            素材: {
                white: "プラスチック（白）",
                transparent: "プラスチック（透明）",
                kraft: "クラフト紙",
                aluminum: "アルミ"
            },
        },
        basePrompt: "plastic pouch packaging mockup"
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
                cover_can: "かぶせ式"
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
        imageUrl: "/package-prompt-builder/images/front-view.jpeg",
        prompt: "front view, centered composition, No angled view, no side view, no three-quarters view"
    },
    diagonal: {
        name: "斜めから",
        imageUrl: "/package-prompt-builder/images/diagonal-view.jpeg",
        prompt: "3/4 angle view, slight perspective"
    },
    multi_views: {
        name: "複数方向から",
        imageUrl: "/package-prompt-builder/images/multi_views.jpeg",
        prompt: " shown from top, front, and side angles, on a single page"
    }
};

// 詳細プロンプトマッピング
const detailPrompts = {
     // 箱
    cube: "cubic box, equal length on all sides",
    rectangular: "rectangular box",
    round: "cylindrical box, smooth round edges, seamless design",
    oval: "oval shaped box, true elliptical shape, a perfect ellipse shape",
    thin: "the box with a height significantly less than its width, flat box, ultra-low profile, minimal thickness",
    tall: "tall and slim box, vertical orientation, premium look",
    horizontal: "wide and flat box, landscape orientation, spacious design",
    closed: "closed lid, a clean, continuous, and unified box",
    open: "open lid",
    insert: "Tuck-In Flap lid, Tuck-End Box, Tuck-End carton",
    cover: "The packaging consists of a separate lid and base",

    // 袋
    stand_pouch: "stand-up pouch, self-standing",
    gusset: "gusseted pouch, expandable sides, increased capacity",
    individual: "flat pouch, individual plastic pouch, top and bottom sealed only",
    flat: "flat pouch, simple rectangular shape, compact",
    spout_pouch: "spout pouch, stand-up with spout, easy pour",
    white: "white plastic material, clean and pure look",
    transparent: "transparent plastic, contents visible, glossy finish",
    kraft: "kraft paper material, natural brown color, eco-friendly",
    aluminum: "matte aluminum, metallic finish, premium protection",

    // ボトル
    sake: "traditional sake bottle, slender neck, Japanese style",
    beer: "classic beer bottle, amber glass, short neck",
    whisky: "whisky bottle, broad shoulders, premium glass",
    bordeaux: "bordeaux wine bottle, tall with high shoulders, elegant",
    burgundy: "burgundy wine bottle, gently sloping shoulders, refined",
    red_wine: "red wine bottle, deep color, classic shape",
    white_wine: "white wine bottle, clear glass, slim profile",
    pet_bottle: "PET plastic bottle, lightweight, modern",
    juice: "juice bottle, vibrant, wide mouth",
    jam: "jam jar, round glass, wide opening",
    pudding: "pudding jar, small glass, dessert packaging",
    tall_bin: "tall bottle, elongated shape, premium feel",
    short: "short bottle, compact, sturdy",
    mini_bottle: "miniature bottle, sample size, cute design",
    square: "square bottle, sharp edges, modern look",
    slim: "slim bottle, narrow profile, elegant",
    clear: "clear glass, transparent, shows contents",
    green: "green glass, classic wine bottle color",
    amber: "amber glass, protects from light, vintage style",
    blue: "blue glass, unique, eye-catching",
    frosted: "frosted glass, matte finish, soft touch",

    // 缶
    tall_can: "tall can, slim and elongated, energy drink style",
    short_can: "short can, compact, soda style",
    round_can: "round can, cylindrical, smooth edges",
    square_can: "square can, modern, unique shape",
    oval_can: "oval can, soft curves, distinctive",
    cokie_can: "cookie tin, decorative, metallic finish",
    easy_open: "easy-open lid, pull tab, convenient",
    cover_can: "telescoping lid, two-piece can, premium",

    // その他
    icecream: "ice cream cup, round, single-serve, dessert packaging",
    milk_carton: "milk carton, gable top, classic paper packaging",
    paper_bag: "paper bag, flat bottom, eco-friendly",
    usesketch: "Render the package design closely following the details and layout of the provided sketch, match proportions and features accurately",
    paper: "paper material, matte finish, recyclable",
    glass: "glass material, glossy, transparent",
};

// images/pict フォルダ内の画像ファイル名を手動で列挙
const pictImages = [
    "box-cube-closed-cover-multi_views.jpeg",
    "box-cube-cover-closed-diagonal-2.jpeg",
    "box-cube-cover-closed-diagonal.jpeg",
    "box-cube-cover-closed-front-2.jpeg",
    "box-cube-cover-closed-front-3.jpeg",
    "box-cube-cover-closed-front.jpeg",
    "box-cube-insert-closed-diagonal-2.jpeg",
    "box-cube-insert-closed-diagonal-3.jpeg",
    "box-cube-insert-closed-diagonal-4.jpeg",
    "box-cube-insert-closed-diagonal.jpeg",
    "box-cube-insert-closed-front-1.jpeg",
    "box-cube-insert-closed-front-2.jpeg",
    "box-cube-insert-closed-front-3.jpeg",
    "box-cube-insert-closed-front.jpeg",
    "box-cube-open-cover-diagonal.jpeg",
    "box-oval-closed-cover-diagonal-2.jpeg",
    "box-oval-closed-cover-diagonal.jpeg",
    "box-oval-closed-cover-multi_views.jpeg",
    "box-oval-closed-cover-thin-diagonal.jpeg",
    "box-oval-cover-thin-open-diagonal-2.jpeg",
    "box-oval-cover-thin-open-diagonal-3.jpeg",
    "box-oval-cover-thin-open-diagonal-4.jpeg",
    "box-oval-cover-thin-open-diagonal-5.jpeg",
    "box-oval-cover-thin-open-diagonal-6.jpeg",
    "box-oval-cover-thin-open-diagonal.jpeg",
    "box-rectangular-closed-insert-front-2.jpeg",
    "box-rectangular-closed-insert-front.jpeg",
    "box-rectangular-cover-closed-diagonal.jpeg",
    "box-rectangular-cover-diagonal-2.jpeg",
    "box-rectangular-cover-diagonal-3.jpeg",
    "box-rectangular-cover-diagonal.jpeg",
    "box-rectangular-cover-open-diagonal-2.jpeg",
    "box-rectangular-cover-open-diagonal-3.jpeg",
    "box-rectangular-cover-open-diagonal-4.jpeg",
    "box-rectangular-cover-open-diagonal-5.jpeg",
    "box-rectangular-cover-open-diagonal.jpeg",
    "box-rectangular-cube-cover-diagonal.jpeg",
    "box-rectangular-horizontal-closed-cover-diagonal-2.jpeg",
    "box-rectangular-horizontal-closed-cover-diagonal.jpeg",
    "box-rectangular-horizontal-insert-closed-diagonal.jpeg",
    "box-rectangular-horizontal-insert-open-diagonal-2.jpeg",
    "box-rectangular-horizontal-insert-open-diagonal-3.jpeg",
    "box-rectangular-horizontal-insert-open-diagonal.jpeg",
    "box-rectangular-horizontal-open-cover-diagonal.jpeg",
    "box-rectangular-insert-closed-diagonal-2.jpeg",
    "box-rectangular-insert-closed-diagonal.jpeg",
    "box-rectangular-open-insert-diagonal.jpeg",
    "box-rectangular-tall-closed-insert-diagonal-2.jpeg",
    "box-rectangular-tall-closed-insert-diagonal-3.jpeg",
    "box-rectangular-tall-closed-insert-diagonal-4.jpeg",
    "box-rectangular-tall-closed-insert-diagonal.jpeg",
    "box-rectangular-thin-cover-closed-diagonal.jpeg",
    "box-rectangular-thin-cube-closed-diagonal.jpeg",
    "box-round-cover-closed.jpeg",
    "box-round-open-cover-10.jpeg",
    "box-round-open-cover-2.jpeg",
    "box-round-open-cover-3.jpeg",
    "box-round-open-cover-4.jpeg",
    "box-round-open-cover-5.jpeg",
    "box-round-open-cover-6.jpeg",
    "box-round-open-cover-7.jpeg",
    "box-round-open-cover-8.jpeg",
    "box-round-open-cover-9.jpeg",
    "box-round-open-cover.jpeg",
    "box-round-oval-thin-cover-closed.jpeg",
    "box-round-oval-thin-cover-closed2.jpeg",
    "box-round-tall-closed-2.jpeg",
    "box-round-tall-closed-cover.jpeg",
    "box-round-tall-closed.jpeg",
    "box-round-thin-cover-closed-2.jpeg",
    "box-round-thin-cover-closed-3.jpeg",
    "box-round-thin-cover-closed.jpeg",
    "box-round-thin-open-cover-2.jpeg",
    "box-round-thin-open-cover-3.jpeg",
    "box-round-thin-open-cover-4.jpeg",
    "box-round-thin-open-cover-5.jpeg",
    "box-round-thin-open-cover.jpeg",
    "pouch-stand_pouch-white-multi_views.jpg",
    // 追加したい画像ファイル名をここに追記
];

// 関連画像データ
const availableImages = pictImages.map(filename => {
    // 拡張子を除いた部分をタグとして分割
    const tags = filename.replace(/\.[^/.]+$/, "").split("-")
    return {
        src: "images/pict/" + filename,
        tags: tags
    };
});

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
let imageDisplayArea;
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
            <div class="flex flex-col items-center justify-center py-2">
                <div class="w-[120px] h-[120px] flex-none border border-gray-300 rounded-lg flex items-center justify-center mb-2 overflow-hidden bg-white">
                    <img src="${type.imageUrl}" alt="${type.name}アイコン" class="max-w-full max-h-full object-contain rounded-lg" />
                </div>
                <div class="font-medium text-center text-sm">${type.name}</div>
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

// 詳細設定ボタンの生成
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
             <div class="flex flex-col items-center justify-center py-2">
                 <div class="w-[120px] h-[120px] flex-none border border-gray-300 rounded-lg flex items-center justify-center mb-2 overflow-hidden bg-white">
                    <img src="${angleData.imageUrl}" alt="${angleData.name}アイコン" class="max-w-full max-h-full object-contain rounded-lg">
                </div>
                <div class="font-medium text-center text-sm">${angleData.name}</div>
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
// 関連画像表示（AND条件で全タグ一致のみ表示）
function updateFilteredImages() {
    dynamicImageGrid.innerHTML = ""; // コンテナを空にする

    // フィルター条件を収集
    const filters = [selectedPackageType, ...selectedPackageDetails, selectedAngle].filter(Boolean); // 空の文字列を除去

    if (filters.length === 0) {
    imageDisplayArea.classList.remove("hidden");
    dynamicImageGrid.innerHTML = '<div class="text-gray-500 text-center py-8 col-span-4">該当する画像がありません</div>';
    return;
    }
    
    // フィルター条件の**すべてに**一致する画像のみ抽出（AND条件）
    const matchingImages = availableImages.filter(image => {
        return filters.every(filter => image.tags.includes(filter));
    });

    imageDisplayArea.classList.remove("hidden");
    
    if (matchingImages.length > 0) {
        matchingImages.forEach(image => {
            const imageEl = document.createElement("img");
            imageEl.src = image.src;
            imageEl.alt = "選択されたパッケージのイメージ";
            imageEl.className = "w-full h-full object-contain rounded-lg border border-gray-300 cursor-pointer transition hover:scale-105";
            imageEl.style.maxWidth = "200px";
            imageEl.style.maxHeight = "200px";
            
            // クリックでモーダル表示
            imageEl.onclick = () => openImageModal(image.src);

            const wrapper = document.createElement("div");
            wrapper.className = "flex justify-center items-center";
            wrapper.appendChild(imageEl);

            dynamicImageGrid.appendChild(wrapper);
        });
    } else {
        dynamicImageGrid.innerHTML = '<div class="text-gray-500 text-center py-8 col-span-4">該当する画像がありません</div>';
    }
}

// --- 画像プレビューモーダル制御 ---
function openImageModal(src) {
    const overlay = document.getElementById('image-modal-overlay');
    const modalImg = document.getElementById('image-modal-img');
    if (overlay && modalImg) {
        modalImg.src = src;
        overlay.classList.remove('hidden');
    }
}
function closeImageModal() {
    const overlay = document.getElementById('image-modal-overlay');
    if (overlay) overlay.classList.add('hidden');
}

// ページ読み込み完了時の初期化
document.addEventListener("DOMContentLoaded", function() {
    initializeElements();
    setupEventListeners();
    updateUI();

    // 画像モーダルのイベント
    const overlay = document.getElementById('image-modal-overlay');
    const closeBtn = document.getElementById('image-modal-close');
    if (overlay && closeBtn) {
        closeBtn.onclick = closeImageModal;
        overlay.onclick = (e) => {
            if (e.target === overlay) closeImageModal();
        };
    }
});

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
    
    // プロンプト表示欄を非表示にする（選択内容が変わった場合）
    promptDisplay.classList.add("hidden");
    
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

    // --- ヘルプボタン・モーダルのイベント設定 ---
    const helpBtn = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal-overlay');
    const helpClose = document.getElementById('help-modal-close');

    if (helpBtn && helpModal && helpClose) {
        helpBtn.onclick = () => helpModal.classList.remove('hidden');
        helpClose.onclick = () => helpModal.classList.add('hidden');
        helpModal.onclick = (e) => {
            if (e.target === helpModal) helpModal.classList.add('hidden');
        };
    }
});
