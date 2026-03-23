/**
 * 收藏夹解析 API
 * 解析浏览器导出的 bookmarks.html 文件
 */

function parseBookmarksHtml(html) {
  const results = [];
  const linkRegex = /<A\s+HREF="([^"]+)"[^>]*>([^<]*)<\/A>/gi;
  let match;
  
  while ((match = linkRegex.exec(html)) !== null) {
    const url = match[1].trim();
    const title = match[2].trim();
    
    if (url && url.startsWith('http')) {
      results.push({
        url,
        title: title || url,
        domain: extractDomain(url)
      });
    }
  }
  
  return results;
}

function extractDomain(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return 'unknown';
  }
}

function categorizeLinks(links) {
  const categories = {
    '设计/艺术': ['dribbble', 'behance', 'pinterest', 'unsplash', 'artstation', 'deviantart', 'design', 'creative'],
    '电商': ['amazon', 'taobao', 'jd.com', 'tmall', 'ebay', 'etsy', 'shopify', 'store'],
    '社交媒体': ['twitter', 'instagram', 'facebook', 'youtube', 'tiktok', 'weibo', 'xiaohongshu', 'linkedin'],
    '新闻/资讯': ['news', 'blog', 'medium', 'zhihu', '36kr', 'techcrunch', 'theverge'],
    '工具/开发': ['github', 'stackoverflow', 'vercel', 'netlify', 'figma', 'notion', 'docs', 'developer'],
    '其他': []
  };

  const categorized = {};

  links.forEach(link => {
    let found = false;
    const domain = link.domain.toLowerCase();
    
    for (const [category, keywords] of Object.entries(categories)) {
      if (category === '其他') continue;
      
      for (const keyword of keywords) {
        if (domain.includes(keyword)) {
          if (!categorized[category]) categorized[category] = [];
          categorized[category].push(link);
          found = true;
          break;
        }
      }
      if (found) break;
    }
    
    if (!found) {
      if (!categorized['其他']) categorized['其他'] = [];
      categorized['其他'].push(link);
    }
  });

  return categorized;
}

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { html_content } = req.body;
      
      if (!html_content) {
        return res.status(400).json({ 
          error: 'Missing html_content',
          example: { html_content: "<!DOCTYPE NETSCAPE-Bookmark-file-1>..." }
        });
      }

      const links = parseBookmarksHtml(html_content);
      
      if (links.length === 0) {
        return res.status(400).json({
          error: 'No valid bookmarks found in the HTML content'
        });
      }

      const categorized = categorizeLinks(links);
      const categoriesList = Object.entries(categorized).map(([name, items]) => ({
        name,
        count: items.length,
        links: items.slice(0, 10)
      }));

      res.json({
        success: true,
        summary: {
          total: links.length,
          categories: categoriesList.length
        },
        categories: categoriesList,
        all_links: links
      });

    } catch (error) {
      console.error('Parse error:', error);
      res.status(500).json({ error: 'Parse failed', message: error.message });
    }
    return;
  }

  res.json({
    message: 'Bookmark Parser API',
    usage: 'POST with bookmarks HTML content',
    example: {
      platform: 'Chrome',
      export: 'Bookmarks → Bookmark Manager → Export Bookmarks'
    }
  });
};