import {
    CreditCard,
    ShieldCheck,
    TrendingUp,
    FileCheck,
    Lock,
    UserCheck,
    Zap,
    BarChart3,
    Layers,
    Key,
    Wallet,
    Globe
} from 'lucide-react';

export const menuData = {
    Products: {
        categories: [
            { id: 'payments', label: 'Payments', icon: Wallet },
            { id: 'fraud', label: 'Fraud & risk', icon: ShieldCheck },
            { id: 'insights', label: 'Personal finance insights', icon: TrendingUp },
            { id: 'credit', label: 'Credit underwriting', icon: CreditCard },
            { id: 'open-finance', label: 'Open finance', icon: Globe },
            { id: 'onboarding', label: 'Onboarding', icon: UserCheck },
        ],
        content: {
            payments: [
                { title: 'Overview', description: 'Explore payments solutions', icon: Wallet, color: 'text-emerald-500', bg: 'bg-emerald-50', path: '/' },
                { title: 'Auth', description: 'Verified account and routing numbers', icon: Key, color: 'text-blue-500', bg: 'bg-blue-50', path: '/' },
                { title: 'Identity', description: 'Bank account-holder information', icon: UserCheck, color: 'text-cyan-500', bg: 'bg-cyan-50', path: '/' },
                { title: 'Balance', description: 'Real-time balance checks', icon: BarChart3, color: 'text-emerald-500', bg: 'bg-emerald-50', path: '/' },
                { title: 'Signal', description: 'ACH payment risk platform', icon: ShieldCheck, color: 'text-blue-500', bg: 'bg-blue-50', path: '/' },
                { title: 'Transfer', description: 'ACH, RTP, and FedNow processing', icon: Zap, color: 'text-emerald-500', bg: 'bg-emerald-50', path: '/' },
                { title: 'Investments Move', description: 'Streamline asset transfers', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-50', path: '/' },
            ],
            fraud: [
                { title: 'Monitor', description: 'Real-time transaction monitoring', icon: ShieldCheck, color: 'text-rose-500', bg: 'bg-rose-50', path: '/' },
                { title: 'Identity Verification', description: 'Verify identities globally', icon: UserCheck, color: 'text-indigo-500', bg: 'bg-indigo-50', path: '/' },
            ]
        }
    },
    Solutions: {
        categories: [
            { id: 'use-cases', label: 'Use Cases', icon: Layers },
            { id: 'industries', label: 'Industries', icon: Globe },
        ],
        content: {
            'use-cases': [
                { title: 'Personal Finance', description: 'Build apps that help people save', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50', path: '/problems' },
                { title: 'Lending', description: 'Simplify the loan process', icon: CreditCard, color: 'text-blue-500', bg: 'bg-blue-50', path: '/problems' },
            ],
            'industries': [
                { title: 'Banking', description: 'Modernize banking infrastructure', icon: Globe, color: 'text-cyan-500', bg: 'bg-cyan-50', path: '/problems' },
                { title: 'Fintech', description: 'Power the future of finance', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-50', path: '/problems' },
            ]
        }
    },
    Developers: {
        categories: [
            { id: 'docs', label: 'Documentation', icon: FileCheck },
            { id: 'tools', label: 'Tools', icon: Key },
        ],
        content: {
            'docs': [
                { title: 'Quickstart', description: 'Get up and running in minutes', icon: Zap, color: 'text-orange-500', bg: 'bg-orange-50', path: '/docs' },
                { title: 'API Reference', description: 'Detail endpoint documentation', icon: FileCheck, color: 'text-blue-500', bg: 'bg-blue-50', path: '/docs' },
            ],
            'tools': [
                { title: 'Sandbox', description: 'Test and build without risk', icon: Lock, color: 'text-slate-500', bg: 'bg-slate-50', path: '/docs' },
            ]
        }
    },
    Resources: {
        categories: [
            { id: 'learn', label: 'Learn', icon: BarChart3 },
            { id: 'support', label: 'Support', icon: UserCheck },
        ],
        content: {
            'learn': [
                { title: 'Blog', description: 'Insights and news from the team', icon: BarChart3, color: 'text-indigo-500', bg: 'bg-indigo-50', path: '/about' },
                { title: 'Guides', description: 'In-depth articles on financial tech', icon: FileCheck, color: 'text-emerald-500', bg: 'bg-emerald-50', path: '/about' },
            ],
            'support': [
                { title: 'Help Center', description: 'Find answers to common questions', icon: UserCheck, color: 'text-blue-500', bg: 'bg-blue-50', path: '/contact' },
            ]
        }
    }
};
