import { useEffect, useState } from 'react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    console.log('InstallPWA component mounted');
    setShowInstall(true); // Show immediately for testing
    
    const handler = (e: Event) => {
      console.log('beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        setShowInstall(false);
      }
      setDeferredPrompt(null);
    }
  };

  console.log('showInstall:', showInstall);

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl z-[9999]" style={{ zIndex: 99999 }}>
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            K
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Install KabadiShop</h3>
            {/* <p className="text-sm text-gray-600">Install app for better experience</p> */}
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowInstall(false)} 
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition font-medium"
          >
            Not now
          </button>
          <button 
            onClick={handleInstall} 
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium shadow-md"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
