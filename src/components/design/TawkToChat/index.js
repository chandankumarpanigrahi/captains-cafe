'use client';
import { useEffect } from 'react';

export default function TawkToChat() {
    useEffect(() => {
        if (document.getElementById('tawk-to-script')) return;

        const scriptContent = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/68e105534db84c19518e683a/1j6nfpkbp';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `;

        const script = document.createElement('script');
        script.id = 'tawk-to-script';
        script.innerHTML = scriptContent;
        document.body.appendChild(script);

        // Cleanup
        return () => {
            if (document.getElementById('tawk-to-script')) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return null;
}