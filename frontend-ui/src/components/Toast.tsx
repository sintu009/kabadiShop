import React from "react";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
    type: "success" | "error" | "warning";
    message: string;
    onClose: () => void;
}

export default function Toast({ type, message, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const config = {
        success: { icon: CheckCircle, bg: "bg-green-50", border: "border-green-500", text: "text-green-800", iconColor: "text-green-500" },
        error: { icon: XCircle, bg: "bg-red-50", border: "border-red-500", text: "text-red-800", iconColor: "text-red-500" },
        warning: { icon: AlertCircle, bg: "bg-yellow-50", border: "border-yellow-500", text: "text-yellow-800", iconColor: "text-yellow-500" },
    };

    const { icon: Icon, bg, border, text, iconColor } = config[type];

    return (
        <div className={`fixed top-4 right-4 z-[100] ${bg} ${border} border-l-4 rounded-lg shadow-lg p-4 flex items-center gap-3 min-w-[300px] animate-in slide-in-from-top duration-300`}>
            <Icon className={iconColor} size={24} />
            <p className={`flex-1 ${text} font-medium`}>{message}</p>
            <button onClick={onClose} className={`${text} hover:opacity-70`}>
                <X size={18} />
            </button>
        </div>
    );
}
