import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { menuData } from '../data/menuData';

const MegaMenu = ({ activeItem, onMouseEnter, onMouseLeave }) => {
    const data = menuData[activeItem];
    const [activeCategory, setActiveCategory] = useState(data?.categories[0]?.id);

    if (!data) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%-10px)] left-1/2 w-[800px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-50 transform -translate-x-1/2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex h-[450px]">
                {/* Sidebar */}
                <div className="w-[280px] bg-slate-50/50 border-r border-slate-100 p-6 space-y-2">
                    {data.categories.map((cat) => (
                        <button
                            key={cat.id}
                            onMouseEnter={() => setActiveCategory(cat.id)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${activeCategory === cat.id
                                ? 'bg-white text-emerald-600 shadow-sm border border-slate-100'
                                : 'text-slate-600 hover:bg-slate-100/50'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <cat.icon className={`h-4 w-4 ${activeCategory === cat.id ? 'text-emerald-500' : 'text-slate-400'}`} />
                                {cat.label}
                            </div>
                            {activeCategory === cat.id && <ChevronRight className="h-4 w-4 opacity-50" />}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 overflow-y-auto bg-white custom-scrollbar">
                    <div className="grid grid-cols-2 gap-6">
                        {(data.content[activeCategory] || []).map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <Link
                                    to={item.path || '#'}
                                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                >
                                    <div className={`p-3 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Special Case: Placeholder for empty categories */}
                    {(!data.content[activeCategory] || data.content[activeCategory].length === 0) && (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                {(() => {
                                    const Icon = data.categories.find(c => c.id === activeCategory)?.icon;
                                    return Icon ? <Icon className="h-8 w-8 text-slate-300" /> : null;
                                })()}
                            </div>
                            <p className="text-slate-400 text-sm font-medium">Coming soon</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default MegaMenu;
