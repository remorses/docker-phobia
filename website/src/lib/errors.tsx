export function notifyError(error, message?: string) {
    console.error(message, error)
}

export class KnownError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'KnownError'
    }
}
export class AppError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'AppError'
    }
}
