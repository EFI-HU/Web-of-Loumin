import { ImageResponse } from 'next/og';

// 路由段配置
export const runtime = 'edge';

// 图片尺寸
export const size = {
  width: 32,
  height: 32,
};

// 图片格式
export const contentType = 'image/png';

// 图标生成
export default function Icon() {
  return new ImageResponse(
    (
      // 图标设计
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(to bottom right, #4F46E5, #7C3AED)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        娄
      </div>
    ),
    // 图片选项
    {
      ...size,
    }
  );
} 