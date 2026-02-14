import { useEffect } from "react";

function MainTranslation() {
    useEffect(() => {
        const id = 'google-translate-script';
        if (!document.getElementById(id)) {
            const script = document.createElement("script");
            script.id = id;
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        }

        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate && !document.querySelector('.goog-te-combo')) {
                // Set cookie for Finnish translation before initialization
                // if (!document.cookie.includes('googtrans')) {
                //     document.cookie = 'googtrans=/en/fi; path=/';
                // }

                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: "en,es,fr,zh,fi,ur",
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
            }
        };

        // If google is already loaded, initialize manually
        if (window.google && window.google.translate && !document.querySelector('.goog-te-combo')) {
            window.googleTranslateElementInit();
        }
    }, []);

    return (
        <div id="google_translate_element" style={{ display: 'inline-block', verticalAlign: 'middle' }}></div>
    );
}

export default MainTranslation;