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
        basePrompt: "flat pouch, individual plastic pouch, top and bottom sealed only"
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
    { filename: "can-diagonal.jpeg", prompt: "" },
    { filename: "can-front-10.jpeg", prompt: "" },
    { filename: "can-front-2.jpeg", prompt: "" },
    { filename: "can-front-3.jpeg", prompt: "" },
    { filename: "can-front-4.jpeg", prompt: "" },
    { filename: "can-front-5.jpeg", prompt: "" },
    { filename: "can-front-6.jpeg", prompt: "" },
    { filename: "can-front-7.jpeg", prompt: "" },
    { filename: "can-front-8.jpeg", prompt: "" },
    { filename: "can-front-9.jpeg", prompt: "" },
    { filename: "can-front.jpeg", prompt: "" },
    { filename: "can-multi_views-2.jpeg", prompt: "" },
    { filename: "can-multi_views.jpeg", prompt: "" },
    { filename: "paper_cup-10.jpeg", prompt: "" },
    { filename: "paper_cup-11.jpeg", prompt: "" },
    { filename: "paper_cup-12.jpeg", prompt: "" },
    { filename: "paper_cup-2.jpeg", prompt: "" },
    { filename: "paper_cup-3.jpeg", prompt: "" },
    { filename: "paper_cup-4.jpeg", prompt: "" },
    { filename: "paper_cup-5.jpeg", prompt: "" },
    { filename: "paper_cup-6.jpeg", prompt: "" },
    { filename: "paper_cup-7.jpeg", prompt: "" },
    { filename: "paper_cup-8.jpeg", prompt: "" },
    { filename: "paper_cup-9.jpeg", prompt: "" },
    { filename: "paper_cup-multi_views.jpeg", prompt: "" },
    { filename: "paper_cup.jpeg", prompt: "" },
    { filename: "pouch-flat-diagonal.jpeg", prompt: "" },
    { filename: "pouch-flat-front-2.jpeg", prompt: "" },
    { filename: "pouch-flat-front-3.jpeg", prompt: "" },
    { filename: "pouch-flat-front-4.jpeg", prompt: "Generate a white packaging mockup image of a Center seal bag, simple rectangular shape, with sealed top and bottom edges only, smooth sides without creases or seals, clean white background, professional quality, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text" },
    { filename: "pouch-flat-front-5.jpeg", prompt: "" },
    { filename: "pouch-flat-front.jpeg", prompt: "" },
    { filename: "pouch-individual-diagonal-2.jpeg", prompt: "" },
    { filename: "pouch-individual-diagonal-3.jpeg", prompt: "" },
    { filename: "pouch-individual-diagonal-4.jpeg", prompt: "" },
    { filename: "pouch-individual-diagonal.jpeg", prompt: "" },
    { filename: "pouch-individual-front.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-diagonal-2.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-diagonal-3.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-diagonal-4.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-diagonal.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-front-2.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-front-3.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-front-4.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-front-5.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-front.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-multi_views-2.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-multi_views-3.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-multi_views-4.jpeg", prompt: "" },
    { filename: "pouch-stand_pouch-multi_views.jpeg", prompt: "" }
    // 追加したい画像ファイルと対応するプロンプト文をここに追記
];

// 関連画像データ
const availableImages = pictImages.map(filename => {
    // 拡張子を除いた部分をタグとして分割
    const tags = filename.replace(/\.[^/.]+$/, "").split("-")
    return {
        src: "images/pict/" + filename,
        tags: tags
        prompt: item.prompt // プロンプト文を保持
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
    dynamicImageGrid.innerHTML = ""; // コンテナを空にする

    // フィルター条件を収集
    const filters = [selectedPackageType, selectedAngle].filter(Boolean); // 空の文字列を除去

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

            // プロンプト表示用テキスト
            const promptTextEl = document.createElement("div");
            promptTextEl.className = "text-xs text-gray-600 mt-2 p-2 bg-gray-50 rounded border border-gray-200 max-w-[200px] break-words line-clamp-2";
            promptTextEl.textContent = image.prompt;

            const wrapper = document.createElement("div");
            wrapper.className = "flex justify-center items-center";
            wrapper.appendChild(imageEl);
        
            wrapper.appendChild(promptTextEl);

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
        // プロンプト表示エリアがあれば表示
        if (promptDisplay) {
            if (prompt) {
                promptDisplay.textContent = prompt;
                promptDisplay.classList.remove("hidden");
            } else {
                promptDisplay.classList.add("hidden");
            }
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



