import React, { useState } from 'react';
import './CEOUpdateDeck.css';

const CEOUpdateDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 0: Title
    {
      type: 'title',
      content: (
        <div className="title-slide">
          <h1>📊 Marketing Performance Review</h1>
          <h2>Weekly CEO Update | 本周营销表现回顾</h2>
          <div className="date">December 2025</div>
        </div>
      )
    },

    // Slide 1: Financial Overview
    {
      type: 'content',
      content: (
        <div className="content-slide">
          <h2>💰 Financial Overview | 财务概览</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">YTD Total Spend | 年度总花费</div>
              <div className="metric-value">$95,955</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Weekly Spend | 本周花费</div>
              <div className="metric-value">$6,258</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Weekly Revenue from Ads | 广告周收入</div>
              <div className="metric-value">$171</div>
              <div className="metric-subtitle">35% of total weekly revenue $492</div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: What We Did Well
    {
      type: 'content',
      content: (
        <div className="content-slide">
          <h2>🎯 What We Did Well | 我们做得好的地方</h2>
          <div className="wins-container">
            <div className="highlight-box success">
              <h3>🚀 TikTok Follower Milestone | TikTok粉丝里程碑</h3>
              <div className="big-number">25K Total Followers</div>
              <p>TikTok Follower Ads contributed <strong>97%</strong> of total followers</p>
              <p className="cn-text">TikTok粉丝广告贡献了 <strong>97%</strong> 的总粉丝增长</p>
            </div>
            <div className="highlight-box success">
              <h3>📱 App Install Impact | 应用安装影响</h3>
              <div className="big-number">50%</div>
              <p>Indirect contribution to direct GodGPT app installs</p>
              <p className="cn-text">间接贡献直接GodGPT应用安装</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Channel Performance
    {
      type: 'content',
      content: (
        <div className="content-slide">
          <h2>📈 Channel Performance | 渠道表现</h2>
          <div className="channel-grid">
            <div className="channel-card gold">
              <div className="rank">🥇</div>
              <h3>TikTok & Meta Organic Boost</h3>
              <p>Highest traffic efficiency to landing page</p>
              <p className="cn">引流和落地页流量最高效</p>
            </div>
            <div className="channel-card silver">
              <div className="rank">🥈</div>
              <h3>Google Search Install</h3>
              <p>Lowest cost per install</p>
              <p className="cn">安装成本最低</p>
            </div>
            <div className="channel-card bronze">
              <div className="rank">🥉</div>
              <h3>Combined Impact</h3>
              <p>50% of direct GodGPT app installs</p>
              <p className="cn">50%的直接应用安装</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Best Performing Content
    {
      type: 'content',
      content: (
        <div className="content-slide">
          <h2>🏆 Best Performing Content | 最佳表现内容</h2>
          <div className="content-winners">
            <div className="winner-card">
              <div className="winner-badge">Top CVR</div>
              <h3>TikTok Carousel Image</h3>
              <p className="winner-desc">
                <strong>Highest CVR</strong> for Lumen waitlist<br/>
                Lumen候补名单转化率最高
              </p>
              <a href="https://www.tiktok.com/@godgpt_/photo/7579467145818492178" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="link-btn">
                View Content →
              </a>
            </div>
            <div className="winner-card">
              <div className="winner-badge">Lowest Cost</div>
              <h3>YouTube Video</h3>
              <p className="winner-desc">
                <strong>Lowest cost per install</strong><br/>
                单次安装成本最低
              </p>
              <a href="https://www.youtube.com/watch?v=iYtWBGt0gzk" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="link-btn">
                View Content →
              </a>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Key Challenges & Actions
    {
      type: 'content',
      content: (
        <div className="content-slide">
          <h2>🔍 Key Challenges & Actions | 关键挑战与行动</h2>
          <div className="challenges-compact">
            <div className="challenge-compact-card">
              <div className="challenge-header">
                <span className="challenge-icon">💰</span>
                <h3>ROAS Not Scaling | ROAS未上涨</h3>
              </div>
              <p className="challenge-issue">Growth not converting to revenue | 增长未转化为收入</p>
              <p className="challenge-action">→ Shift to <strong>In-App Purchase</strong> campaigns + Retarget 30-day users</p>
            </div>
            
            <div className="challenge-compact-card">
              <div className="challenge-header">
                <span className="challenge-icon">🌏</span>
                <h3>SEA Market Quality | 东南亚市场质量</h3>
              </div>
              <p className="challenge-issue">ID/PH: High clicks, CVR only 20% of US/SG | 转化率仅为美国/新加坡的20%</p>
              <p className="challenge-action">→ Shift focus to <strong>US/SG/MY</strong> markets + Monitor EU/AU</p>
            </div>
            
            <div className="challenge-compact-card">
              <div className="challenge-header">
                <span className="challenge-icon">📊</span>
                <h3>Subscription Growth | 订阅增长停滞</h3>
              </div>
              <p className="challenge-issue">Users not converting to subscribers | 用户未转化为订阅</p>
              <p className="challenge-action">→ Scale <strong>Carousel ads</strong> (outperform video) + Strong CTA A/B tests</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Lumen Updates & Optimization
    {
      type: 'content',
      content: (
        <div className="content-slide">
          <h2>💎 Lumen Updates & Optimization | Lumen更新与优化</h2>
          
          <div className="lumen-compact">
            <div className="lumen-investment-compact">
              <div className="investment-badge">$3,800</div>
              <span>60% of weekly spend | 本周60%预算</span>
            </div>
            
            <div className="lumen-metrics-compact">
              <div className="metric-compact">
                <div className="metric-num">138K</div>
                <div className="metric-label">Landing views | 落地页</div>
              </div>
              <div className="metric-compact">
                <div className="metric-num">2.2K</div>
                <div className="metric-label">Followers | 粉丝</div>
              </div>
              <div className="metric-compact">
                <div className="metric-num">125</div>
                <div className="metric-label">Signups | 注册</div>
              </div>
            </div>
            
            <div className="lumen-actions">
              <div className="action-btn-group">
                <button className="action-btn primary">
                  <span className="btn-icon">🎯</span>
                  <div className="btn-content">
                    <strong>Shift to SG/MY/US</strong>
                    <span>High-converting markets | 高转化市场</span>
                  </div>
                </button>
                <button className="action-btn secondary">
                  <span className="btn-icon">📸</span>
                  <div className="btn-content">
                    <strong>Add Strong CTA Assets</strong>
                    <span>Improve signup CVR | 提升注册转化</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Key Takeaways & Strategic Actions
    {
      type: 'content',
      content: (
        <div className="content-slide">
          <h2>🎯 Key Takeaways & Next Steps | 核心要点与行动</h2>
          
          <div className="takeaways-compact-grid">
            <div className="compact-section wins-section">
              <h3 className="section-title">✅ Wins | 成功</h3>
              <div className="compact-items">
                <div className="compact-item">25K Followers | TikTok增长</div>
                <div className="compact-item">Best Channels | 渠道优化</div>
                <div className="compact-item">Carousel &gt; Video | 内容洞察</div>
                <div className="compact-item">Lumen Brand | 品牌建设</div>
              </div>
            </div>
            
            <div className="compact-section improve-section">
              <h3 className="section-title">🔄 Focus | 聚焦</h3>
              <div className="compact-items">
                <div className="compact-item">In-App Purchase | 应用内购</div>
                <div className="compact-item">US/SG/MY Markets | 高质量市场</div>
                <div className="compact-item">Strong CTA Ads | 强CTA广告</div>
                <div className="compact-item">Retarget Users | 重定向用户</div>
              </div>
            </div>
          </div>
          
          <div className="strategic-actions-visual">
            <h3 className="action-header">📋 Next Week Actions | 下周行动</h3>
            <div className="action-buttons-grid">
              <button className="strategic-btn">
                <span className="btn-emoji">🤖</span>
                <strong>Data Automation</strong>
                <span className="btn-sub">API Integration | API对接</span>
              </button>
              <button className="strategic-btn">
                <span className="btn-emoji">🔍</span>
                <strong>Competitor Monitor</strong>
                <span className="btn-sub">Icon Tracking | 竞品监控</span>
              </button>
              <button className="strategic-btn">
                <span className="btn-emoji">✨</span>
                <strong>AI Content</strong>
                <span className="btn-sub">Gemini + n8n | AI生成</span>
              </button>
            </div>
          </div>
          
          <div className="metrics-to-watch">
            <h4>📈 Monitor: ROAS · Form Submissions · Subscription Rate · Cost/Signup</h4>
          </div>
        </div>
      )
    },

    // Slide 15: Closing
    {
      type: 'closing',
      content: (
        <div className="closing-slide">
          <h2>🌌 From Growth to Profitability</h2>
          <h3 className="cn-subtitle">从增长转向盈利</h3>
          <div className="closing-message">
            <p className="big-text">
              By focusing on conversion, optimizing markets,<br/>
              and scaling what works
            </p>
            <p className="big-text cn">
              通过聚焦转化、优化市场、扩大成功素材
            </p>
            <div className="closing-cta">
              <p>Let's align and resonate forward</p>
              <p className="cn">让我们对齐并共振前行</p>
            </div>
          </div>
          <div className="questions">Questions? | 问题讨论</div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="deck-container">
      <div className="slide-wrapper">
        {slides[currentSlide].content}
      </div>

      <div className="controls">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className="nav-btn"
        >
          ← Previous
        </button>
        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className="nav-btn"
        >
          Next →
        </button>
      </div>

      <div className="dots-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="keyboard-hint">
        Use ← → arrow keys or click to navigate
      </div>
    </div>
  );
};

export default CEOUpdateDeck;
