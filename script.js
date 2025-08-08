class PromptGenerator {
    constructor() {
        // 既存のconstructor内容...
        
        // プロンプトテンプレート
        this.promptTemplates = {
            base: "A professional product photography of a {shape} {material} package",
            lighting: {
                'bright natural light': 'with bright natural lighting',
                'studio lighting': 'with professional studio lighting setup',
                'soft lighting': 'with soft, diffused lighting',
                'dramatic lighting': 'with dramatic lighting and deep shadows'
            },
            angle: {
                'front view': 'photographed from front view',
                'three-quarter view': 'photographed from three-quarter angle with slight overhead perspective',
                'side view': 'photographed from side profile view',
                'multiple angles': 'showing multiple angles in a composition'
            },
            background: "on a clean white background with subtle shadows",
            quality: "high resolution, commercial photography quality, minimalist aesthetic"
        };

        // 形状別の詳細描写
        this.shapeDescriptions = {
            'box': {
                'rectangular': 'rectangular cardboard box',
                'cylindrical': 'cylindrical tube-style box'
            },
            'wine bottle': {
                'bordeaux': 'tall, elegant Bordeaux-style wine bottle with high shoulders',
                'burgundy': 'Burgundy-style wine bottle with sloped shoulders',
                'other': 'wine bottle'
            },
            'beer bottle': 'beer bottle with classic proportions',
            'sake bottle': 'traditional sake bottle',
            'cylindrical jam jar': 'cylindrical glass jam jar',
            'square jam jar': 'square glass jam jar',
            'sauce bottle': 'condiment bottle',
            'pouch': 'flexible pouch packaging',
            'plastic bag': 'transparent plastic bag',
            'can': 'aluminum can',
            'tube': 'squeeze tube',
            'stick pack': 'stick pack sachet',
            'retort pouch': 'retort pouch'
        };

        // 蓋の状態描写
        this.lidDescriptions = {
            'opened': {
                'with a lid and base': 'with opened lid revealing the base',
                'tuck-in flap lid': 'with opened tuck-in flaps',
                'default': 'with opened lid'
            },
            'closed': {
                'with a lid and base': 'with closed lid',
                'tuck-in flap lid': 'with closed tuck-in flaps',
                'default': 'with closed lid'
            }
        };

        this.initializeEventListeners();
    }

    // テンプレートベースでプロンプト生成
    generateTemplateBasedPrompt() {
        const selections = this.selections;
        const promptParts = [];

        // 基本形状の構築
        let shapeDescription = this.buildShapeDescription(selections);
        promptParts.push(shapeDescription);

        // 蓋の状態
        if (selections.lidState && selections.shape === 'box') {
            const lidDesc = this.buildLidDescription(selections);
            if (lidDesc) promptParts.push(lidDesc);
        }

        // 瓶の色
        if (selections.bottleColor) {
            const colorMap = {
                'dark green bottle': 'dark green glass',
                'clear bottle': 'clear glass',
                'light pink bottle': 'light pink tinted glass'
            };
            promptParts.push(colorMap[selections.bottleColor] || selections.bottleColor);
        }

        // アングル
        if (selections.angle) {
            promptParts.push(this.promptTemplates.angle[selections.angle] || selections.angle);
        }

        // 照明
        let lightingDesc = '';
        if (selections.lighting) {
            lightingDesc = this.promptTemplates.lighting[selections.lighting] || '';
        }

        // 追加キーワード
        const additionalKeywords = [];
        if (selections.additionalKeywords) {
            additionalKeywords.push(selections.additionalKeywords);
        }
        if (selections.freeformKeywords) {
            additionalKeywords.push(selections.freeformKeywords);
        }

        // 最終プロンプトの構築
        let finalPrompt = promptParts.join(', ');
        
        if (lightingDesc) {
            finalPrompt += ', ' + lightingDesc;
        }
        
        finalPrompt += ', ' + this.promptTemplates.background;
        
        if (additionalKeywords.length > 0) {
            finalPrompt += ', ' + additionalKeywords.join(', ');
        }
        
        finalPrompt += ', ' + this.promptTemplates.quality;

        // ネガティブプロンプト
        const negativePrompt = 'text, logos, branding, labels, people, hands, cluttered background, blurry, low quality';

        return `${finalPrompt}\n\nNegative Prompt: ${negativePrompt}`;
    }

    // 形状の詳細描写を構築
    buildShapeDescription(selections) {
        if (selections.subSubShape && selections.subSubShape !== 'other') {
            // ワインボトルの詳細形状
            return this.shapeDescriptions['wine bottle'][selections.subSubShape] || selections.subSubShape;
        } else if (selections.subShape) {
            // サブ形状がある場合
            if (selections.shape === 'box') {
                return this.shapeDescriptions['box'][selections.subShape] || selections.subShape;
            } else {
                return this.shapeDescriptions[selections.subShape] || selections.subShape;
            }
        } else if (selections.shape) {
            // 基本形状のみ
            return selections.shape;
        }
        return 'product package';
    }

    // 蓋の描写を構築
    buildLidDescription(selections) {
        if (!selections.lidState) return '';
        
        const stateDescs = this.lidDescriptions[selections.lidState];
        if (selections.lidType && stateDescs[selections.lidType]) {
            return stateDescs[selections.lidType];
        }
        return stateDescs['default'] || '';
    }

    // メインの生成メソッドを更新
    async generatePromptWithAI() {
        const button = document.getElementById('generateButton');
        const outputElement = document.getElementById('promptOutput');

        if (!button || !outputElement) return;

        // ボタンの無効化とローディング表示
        button.textContent = '生成中...';
        button.classList.add('loading');

        try {
            // テンプレートベースで即座に生成
            const generatedPrompt = this.generateTemplateBasedPrompt();
            
            outputElement.textContent = generatedPrompt;
            outputElement.classList.add('fade-in');
            this.updateStats(generatedPrompt);
            setTimeout(() => outputElement.classList.remove('fade-in'), 500);

        } catch (error) {
            console.error("プロンプト生成に失敗しました:", error);
            outputElement.textContent = 'プロンプトの生成中にエラーが発生しました。もう一度お試しください。';
        } finally {
            // ボタンの状態を元に戻す
            button.textContent = '🎯 プロンプトを生成';
            button.classList.remove('loading');
        }
    }

    // 他のメソッドは既存のものをそのまま使用...
}