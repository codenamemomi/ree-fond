import { motion } from 'framer-motion'

const iconAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.2 } }
}

// User/Profile Icon
export const UserIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </motion.svg>
)

// Document/File Icon
export const DocumentIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </motion.svg>
)

// Currency/Money Icon
export const CurrencyIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </motion.svg>
)

// Clock/Time Icon
export const ClockIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </motion.svg>
)

// Shield Icon
export const ShieldIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </motion.svg>
)

// Sunrise/Rocket Icon (for "Be Early")
export const RocketIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </motion.svg>
)

// Target/Bullseye Icon
export const TargetIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <circle cx="12" cy="12" r="3" strokeWidth={2} />
    </motion.svg>
)

// Building/Infrastructure Icon
export const BuildingIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </motion.svg>
)

// Lock/Security Icon
export const LockIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </motion.svg>
)

// Folder Icon
export const FolderIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </motion.svg>
)

// Refresh/Sync Icon
export const RefreshIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </motion.svg>
)

// ID/Badge Icon
export const BadgeIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    </motion.svg>
)

// Chart/Trending Icon
export const ChartIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </motion.svg>
)

// Lightning/Speed Icon
export const LightningIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </motion.svg>
)

// Office Building Icon
export const OfficeIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </motion.svg>
)

// Clipboard/Checklist Icon
export const ClipboardIcon = ({ className = "w-8 h-8" }) => (
    <motion.svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        variants={iconAnimation}
        initial="initial"
        animate="animate"
        whileHover="hover"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </motion.svg>
)
