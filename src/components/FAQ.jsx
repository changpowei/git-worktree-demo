import { useState } from 'react';
import { FAQS } from '../data/faqs';

function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常見問題</span>
                    <h2 id="faq-title" className="section-header__title">
                        為您解答疑惑
                    </h2>
                    <p className="section-header__desc">
                        整理了客戶最常詢問的問題，幫助您快速了解我們的服務。
                    </p>
                </div>

                <div className="faq__list" role="list">
                    {FAQS.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                            >
                                <button
                                    className="faq__question"
                                    onClick={() => toggleFaq(faq.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >
                                    <span className="faq__question-text">{faq.question}</span>
                                    <span className="faq__icon" aria-hidden="true">
                                        {/* Simple CSS-based icon */}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${faq.id}`}
                                    className="faq__answer"
                                    role="region"
                                    aria-labelledby={`faq-question-${faq.id}`}
                                >
                                    <div className="faq__answer-inner">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
