'use client';

import { useState } from 'react';

const defaultCards = [
  {
    id: 1,
    title: 'Advanced Analytics',
    summary: 'Comprehensive data analysis and visualization tools',
    description: 'Our advanced analytics platform provides real-time insights into your data with powerful visualization capabilities. Track key performance metrics, identify trends, and make data-driven decisions. Features include customizable dashboards, automated reporting, predictive analytics, and machine learning integration. Export reports in multiple formats and share insights across your team.',
    icon: '📊',
    linkTitle: 'View Analytics Dashboard',
    link: '/analytics'
  },
  {
    id: 2,
    title: 'Seamless Integration',
    summary: 'Connect with all your favorite tools and platforms',
    description: 'Integrate effortlessly with over 100+ third-party applications and services. Our API-first approach ensures smooth data flow between platforms with minimal configuration. Support for webhooks, REST APIs, GraphQL, and native integrations with popular business tools including Slack, Salesforce, Google Workspace, and Microsoft 365. Real-time synchronization keeps your data consistent across all platforms.',
    icon: '🔗',
    linkTitle: 'Browse Integrations',
    link: '/integrations'
  },
  {
    id: 3,
    title: 'Enterprise Security',
    summary: 'Bank-level encryption and comprehensive protection',
    description: 'Your data security is our top priority. We employ military-grade AES-256 encryption, multi-factor authentication, and regular third-party security audits. Fully compliant with GDPR, HIPAA, SOC 2 Type II, and ISO 27001 standards. Features include role-based access control, audit logs, data residency options, and 24/7 security monitoring with automated threat detection and incident response.',
    icon: '🔒',
    linkTitle: 'Security Documentation',
    link: '/security'
  },
  {
    id: 4,
    title: '24/7 Expert Support',
    summary: 'Get help whenever you need it from our dedicated team',
    description: 'Access our dedicated support team around the clock via live chat, email, or phone. Our expert team averages a 2-minute response time with 95% first-contact resolution rate. Every plan includes onboarding assistance, training resources, and ongoing technical support. Premium plans include dedicated account managers and priority support channels. Comprehensive documentation, video tutorials, and community forums available.',
    icon: '💬',
    linkTitle: 'Contact Support',
    link: '/support'
  },
  {
    id: 5,
    title: 'Scalable Infrastructure',
    summary: 'Grow without limits on enterprise-grade infrastructure',
    description: 'Built on cloud infrastructure that scales automatically with your needs. Handle millions of transactions without performance degradation. 99.99% uptime SLA backed by redundant systems and automatic failover. Global CDN ensures fast loading times worldwide. Auto-scaling capabilities handle traffic spikes seamlessly. No maintenance windows or downtime for upgrades.',
    icon: '⚡'
  },
  {
    id: 6,
    title: 'Advanced Customization',
    summary: 'Tailor every aspect to match your unique workflow',
    description: 'Fully customizable platform adapts to your specific business needs. Create custom fields, workflows, and automation rules without coding. White-label options available for enterprise clients. Extensive API allows deep integration with internal systems. Custom reporting and dashboard builders let you track exactly what matters to your business. Plugin architecture supports third-party extensions.',
    icon: '⚙️',
    linkTitle: 'Explore Customization',
    link: '/customize'
  }
];

export default function ExpandingCards({ cards = defaultCards }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCard = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <style jsx>{`
        .ecl-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .ecl-cards-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ecl-card {
          background: #ffffff;
          border: 2px solid #cbd5e1;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .ecl-card:hover {
          border-color: #93c5fd;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
        }

        .ecl-card-expanded {
          border-color: #60a5fa;
          box-shadow: 0 6px 24px rgba(59, 130, 246, 0.2);
        }

        .ecl-card-header {
          display: flex;
          align-items: center;
          padding: 24px 28px;
          cursor: pointer;
          gap: 24px;
          transition: background-color 0.2s ease;
          user-select: none;
          background: #ffffff;
        }

        .ecl-card-header:hover {
          background-color: #f0f9ff;
        }

        .ecl-card-expanded .ecl-card-header {
          background-color: #eff6ff;
          border-bottom: 2px solid #dbeafe;
        }

        .ecl-card-icon {
          font-size: 40px;
          line-height: 1;
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border-radius: 12px;
          border: 2px solid #93c5fd;
        }

        .ecl-card-header-content {
          flex: 1;
          min-width: 0;
        }

        .ecl-card-title {
          margin: 0 0 8px 0;
          font-size: 1.35rem;
          font-weight: 600;
          color: #0f172a;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .ecl-card-summary {
          margin: 0;
          font-size: 1rem;
          color: #475569;
          line-height: 1.5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .ecl-chevron {
          flex-shrink: 0;
          font-size: 16px;
          color: #64748b;
          transition: transform 0.3s ease, color 0.2s ease;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
          border-radius: 8px;
          border: 2px solid #cbd5e1;
        }

        .ecl-card-header:hover .ecl-chevron {
          background: #e0f2fe;
          border-color: #93c5fd;
          color: #2563eb;
        }

        .ecl-chevron-expanded {
          transform: rotate(180deg);
          background: #dbeafe;
          border-color: #60a5fa;
          color: #1d4ed8;
        }

        .ecl-card-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          background-color: #f8fafc;
        }

        .ecl-card-body-expanded {
          max-height: 1000px;
          padding: 28px;
        }

        .ecl-card-description {
          font-size: 1rem;
          line-height: 1.75;
          color: #334155;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: #ffffff;
          padding: 20px 24px;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          margin-bottom: 20px;
        }

        .ecl-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #3b82f6;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          transition: all 0.2s ease;
          border: 2px solid #3b82f6;
        }

        .ecl-card-link:hover {
          background: #2563eb;
          border-color: #2563eb;
          transform: translateX(4px);
        }

        .ecl-card-link-arrow {
          font-size: 14px;
          transition: transform 0.2s ease;
        }

        .ecl-card-link:hover .ecl-card-link-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .ecl-container {
            padding: 24px 16px;
          }

          .ecl-card-header {
            padding: 20px 22px;
            gap: 18px;
          }

          .ecl-card-icon {
            font-size: 34px;
            width: 48px;
            height: 48px;
          }

          .ecl-card-title {
            font-size: 1.15rem;
          }

          .ecl-card-summary {
            font-size: 0.92rem;
          }

          .ecl-card-body-expanded {
            padding: 22px;
          }

          .ecl-card-description {
            font-size: 0.95rem;
            padding: 18px 20px;
          }

          .ecl-chevron {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }

          .ecl-card-link {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="ecl-container">
        <div className="ecl-cards-wrapper">
          {cards.map((card) => {
            const isExpanded = expandedId === card.id;
            
            return (
              <div 
                key={card.id} 
                className={`ecl-card ${isExpanded ? 'ecl-card-expanded' : ''}`}
              >
                <div 
                  className="ecl-card-header"
                  onClick={() => toggleCard(card.id)}
                >
                  {card.icon && (
                    <div className="ecl-card-icon">
                      {card.icon}
                    </div>
                  )}
                  <div className="ecl-card-header-content">
                    <h3 className="ecl-card-title">{card.title}</h3>
                    <p className="ecl-card-summary">{card.summary}</p>
                  </div>
                  <div className={`ecl-chevron ${isExpanded ? 'ecl-chevron-expanded' : ''}`}>
                    ▼
                  </div>
                </div>
                
                <div className={`ecl-card-body ${isExpanded ? 'ecl-card-body-expanded' : ''}`}>
                  <div className="ecl-card-description">
                    {card.description}
                  </div>
                  {card.link && card.linkTitle && (
                    <a href={card.link} className="ecl-card-link">
                      {card.linkTitle}
                      <span className="ecl-card-link-arrow">→</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}