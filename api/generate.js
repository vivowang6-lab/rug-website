/**
 * AI 内容生成 API
 * 接收材质 ID、平台、场景，返回生成好的文案
 */

const materials = require('./data/materials');
const templates = require('./data/templates');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { material_id, platform, scene } = req.body;

    if (!material_id || !platform) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['material_id', 'platform'],
        example: { material_id: 'TP-001', platform: 'xiaohongshu', scene: 'modern' }
      });
    }

    const material = materials.find(m => m.id === material_id);
    if (!material) {
      return res.status(404).json({ 
        error: 'Material not found',
        available: materials.map(m => m.id)
      });
    }

    const validPlatforms = ['xiaohongshu', 'instagram'];
    if (!validPlatforms.includes(platform)) {
      return res.status(400).json({
        error: 'Invalid platform',
        valid: validPlatforms
      });
    }

    const validScenes = ['luxury', 'minimalist', 'wabisabi', 'modern'];
    const finalScene = validScenes.includes(scene) ? scene : 'modern';

    const platformTemplates = templates[platform][finalScene];
    const template = platformTemplates[Math.floor(Math.random() * platformTemplates.length)];

    const replacements = {
      '[材质名]': material.name,
      '[材质特征]': material.texture,
      '[纹理]': material.texture,
      '[色系]': material.colorScheme,
      '[工艺]': material.technique,
      '[价格]': material.price,
      '[适用]': material.suitable,
      '[Material]': material.name,
      '[Texture]': material.texture,
      '[Color]': material.colorScheme,
      '[Technique]': material.technique,
      '[Price]': material.price,
      '[Suitable]': material.suitable
    };

    let title = template.title;
    let content = template.content;
    let tips = template.tips;

    Object.keys(replacements).forEach(key => {
      const regex = new RegExp(key, 'g');
      title = title.replace(regex, replacements[key]);
      content = content.replace(regex, replacements[key]);
      tips = tips.replace(regex, replacements[key]);
    });

    let hashtags = template.hashtags.map(tag => {
      let result = tag;
      Object.keys(replacements).forEach(key => {
        result = result.replace(new RegExp(key, 'g'), replacements[key]);
      });
      return result;
    });

    res.json({
      success: true,
      data: {
        material_id: material.id,
        material_name: material.name,
        platform,
        scene: finalScene,
        result: { title, content, hashtags, tips },
        material_info: {
          colorScheme: material.colorScheme,
          material: material.material,
          technique: material.technique,
          suitable: material.suitable,
          price: material.price
        }
      }
    });

  } catch (error) {
    console.error('Generate API Error:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};