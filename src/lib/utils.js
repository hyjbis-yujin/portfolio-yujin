// Simple class name merger to replace clsx
export function cn(...inputs) {
    return inputs.flat().filter(Boolean).join(' ')
}
