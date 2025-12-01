// パッケージタイプとその詳細設定（修正案）
const packageTypes = {
    cube: {
        name: "立方体",
        imageUrl: "/package-prompt-builder/images/cube.jpeg",
        basePrompt: "white paper box packaging mockup, cubic box, equal length on all sides, seamless edges"
    },
    round: {
        name: "円筒形",
        imageUrl: "/package-prompt-builder/images/round.jpeg",
        basePrompt: "white paper box packaging mockup, cylindrical box, smooth round edges, seamless design"
    },
    oval: {
        name: "楕円形",
        imageUrl: "/package-prompt-builder/images/oval.jpeg",
        basePrompt: "white paper box packaging mockup, oval shaped box, true elliptical shape, a perfect ellipse shape"
    },
    thin: {
        name: "薄い",
        imageUrl: "/package-prompt-builder/images/thin.jpeg",
        basePrompt: "white paper box packaging mockup, the box with a height significantly less than its width, flat box, ultra-low profile, minimal thickness, seamless edges"
    },
    tall: {
        name: "背が高い",
        imageUrl: "/package-prompt-builder/images/tall.jpeg",
        basePrompt: "white paper box packaging mockup, tall and slim box, vertical orientation, premium look, seamless edges"
    },
    horizontal: {
        name: "横長",
        imageUrl: "/package-prompt-builder/images/horizontal.jpeg",
        basePrompt: "white paper box packaging mockup, wide and flat box, landscape orientation, spacious design, seamless edges"
    },
};

const packageDetails = {
    closed: {
        name: "閉じている",
        prompt: "closed lid, a clean, continuous, and unified box"
    },
    open: {
        name: "開いている",
        prompt: "open lid"
    },
    insert: {
        name: "差し込み式",
        prompt: "Tuck-In Flap lid, Tuck-End Box, Tuck-End carton"
    },
    cover: {
        name: "かぶせ式",
        prompt: "The packaging consists of a separate lid and base"
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

// 蓋の設定ボタンの生成
function renderPackageDetails() {
    let buttonsHTML = "";

    Object.keys(packageDetails).forEach(key => {
        const detail = packageDetails[key];
        const isSelected = selectedPackageDetails.includes(key);
        const buttonClass = isSelected ? 
            "border-green-500 bg-green-50 text-green-700" : 
            "border-gray-200 hover:border-green-300 hover:bg-green-50";
        
        buttonsHTML += `
            <button class="detail-btn p-3 rounded-lg border-2 transition-all duration-200 ${buttonClass}" data-key="${key}">
                <div class="text-sm font-medium text-center">${detail.name}</div>
            </button>
        `;
    });

    packageDetailsContainer.innerHTML = `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">${buttonsHTML}</div>
    `;

    // 蓋の設定ボタンのイベントリスナー
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
    const parts = [];
    // 追加：自由記述があれば先に挿入（指定通りプレフィックスを付与）
    if (selectedCustomNote && selectedCustomNote.length > 0) {
        parts.push("white paper box packaging mockup, " + selectedCustomNote);
    }

    // 形状（basePrompt）またはフォールバック
    if (selectedPackageType && packageTypes[selectedPackageType]) {
        const base = packageTypes[selectedPackageType].basePrompt || "";
        if (base) parts.push(base);
    } else {
        parts.push("white packaging mockup, clean background, professional quality");
    }

    // 蓋（重複チェックして追加）
    selectedPackageDetails.forEach(detailKey => {
        const detailPrompt = packageDetails[detailKey]?.prompt;
        if (!detailPrompt) return;
        const isDup = parts.some(p => p.includes(detailPrompt) || detailPrompt.includes(p));
        if (!isDup) parts.push(detailPrompt);
    });

    // アングル
    if (selectedAngle && angles[selectedAngle]) {
        const anglePrompt = angles[selectedAngle].prompt;
        if (anglePrompt && !parts.includes(anglePrompt)) parts.push(anglePrompt);
    }

    // 共通付加句
    parts.push("clean white background, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup, no text");

    return "Create a professional " + parts.join(", ");
}

// UI更新
function updateUI() {
    renderPackageTypes();
    renderPackageDetails();
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
    if (!selectedPackageType) return;
    
    const prompt = generatePrompt();
    generatedPrompt.textContent = prompt;
    
    let summaryHTML = `<div><strong>パッケージタイプ:</strong> ${packageTypes[selectedPackageType].name}</div>`;
    
    if (selectedPackageDetails.length > 0) {
        const detailNames = selectedPackageDetails
            .filter(detailKey => packageDetails[detailKey])
            .map(detailKey => packageDetails[detailKey].name);
        
        if (detailNames.length > 0) {
            summaryHTML += `<div><strong>蓋の設定:</strong> ${detailNames.join(", ")}</div>`;
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
