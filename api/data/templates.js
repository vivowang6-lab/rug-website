// 文案模板库 - 按平台和风格分类
// 变量说明：[材质名] → material.name, [材质特征] → material.texture, [纹理] → material.texture
// [色系] → material.colorScheme, [工艺] → material.technique, [价格] → material.price
// [适用] → material.suitable

module.exports = {
  // ========== 小红书模板 ==========
  xiaohongshu: {
    luxury: [
      {
        title: "✨ 豪宅标配 | 这块[材质名]让客厅身价翻倍",
        content: "终于找到梦中情毯！[材质特征]的[材质名]，[色系]配色直接美哭😭\n\n💫 工艺：[工艺]\n💰 价格：[价格]\n\n铺在客厅瞬间提升N个档次，客人来了都问链接！适合风格：[适用]",
        hashtags: ["[材质名]", "地毯推荐", "家居美学", "客厅地毯", "设计师同款", "装修灵感"],
        tips: "拍摄时使用自然光，展现地毯质感"
      },
      {
        title: "🌟 轻奢地毯 | 入手后老公夸我有眼光！",
        content: "这条[材质名]真的绝了！[纹理]太高级了~\n\n[色系]的色调完美适配我家的[适用]风格，踩上去软乎乎的幸福感💕\n\n📍 工艺：[工艺]\n💵 参考价：[价格]",
        hashtags: ["家居好物", "地毯分享", "轻奢家居", "[材质名]", "软装搭配"],
        tips: "搭配同色系抱枕更和谐"
      }
    ],
    minimalist: [
      {
        title: "Less is more | [材质名]的极简美学",
        content: "拒绝花哨！一条好的地毯就够撑起整个客厅💯\n\n[材质名]的[纹理]，简约而不简单。[色系]配色永远的经典~",
        hashtags: ["极简主义", "现代简约", "地毯分享", "LessIsMore", "家居设计"],
        tips: "极简风关键在于留白，地毯面积不要超过客厅60%"
      },
      {
        title: "🕊️ 简约控必入 | 这条地毯太干净了",
        content: "给你们的极简风地毯推荐！[材质特征]的[材质名]\n\n[色系]｜[工艺]｜[价格]\n\n适合：[适用]",
        hashtags: ["简约风", "北欧风", "地毯推荐", "家居分享"],
        tips: "极简空间建议选纯色或简单几何图案"
      }
    ],
    wabisabi: [
      {
        title: "🍂 不完美之美 | 云雾灰调的[材质名]",
        content: "侘寂风才是最高级的美✨\n\n这条[材质名]完全长在我审美上！[纹理]，带着淡淡的禅意~\n\n🌿 色系：[色系]\n🧵 材质：[材质特征]\n⏳ 工艺：[工艺]",
        hashtags: ["侘寂风", "禅意生活", "地毯美学", "日式家居", "慢生活"],
        tips: "侘寂风核心是自然与不完美，灯光要柔和"
      },
      {
        title: "🍃 静谧时光 | 属于INFJ的地毯",
        content: "喜欢安静氛围的姐妹看过来~[材质名]的[纹理]，太适合冥想🧘‍♀️和放空了\n\n[色系]带来的平和感，是繁华都市里的小确幸🌙",
        hashtags: ["地毯分享", "INFJ", "居家美学", "静谧时光", "软装记录"],
        tips: "可搭配蒲团或坐垫打造阅读角"
      }
    ],
    modern: [
      {
        title: "🎨 艺术感拉满 | 这地毯像件艺术品",
        content: "快看我的新地毯！[材质名]的[纹理]太特别了~[色系]配色很有辨识度\n\n工艺：[工艺]\n适合：[适用]",
        hashtags: ["地毯推荐", "艺术感", "现代风格", "家居布置", "小众好物"],
        tips: "艺术感地毯可以搭配简约家具形成对比"
      },
      {
        title: "🏠 氛围感神器 | 有了它家变高级了",
        content: "姐妹们！地毯真的是氛围感神器💫\n\n[材质名]——[纹理]，铺上瞬间客厅高级感满满！\n\n✨ 色系：[色系]\n✨ 工艺：[工艺]\n✨ 价格：[价格]",
        hashtags: ["氛围感", "家居分享", "地毯怎么选", "提升幸福感的家居好物"],
        tips: "选择与墙面或家具呼应的颜色"
      }
    ]
  },

  // ========== Instagram 模板 ==========
  instagram: {
    luxury: [
      {
        title: "Luxury vibes ✨",
        content: "This [Material] is absolutely stunning! The [Texture] in [Color] adds instant elegance to any space.\n\n▫️ Technique: [Technique]\n▫️ Price: [Price]\n▫️ Perfect for: [Suitable]\n\nTag someone who needs this in their home! 🏠💕",
        hashtags: ["#luxuryrugs", "#interiordesign", "#homedecor", "#luxuryhome", "#ruginspiration", "#designlover"],
        tips: "Use natural lighting to capture the texture"
      },
      {
        title: "Statement Piece Alert 🔥",
        content: "This [Material] is not just a rug—it's art! The [Texture] creates a bold statement in [Color] tones.\n\n✨ Technique: [Technique]\n💎 Perfect for: [Suitable]",
        hashtags: ["#statementpiece", "#luxuryliving", "#homedesign", "#ruglove", "#interiorstyle"],
        tips: "Let the rug be the hero - keep other elements minimal"
      }
    ],
    minimalist: [
      {
        title: "Minimalist dream 💭",
        content: "Less is more. This [Material] in clean [Color] tones proves that simplicity speaks volumes.\n\n▫️ Material: [Material]\n▫️ Texture: [Texture]\n▫️ Price: [Price]",
        hashtags: ["#minimalistdesign", "#minimalstyle", "#simplesliving", "#homedecor", "#scandinaviandesign"],
        tips: "Perfect for creating a calm, clutter-free space"
      },
      {
        title: "Clean aesthetic ✨",
        content: "The beauty of simplicity. [Material] featuring [Texture] in timeless [Color].\n\nLess clutter, more calm. 🕊️",
        hashtags: ["#cleanaesthetic", "#minimalhome", "#interiordesign", "#simpledesign", "#hyggehome"],
        tips: "Pair with natural wood and neutral tones"
      }
    ],
    wabisabi: [
      {
        title: "Wabi-sabi aesthetics 🍂",
        content: "Finding beauty in imperfection. This [Material] embodies the essence of wabi-sabi with its [Texture].\n\nIn [Color] tones—raw, natural, authentic. 🧘‍♀️",
        hashtags: ["#wabisabi", "#japanesestyle", "#zenhome", "#mindfuhome", "#naturalinteriors", "#slowliving"],
        tips: "Embrace natural materials and soft lighting"
      },
      {
        title: "Quiet luxury 🕊️",
        content: "The art of understated elegance. [Material] in muted [Color] brings serenity to any room.\n\n✨ Texture: [Texture]\n🌿 Perfect for: [Suitable]",
        hashtags: ["#quietluxury", "#refinedliving", "#serenespace", "#japaneseinterior", "#meditationroom"],
        tips: "Create a meditation corner with floor cushions"
      }
    ],
    modern: [
      {
        title: "Contemporary art for your floor 🎨",
        content: "Who says rugs can't be art? This [Material] transforms any space with its [Texture].\n\n[Color] tones meet modern design. 🔥",
        hashtags: ["#moderndesign", "#contemporaryrugs", "#artfuliving", "#designerugs", "#urbanstyle"],
        tips: "Let your rug inspire the entire room's color palette"
      },
      {
        title: "Game changer rug! 🚀",
        content: "This [Material] completely transformed my living room! The [Texture] in [Color] is everything. ✨\n\n▫️ Technique: [Technique]\n▫️ Suitable: [Suitable]",
        hashtags: ["#rugtransformation", "#homedecor", "#livingroomgoals", "#interiorinspo", "#designinspiration"],
        tips: "Coordinate with throw pillows for a cohesive look"
      }
    ]
  }
};