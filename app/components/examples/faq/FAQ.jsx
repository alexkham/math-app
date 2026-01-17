/*
Available themes:
- blueAccent: Light blue accents, 2-column grid, emoji icons, hover effects
- navyBlue: Professional navy, single column, numbered badges, left border on answers
- skyBlue: Sky blue tones, 2-column grid, larger icons, top navigation bar

Usage:
<FAQ 
  theme="blueAccent" 
  faqs={myQuestions}
  title="My Custom Title"
  subtitle="My custom subtitle"
/>
*/

import { useState } from 'react';
import { themes } from './faq-themes';

const defaultFAQs = [
  {
    icon: '🚀',
    question: "How do I get started with the platform?",
    answer: "Getting started is simple. Sign up for a free account, complete the guided onboarding process, and you'll be ready to create your first project in minutes."
  },
  {
    icon: '💼',
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including technology, healthcare, finance, education, and retail. Our flexible platform adapts to your specific needs."
  },
  {
    icon: '📊',
    question: "Can I export my data?",
    answer: "Yes, you can export all your data at any time in multiple formats including CSV, Excel, JSON, and PDF. You maintain full ownership of your data."
  },
  {
    icon: '🔒',
    question: "How do you handle data privacy?",
    answer: "We take privacy seriously. All data is encrypted in transit and at rest. We're GDPR and CCPA compliant and never sell your data."
  },
  {
    icon: '⚡',
    question: "What's your uptime guarantee?",
    answer: "We maintain a 99.9% uptime SLA with redundant infrastructure across multiple regions. Our platform is monitored 24/7 with automatic failover systems."
  },
  {
    icon: '🎓',
    question: "Do you provide training resources?",
    answer: "Absolutely. We offer comprehensive documentation, video tutorials, live webinars, and a knowledge base with personalized training for premium customers."
  }
];

export default function FAQ({ 
  theme = 'blueAccent', 
  faqs = defaultFAQs, 
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our platform and services"
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentTheme = themes[theme];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getCardStyle = (index) => {
    const baseStyle = {
      ...currentTheme.card,
      transition: 'all 0.3s ease'
    };

    if (openIndex === index) {
      return { ...baseStyle, ...currentTheme.cardActive };
    }
    if (hoveredIndex === index) {
      return { ...baseStyle, ...currentTheme.cardHovered };
    }
    return baseStyle;
  };

  return (
    <div style={currentTheme.container}>
      <div style={currentTheme.wrapper}>
        {currentTheme.topBar && (
          <div style={currentTheme.topBar}>
            <span style={currentTheme.topBarText}>Support Center</span>
          </div>
        )}

        <div style={currentTheme.header}>
          {currentTheme.badge && (
            <div style={currentTheme.badge}>FAQ</div>
          )}
          <h1 style={currentTheme.title}>{title}</h1>
          <p style={currentTheme.subtitle}>{subtitle}</p>
        </div>

        <div style={currentTheme.grid}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={getCardStyle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                style={currentTheme.cardButton}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                {currentTheme.showIcons && faq.icon && (
                  <div style={currentTheme.iconCircle}>
                    <span style={currentTheme.emoji}>{faq.icon}</span>
                  </div>
                )}
                
                {currentTheme.showNumbers && (
                  <div style={{
                    ...currentTheme.numberBadge,
                    backgroundColor: openIndex === index 
                      ? currentTheme.numberBadgeActive.backgroundColor 
                      : currentTheme.numberBadge.backgroundColor,
                    color: openIndex === index 
                      ? currentTheme.numberBadgeActive.color 
                      : currentTheme.numberBadge.color
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                )}

                <div style={currentTheme.questionWrapper}>
                  <h3 style={currentTheme.question}>{faq.question}</h3>
                </div>

                <div style={{
                  ...currentTheme.expandButton,
                  backgroundColor: openIndex === index 
                    ? currentTheme.expandButtonActive.backgroundColor 
                    : currentTheme.expandButton.backgroundColor,
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M5 7.5L10 12.5L15 7.5" 
                      stroke={openIndex === index 
                        ? currentTheme.expandButtonActive.iconColor 
                        : currentTheme.expandButton.iconColor}
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              
              <div style={{
                ...currentTheme.answerContainer,
                maxHeight: openIndex === index ? '300px' : '0',
                paddingTop: openIndex === index ? '20px' : '0',
                opacity: openIndex === index ? 1 : 0,
                marginLeft: currentTheme.answerMarginLeft
              }}>
                <p style={currentTheme.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={currentTheme.footer}>
          <div style={currentTheme.footerContent}>
            {currentTheme.footerIcon && (
              <div style={currentTheme.footerIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
            )}
            <div>
              <h3 style={currentTheme.footerTitle}>Still have questions?</h3>
              <p style={currentTheme.footerText}>
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
              </p>
              {currentTheme.footerButtons && (
                <div style={currentTheme.buttonGroup}>
                  <button style={currentTheme.primaryButton}>Get in touch</button>
                  <button style={currentTheme.secondaryButton}>View docs</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}