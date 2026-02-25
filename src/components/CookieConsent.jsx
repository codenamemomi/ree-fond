import { motion } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieConsent = ({ onAccept, onDismiss }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[420px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-6 z-[200] overflow-hidden"
        >
            <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Cookie className="h-6 w-6" />
                </div>
                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-sm font-bold text-slate-900 leading-tight">Cookie Preferences</h3>
                        <button
                            onClick={onDismiss}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        We use necessary cookies to make our site work. We'd also like to set optional analytics cookies to help us improve it.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={onAccept}
                            className="flex-1 bg-slate-900 text-white py-2.5 px-4 rounded-lg text-xs font-bold hover:bg-slate-800 transition-all shadow-sm"
                        >
                            Accept Necessary
                        </button>
                        <button
                            onClick={onAccept}
                            className="flex-1 bg-slate-50 text-slate-600 py-2.5 px-4 rounded-lg text-xs font-bold hover:bg-slate-100 transition-all border border-slate-100"
                        >
                            Preferences
                        </button>
                    </div>
                </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-50/50 rounded-full blur-2xl -z-10" />
        </motion.div>
    );
};

export default CookieConsent;
