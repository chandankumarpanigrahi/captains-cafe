'use client';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { FiCopy, FiCheck } from 'react-icons/fi';
import styles from './style.module.css'

const ShareCard = ({ title = "Check this out!", className = "" }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [currentPath, setCurrentPath] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [fullUrl, setFullUrl] = useState('');
    const [shareLinks, setShareLinks] = useState({});

    useEffect(() => {
        // Get the full path including query parameters
        const fullPath = searchParams.toString()
            ? `${pathname}?${searchParams.toString()}`
            : pathname;
        setCurrentPath(fullPath);

        // Set full URL and share links only on client side
        const currentFullUrl = `${window.location.origin}${fullPath}`;
        setFullUrl(currentFullUrl);

        const encodedUrl = encodeURIComponent(currentFullUrl);
        const encodedTitle = encodeURIComponent(title);

        setShareLinks({
            whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
            telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
            twitterX: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            email: `mailto:?subject=${encodedTitle}&body=Check this out: ${currentFullUrl}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        });
    }, [pathname, searchParams, title]);

    const handleShare = (platform) => {
        if (!shareLinks[platform]) return;

        const width = 600;
        const height = 400;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        window.open(
            shareLinks[platform],
            'share-dialog',
            `width=${width},height=${height},left=${left},top=${top}`
        );
    };

    const copyToClipboard = async () => {
        if (!fullUrl) return;

        try {
            await navigator.clipboard.writeText(fullUrl);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    // Early return if not on client side yet
    if (!fullUrl) {
        return (
            <div>
                <div className="flex flex-row flex-wrap w-full justify-center">
                    {/* Loading state for buttons */}
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-5">
                            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse mb-2"></div>
                            <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
                        </div>
                    ))}
                </div>
                {/* Loading state for URL box */}
                <div className={`${styles.copy_box} flex w-full p-3 bg-white rounded-lg border font-mono text-amber-800 text-sm`}>
                    <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-row flex-wrap w-full justify-center">
                {/* WhatsApp */}
                <button
                    onClick={() => handleShare('whatsapp')}
                    className="flex flex-col items-center justify-center px-5 py-3 rounded-lg transition-colors duration-200 group"
                >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">WhatsApp</span>
                </button>

                {/* Telegram */}
                <button
                    onClick={() => handleShare('telegram')}
                    className="flex flex-col items-center justify-center p-5 rounded-lg transition-colors duration-200 group"
                >
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.22-.198-.048-.312-.337-.112l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.57-4.458c.538-.196 1.006.128.832.941z" />
                        </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">Telegram</span>
                </button>

                {/* Twitter */}
                <button
                    onClick={() => handleShare('twitterX')}
                    className="flex flex-col items-center justify-center p-5 rounded-lg transition-colors duration-200 group"
                >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="bi bi-twitter-x" viewBox="0 0 16 16" id="Twitter-X--Streamline-Bootstrap" height="16" width="16">
                            <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"></path>
                        </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">X</span>
                </button>

                {/* Email */}
                <button
                    onClick={() => handleShare('email')}
                    className="flex flex-col items-center justify-center p-5 rounded-lg transition-colors duration-200 group"
                >
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">E-mail</span>
                </button>

                {/* LinkedIn */}
                <button
                    onClick={() => handleShare('linkedin')}
                    className="flex flex-col items-center justify-center p-5 rounded-lg transition-colors duration-200 group"
                >
                    <div className="w-10 h-10 bg-[#136bc5] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">LinkedIn</span>
                </button>

                {/* Copy Link */}
                <button
                    onClick={copyToClipboard}
                    className="flex flex-col items-center justify-center p-5 rounded-lg transition-colors duration-200 group"
                >
                    <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        {isCopied ? (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        )}
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                        {isCopied ? 'Copied!' : 'Copy Link'}
                    </span>
                </button>
            </div>

            {/* URL Display */}
            <div className={`${styles.copy_box} flex w-full p-3 bg-white dark:bg-amber-950 rounded-lg border font-mono text-amber-800 dark:text-white text-sm overflow-x-auto`}>
                <p className='whitespace-nowrap overflow-hidden w-full'>{fullUrl}</p>
                <button
                    onClick={copyToClipboard}
                    className="pl-3 text-amber-800 dark:text-white font-bold rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                    {isCopied ? (
                        <FiCheck className="h-5 w-5" />
                    ) : (
                        <FiCopy className="h-5 w-5" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default ShareCard;