import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowConsent(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-consent__content">
                <div className="cookie-consent__icon">🍪</div>
                <div className="cookie-consent__text">
                    <h3 className="cookie-consent__title">我們重視您的隱私</h3>
                    <p className="cookie-consent__description">
                        我們使用 Cookie 以提供最佳的瀏覽體驗、提供個人化的內容與廣告，並分析網站流量。點擊「全部接受」，即表示您同意我們使用 Cookie。
                    </p>
                </div>
            </div>
            <div className="cookie-consent__actions">
                <button onClick={handleReject} className="btn btn--outline cookie-consent__btn">
                    拒絕
                </button>
                <button onClick={handleAccept} className="btn btn--primary cookie-consent__btn">
                    全部接受
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
