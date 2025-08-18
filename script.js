// パッケージタイプとその詳細設定
const packageTypes = {
    box: {
        name: "箱",
        details: {
            cube: "立方体",
            thin: "薄型",
            rectangular: "長方形",
            cylindrical: "円筒形"
        },
        basePrompt: "white cardboard box packaging mockup"
    },
    bottle: {
        name: "瓶",
        details: {
            round: "丸型",
            square: "角型",
            tall: "縦長",
            spray: "スプレー"
        },
        basePrompt: "white bottle packaging mockup"
    },
    pouch: {
        name: "プラ袋",
        details: {
            stand: "スタンドパウチ",
            flat: "平袋",
            gusset: "ガゼット袋",
            zipper: "ジッパー付き"
        },
        basePrompt: "white plastic pouch packaging mockup"
    },
    tube: {
        name: "チューブ",
        details: {
            squeeze: "スクイーズ",
            flip: "フリップキャップ",
            pump: "ポンプ",
            twist: "ツイストキャップ"
        },
        basePrompt: "white tube packaging mockup"
    },
    can: {
        name: "缶",
        details: {
            beverage: "飲料缶",
            food: "食品缶",
            aerosol: "エアゾール",
            paint: "ペンキ缶"
        },
        basePrompt: "white metal can packaging mockup"
    },
    jar: {
        name: "ジャー",
        details: {
            glass: "ガラス",
            plastic: "プラスチック",
            wide: "広口",
            narrow: "狭口"
        },
        basePrompt: "white jar packaging mockup"
    }
};

const angles = {
    front: {
        name: "正面",
        prompt: "front view, centered composition"
    },
    diagonal: {
        name: "斜めから",
        prompt: "3/4 angle view, slight perspective"
    },
    three_views: {
        name: "三面図",
        prompt: "three view technical drawing, front side and top view"
    }
};

// 詳細プロンプトマッピング
const detailPrompts = {
    thin: "slim profile, flat rectangular shape",
    cube: "cubic shape, equal dimensions",
    rectangular: "rectangular prism, standard proportions",
    cylindrical: "cylindrical container, round cross-section",
    round: "round bottle, circular cross-section",
    square: "square bottle, angular design",
    tall: "tall bottle, elongated proportions",
    spray: "spray bottle with trigger, ergonomic design",
    stand: "stand-up pouch, flexible packaging",
    flat: "flat pouch, simple rectangular shape",
    gusset: "gusseted pouch, expandable sides",
    zipper: "resealable zipper pouch, convenient opening",
    squeeze: "squeeze tube, flexible body",
    flip: "flip-top cap, easy access",
    pump: "pump dispenser, professional look",
    twist: "twist cap, secure closure",
    beverage: "beverage can, tall cylindrical shape",
    food: "food can, shorter cylindrical shape",
    aerosol: "aerosol can, pressurized container",
    paint: "paint can, wide cylindrical container",
    glass: "glass jar, transparent material",
    plastic: "plastic jar, lightweight design",
    wide: "wide mouth jar, easy access",
    narrow: "narrow mouth jar, controlled dispensing"
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
}

// パッケージタイプボタンの生成
function renderPackageTypes() {
    packageTypesContainer.innerHTML = "";
    
    Object.keys(packageTypes).forEach(key => {
        const type = packageTypes[key];
        const button = document.createElement("button");
        const isSelected = selectedPackageType === key;
        
        button.className = `package-btn p-4 rounded-lg border-2 transition-all duration-200 ${
            isSelected ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
        }`;
        
        button.innerHTML = `
            <div class="flex flex-col items-center space-y-2">
                <div class="w-12 h-12 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
                    <i data-lucide="package" class="w-6 h-6 text-gray-500"></i>
                </div>
                <div class="font-medium text-center">${type.name}</div>
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

    const details = packageTypes[selectedPackageType].details;
    let buttonsHTML = "";
    
    Object.keys(details).forEach(key => {
        const detail = details[key];
        const isSelected = selectedPackageDetails.includes(key);
        const buttonClass = isSelected ? 
            "border-green-500 bg-green-50 text-green-700" : 
            "border-gray-200 hover:border-green-300 hover:bg-green-50";
        
        buttonsHTML += `
            <button class="detail-btn p-3 rounded-lg border-2 transition-all duration-200 ${buttonClass}" data-key="${key}">
                <div class="flex flex-col items-center space-y-2">
                    <div class="w-10 h-10 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
                        <i data-lucide="settings" class="w-5 h-5 text-gray-500"></i>
                    </div>
                    <div class="text-sm font-medium text-center">${detail}</div>
                </div>
            </button>
        `;
    });
    
    packageDetailsContainer.innerHTML = `<div class="grid grid-cols-2 md:grid-cols-4 gap-3">${buttonsHTML}</div>`;

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
        
        button.className = `angle-btn p-3 rounded-lg border-2 transition-all duration-200 ${
            isSelected ? "border-purple-500 bg-purple-50 text-purple-700" : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
        }`;
        
        button.innerHTML = `
            <div class="flex flex-col items-center space-y-2">
                <div class="w-10 h-10 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
                    <i data-lucide="eye" class="w-5 h-5 text-gray-500"></i>
                </div>
                <div class="text-sm font-medium text-center">${angleData.name}</div>
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
        
        prompt += ", clean white background, professional lighting, high quality, minimalist design, product photography style, 4K resolution, commercial grade mockup";
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
    
    if (selectedPackageDetails.length > 0) {
        const detailNames = selectedPackageDetails
            .filter(detail => packageTypes[selectedPackageType].details[detail])
            .map(detail => packageTypes[selectedPackageType].details[detail]);
        
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