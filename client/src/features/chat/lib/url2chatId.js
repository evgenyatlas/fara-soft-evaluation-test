export function url2chatId(pathname) {
    return pathname.slice(1).match(/^.{7}$/)?.[0]
}