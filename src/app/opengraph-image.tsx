import { ImageResponse } from 'next/og';

// 路由段配置
export const runtime = 'edge';

// 图片尺寸
export const size = {
  width: 1200,
  height: 630,
};

// 图片格式
export const contentType = 'image/png';

// OG图片生成
export default function OGImage() {
  return new ImageResponse(
    (
      // OG图片设计
      <div
        style={{
          background: 'linear-gradient(to bottom right, #4F46E5, #7C3AED)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        {/* 标题 */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          娄敏的个人网站
        </div>
        
        {/* 副标题 */}
        <div
          style={{
            fontSize: 30,
            textAlign: 'center',
            opacity: 0.8,
          }}
        >
          创新开发者 | 技术创作者 | 全栈工程师
        </div>
        
        {/* 装饰元素 */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: 24,
            opacity: 0.6,
          }}
        >
          loumin.dev
        </div>
      </div>
    ),
    // 图片选项
    {
      ...size,
    }
  );
} 