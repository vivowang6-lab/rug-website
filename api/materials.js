/**
 * 材质列表 API
 * 返回所有材质信息供前端下拉选择
 */

const materials = require('./data/materials');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET.' });
  }

  const { id } = req.query;
  
  if (id) {
    const material = materials.find(m => m.id === id);
    if (material) {
      return res.json({ success: true, data: material });
    }
    return res.status(404).json({ error: 'Material not found', available: materials.map(m => m.id) });
  }

  res.json({
    success: true,
    count: materials.length,
    data: materials.map(m => ({
      id: m.id,
      name: m.name,
      colorScheme: m.colorScheme,
      price: m.price,
      suitable: m.suitable
    })),
    full_data: materials
  });
};