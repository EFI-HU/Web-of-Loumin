import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 验证必填字段
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '所有字段都是必填的' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      );
    }

    // 这里可以集成邮件服务 (如 Nodemailer, SendGrid, 等)
    // 目前只是模拟处理
    console.log('收到联系表单提交:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // 模拟发送邮件延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 返回成功响应
    return NextResponse.json(
      { 
        message: '消息发送成功！我会尽快回复您。',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('联系表单处理错误:', error);
    return NextResponse.json(
      { error: '服务器内部错误，请稍后重试' },
      { status: 500 }
    );
  }
}

// 处理其他HTTP方法
export async function GET() {
  return NextResponse.json(
    { error: '不支持的请求方法' },
    { status: 405 }
  );
} 