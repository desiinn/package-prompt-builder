// パッケージタイプとその詳細設定（修正案）
const packageTypes = {
    stand_pouch: {
        name: "スタンドパック",
        imageUrl: "/package-prompt-builder/images/stand_pouch.jpeg",
        basePrompt: "stand-up pouch, self-standing"
    },
    flat: {
        name: "平袋",
        imageUrl: "/package-prompt-builder/images/flat.jpeg",
        basePrompt: "Center seal bag, simple rectangular shape, with sealed top and bottom edges only, smooth sides without creases or seals"
    },
    individual: {
        name: "個包装袋",
        imageUrl: "/package-prompt-builder/images/individual.jpeg",
        basePrompt: "individual plastic pouch"
    },
    can: {
        name: "缶",
        imageUrl: "/package-prompt-builder/images/can.jpeg",
        basePrompt: "can"
    },
    paper_cup: {
        name: "カップ",
        imageUrl: "/package-prompt-builder/images/paper_cup.jpeg",
        basePrompt: "paper cup"
    },
    other: {
        name: "その他",
        imageUrl: "/package-prompt-builder/images/other.jpeg",
        basePrompt: ""
    },
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

// images/pict フォルダ内の画像ファイル名を手動で列挙
const pictImages = [
    { filename: "can-diagonal.jpeg", prompt: "Generate a white packaging mockup image of a low, square cookie tin, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-10.jpeg", prompt: "Generate a white packaging mockup image of a 保存食缶, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-2.jpeg", prompt: "Generate a white packaging mockup image of a square tea can, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-3.jpeg", prompt: "Generate a white packaging mockup image of a can, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-4.jpeg", prompt: "Generate a white packaging mockup image of a tea or other packaging can, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-5.jpeg", prompt: "Generate a white packaging mockup image of a tea or other packaging can, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-6.jpeg", prompt: "Generate a white packaging mockup image of a can, クッキー缶, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-7.jpeg", prompt: "Generate a white packaging mockup image of a round, low-profile cookie tin, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-8.jpeg", prompt: "Generate a white packaging mockup image of a round, low-profile cookie tin, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front-9.jpeg", prompt: "Generate a white packaging mockup image of a low-profile food storage can, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-front.jpeg", prompt: "Generate a white packaging mockup image of a low, square cookie tin, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-multi_views-2.jpeg", prompt: "Generate a white packaging mockup image of a 2つ並んだ飲料缶、clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "can-multi_views.jpeg", prompt: "Generate a white packaging mockup image of a 3つ並んだ飲料缶、 clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-10.jpeg", prompt: "Generate a white packaging mockup image of a 蓋が閉まった背の低いアイスクリームカップ、斜め上からの視点、 clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-11.jpeg", prompt: "Generate a white packaging mockup image of a 背の低いアイスクリームカップ、斜め上からの視点、 clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-12.jpeg", prompt: "Generate a white packaging mockup image of a takeaway drink cup with a plastic lid, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-2.jpeg", prompt: "Generate a white packaging mockup image of a mini ice cream cup, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-3.jpeg", prompt: "Generate a white packaging mockup image of a paper cup, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-4.jpeg", prompt: "Generate a white packaging mockup image of an ice cream container, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-5.jpeg", prompt: "Generate a white packaging mockup image of a mini ice cream cup, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-6.jpeg", prompt: "Generate a white packaging mockup image of a 背の低いアイスクリームカップ、蓋が開いている、 clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-7.jpeg", prompt: "Generate a white packaging mockup image of a takeaway drink cup with a domed plastic lid and straw, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-8.jpeg", prompt: "Generate a white packaging mockup image of a takeaway drink cup with a gray lid, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-9.jpeg", prompt: "Generate a white packaging mockup image of a 蓋が閉まった背の低いアイスクリームカップ、斜め上からの視点、 clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup-multi_views.jpeg", prompt: "Generate a white packaging mockup image of a 2つ並んだ背の低いアイスクリームカップ、clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "paper_cup.jpeg", prompt: "Generate a white packaging mockup image of a 紙製フードボウル, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-diagonal.jpeg", prompt: "Generate a transparent packaging mockup image of a flat pouch, simple rectangular shape, with only top and bottom heat sealed edges, no side seals, smooth and seamless sides, standing upright with a subtle 3/4 angle view, slight perspective, soft drop shadow beneath the pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-diagonal-2.jpeg", prompt: "Generate a white packaging mockup image of a flat fin seal pouch, simple rectangular shape, with sealed top and bottom edges only, smooth sides without any creases or gussets, 3/4 angle view, slight perspective, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-front-2.jpeg", prompt: "Generate a transparent packaging mockup image of a flat pouch, simple rectangular shape, with only top and bottom heat sealed edges, no side seals, smooth and seamless sides, front view, soft drop shadow beneath the pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-front-3.jpeg", prompt: "Generate a white packaging mockup image of a flat pouch, Center seal bag, smooth sides without creases or seals, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-front-4.jpeg", prompt: "Generate a white packaging mockup image of a Center seal bag, simple rectangular shape, with sealed top and bottom edges only, smooth sides without creases or seals, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-front-5.jpeg", prompt: "Generate a white packaging mockup image of a flat pouch, simple rectangular shape, with sealed top and bottom edges only, smooth sides without creases or seals, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-front-6.jpeg", prompt: "Generate a white packaging mockup image of a flat pouch, simple rectangular shape, with sealed top and bottom edges only, smooth sides without creases or seals, compact, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-front.jpeg", prompt: "Generate a white packaging mockup image of a flat pouch, simple rectangular shape, with only top and bottom heat sealed edges, no side seals, smooth and seamless sides, front view, soft drop shadow beneath the pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-diagonal-2.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, cookie pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-diagonal-3.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, cookie pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-diagonal-4.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, cookie pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-diagonal-5.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, candy pouch, 透明プラスチック、 clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-diagonal.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, cookie pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-front.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, candy pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-front-2.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, candy pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-front-3.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, candy pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-front-4.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, candy pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-front-5.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, candy bar pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-front-6.jpeg", prompt: "Generate a white packaging mockup image of a individual plastic pouch, candy bar pouch, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-individual-front-7.jpeg", prompt: "Generate a white packaging mockup image of a Center seal bag, simple rectangular shape, with sealed top and bottom edges only, smooth sides without creases or seals, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-diagonal-2.jpeg", prompt: "Generate a white packaging mockup image of a stand-up pouch, self-standing, 3/4 angle view, slight perspective, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-diagonal-3.jpeg", prompt: "Generate a packaging mockup image of a stand-up pouch, self-standing, kraft paper texture, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-diagonal-4.jpeg", prompt: "Generate a white packaging mockup image of a stand-up pouch, self-standing, 3/4 angle view, slight perspective, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-diagonal.jpeg", prompt: "Generate a packaging mockup image of a stand-up pouch, self-standing, 透明プラスチック, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-front-2.jpeg", prompt: "Generate a packaging mockup image of a stand-up pouch, self-standing, クラフト紙のテクスチャ、front view, centered composition, No angled view, no side view, no three-quarters view, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-front-3.jpeg", prompt: "Generate a packaging mockup image of a stand-up pouch, self-standing, 透明プラスチック、front view, centered composition, No angled view, no side view, no three-quarters view, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-front-4.jpeg", prompt: "Generate a white packaging mockup image of a stand-up pouch, self-standing, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-front-5.jpeg", prompt: "Generate a packaging mockup image of a stand-up pouch, self-standing, アルミのテクスチャ、front view, centered composition, No angled view, no side view, no three-quarters view, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-front.jpeg", prompt: "Generate a white packaging mockup image of a stand-up pouch, self-standing, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-multi_views-2.jpeg", prompt: "Generate a white packaging mockup image of a stand-up pouch, self-standing, shown from top, front, and side angles, on a single page, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-multi_views-3.jpeg", prompt: "Generate a white packaging mockup image of a stand-up pouch, self-standing, shown from top, front, and side angles, on a single page, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-multi_views-4.jpeg", prompt: "Generate a packaging mockup image of a stand-up pouch, self-standing, kraft paper texture, shown from top, front, and side angles, on a single page, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-stand_pouch-multi_views.jpeg", prompt: "Generate a packaging mockup image of a stand-up pouch, self-standing, kraft paper texture, shown from top, front, and side angles, on a single page, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "other-diagonal.jpeg", prompt: "Generate a white paper box packaging mockup, seamless edges, the packaging consists of a separate lid and base, open lid, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "other-diagonal_2.jpeg", prompt: "generate a white paper box packaging mockup, Luxury rigid box, open lid, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "other-diagonal_3.jpeg", prompt: "Generate a white packaging mockup image of a 持ち手の付いた紙箱, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "other-diagonal_4.jpeg", prompt: "Generate a white packaging mockup image of a milk carton, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "other-diagonal_5.jpeg", prompt: "Generate a white packaging mockup image of a 牛乳パック, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "other-diagonal_6.jpeg", prompt: "generate a white paper box packaging mockup, seamless edges, Tuck-In Flap lid, Tuck-End Box, Tuck-End carton, open lid, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "other-front.jpeg", prompt: "generate a white paper box packaging mockup, cylindrical box, smooth round edges, seamless design, tall and slim box, vertical orientation, premium look, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "other-front_2.jpeg", prompt: "Generate a white paper box packaging mockup, cylindrical box, smooth round edges, seamless design, open lid, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },

    // 追加したい画像ファイルと対応するプロンプト文をここに追記
];

// 関連画像データ
const availableImages = pictImages.map(item => {
    const tags = item.filename.replace(/\.[^/.]+$/, "").split("-");
    return {
        src: "images/pict/" + item.filename,
        tags: tags,
        prompt: item.prompt || ""
    };
});

// アプリケーションの状態
let selectedPackageType = "";
let selectedAngle = "";
let selectedCustomNote = "";

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
let customNoteInput;

// 初期化関数
function initializeElements() {
    packageTypesContainer = document.getElementById("package-types");
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

    // 追加：パッケージ種類エリアの直下に自由記述欄を動的に挿入（なければ）
     customNoteInput = document.getElementById("custom-note-input");
    if (customNoteInput) {
        selectedCustomNote = customNoteInput.value.trim();
    }
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
    if (!dynamicImageGrid) return;
    
    dynamicImageGrid.innerHTML = ""; // コンテナを空にする

    // フィルター条件を収集
    const filters = [selectedPackageType, selectedAngle].filter(Boolean);

    if (filters.length === 0) {
        imageDisplayArea.classList.remove("hidden");
        dynamicImageGrid.innerHTML = '<div class="text-gray-500 text-center py-8 col-span-4">該当する画像がありません</div>';
        return;
    }
    
    // フィルター条件のすべてに一致する画像のみ抽出（AND条件）
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
            
            // クリックでモーダル表示（プロンプト文を渡す）
            imageEl.onclick = () => openImageModal(image.src, image.prompt);

            // 画像のみをラップ（プロンプトテキストは追加しない）
            const wrapper = document.createElement("div");
            wrapper.className = "flex flex-col justify-center items-center";
            wrapper.appendChild(imageEl);

            dynamicImageGrid.appendChild(wrapper);
        });
    } else {
        dynamicImageGrid.innerHTML = '<div class="text-gray-500 text-center py-8 col-span-4">該当する画像がありません</div>';
    }
}

// --- 画像プレビューモーダル制御 ---
function openImageModal(src, prompt = "") {
    const overlay = document.getElementById('image-modal-overlay');
    const modalImg = document.getElementById('image-modal-img');
    const imageModalPrompt = document.getElementById('image-modal-prompt');
    
    if (!overlay || !modalImg) return;
    
    modalImg.src = src;
    overlay.classList.remove('hidden');
    
    // プロンプト表示エリアを制御
    if (imageModalPrompt) {
        if (prompt && prompt.trim().length > 0) {
            // テキスト内容を更新
            const promptContent = imageModalPrompt.querySelector('div') || imageModalPrompt;
            promptContent.textContent = prompt;
            imageModalPrompt.classList.remove("hidden");
        } else {
            imageModalPrompt.classList.add("hidden");
        }
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

// プロンプト生成（修正）
function generatePrompt() {
    const parts = [];

    // 形状（basePrompt）があれば先に追加
    if (selectedPackageType && packageTypes[selectedPackageType]) {
        const base = packageTypes[selectedPackageType].basePrompt || "";
        if (base) parts.push(base);
    }

    // 追加：自由記述があれば形状の直後に挿入（プレフィックスなし）
    if (selectedCustomNote && selectedCustomNote.length > 0) {
        parts.push(selectedCustomNote);
    }

    // アングル
    if (selectedAngle && angles[selectedAngle]) {
        const anglePrompt = angles[selectedAngle].prompt;
        if (anglePrompt && !parts.includes(anglePrompt)) parts.push(anglePrompt);
    }

    // 共通付加句（先頭の "Generate a white paper box mockup image" は呼び出し側で付与）
    parts.push("clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text");

    // parts が空でも共通句は付くので空チェック不要
    return "Generate a white packaging mockup image of a " + parts.join(", ");
}

// UI更新
function updateUI() {
    renderPackageTypes();
    renderAngles();
    updateFilteredImages(); // 新しい画像表示関数を呼び出す
    
    const hasPackageTypeOrNote = selectedPackageType !== "" || (selectedCustomNote && selectedCustomNote.length > 0);
    showPromptBtn.disabled = !hasPackageTypeOrNote;
    copyPromptBtn.disabled = !hasPackageTypeOrNote;
    
    // プロンプト表示欄を非表示にする（選択内容が変わった場合）
    promptDisplay.classList.add("hidden");
    
    // Lucideアイコンの再レンダリング
    if (window.lucide) {
        lucide.createIcons();
    }
}

// プロンプト表示
function showPrompt() {
    const hasPackageTypeOrNote = selectedPackageType !== "" || (selectedCustomNote && selectedCustomNote.length > 0);
    if (!hasPackageTypeOrNote) return;

    const prompt = generatePrompt();
    generatedPrompt.textContent = prompt;
    
     let summaryHTML = "";
    
    // パッケージタイプがあれば表示
    if (selectedPackageType) {
        summaryHTML += `<div><strong>パッケージタイプ:</strong> ${packageTypes[selectedPackageType].name}</div>`;
    }
    
    // アングルがあれば表示
    if (selectedAngle) {
        summaryHTML += `<div><strong>アングル:</strong> ${angles[selectedAngle].name}</div>`;
    }
    
    // 自由記述があれば表示
    if (selectedCustomNote) {
        summaryHTML += `<div><strong>その他（自由記述）:</strong> ${selectedCustomNote}</div>`;
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
    selectedAngle = "";
    selectedCustomNote = ""; 
    if (customNoteInput) customNoteInput.value = "";
    promptDisplay.classList.add("hidden");
    copyMessage.classList.add("hidden");
    updateUI();
}

// イベントリスナーの設定
function setupEventListeners() {
    showPromptBtn.addEventListener("click", showPrompt);
    copyPromptBtn.addEventListener("click", copyToClipboard);
    resetBtn.addEventListener("click", reset);

// 追加：自由記述入力の変更を監視
    if (customNoteInput) {
        customNoteInput.addEventListener("input", (e) => {
            selectedCustomNote = e.target.value.trim();
            // 選択内容が変わったとみなしてUIを更新（プロンプト欄は非表示に）
            updateUI();
        });
    }
}



