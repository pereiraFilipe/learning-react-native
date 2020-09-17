
export const CONSOLE_COLORS = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",

    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",

    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m",
}

export default class Console {

    private static makeTitle(text: string): string {
        return `-- ${text} --  `
    }

    private static write(colors: Array<any>, message: any): void {
        if (typeof message == 'string'){
            console.log(...colors, message)
        } else {
            console.log(...colors, JSON.stringify(message))
        }

        console.log(CONSOLE_COLORS.Reset)
    }

    public static neutral(body: any): void {
        Console.write([CONSOLE_COLORS.BgWhite, CONSOLE_COLORS.FgBlack], body)
    }

    public static error(body: any, title: string = Console.makeTitle('Error')): void {
        Console.write([CONSOLE_COLORS.BgRed, CONSOLE_COLORS.FgWhite], title)

        if (typeof body == 'string'){
            console.log(body)
        } else {
            console.log(JSON.stringify(body))
        }
    }

    public static success(body: any, title: string = Console.makeTitle('Success')): void {
        Console.write([CONSOLE_COLORS.BgGreen, CONSOLE_COLORS.FgBlack], title)
        Console.write([CONSOLE_COLORS.FgGreen], body)
    }

    public static warning(body: any, title: string = Console.makeTitle('Warning')): void {
        Console.write([CONSOLE_COLORS.BgYellow, CONSOLE_COLORS.FgBlack], title)

        if (typeof body == 'string'){
            console.log(body)
        } else {
            console.log(JSON.stringify(body))
        }
    }

}