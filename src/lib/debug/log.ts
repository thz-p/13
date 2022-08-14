export function logWarn(msg: string): string {
    if (process.env.NODE_ENV === "production") {
    } else {
        console.warn(msg);
    }
    return msg;
}

export function log(msg: string): string {
    if (process.env.NODE_ENV === "production") {
    } else {
        console.log(msg);
    }
    return msg;
}

export function logDoc(html: string): string {
    const p = document.createElement("p");
    p.innerHTML = html;
    document.body.prepend(p);
    return html;
}

let textTerminal: HTMLLabelElement | null = null;
let textTerminalBuffer = "";

export function debugOverlay(text: string) {
    textTerminalBuffer += text;
}

export function flushOverlayText() {
    if (textTerminal === null) {
        textTerminal = document.createElement("label");
        const sx = textTerminal.style;
        sx.position = "fixed";
        sx.font = "24px monospace bold";
        sx.top = "0px";
        sx.left = "0px";
        sx.width = "100%";
        sx.height = "100%";
        sx.color = "white";
        sx.backgroundColor = "transparent";
        sx.background = "transparent";
        sx.touchAction = "none";
        sx.pointerEvents = "none";
        document.body.appendChild(textTerminal);
    }
    textTerminal.innerText = textTerminalBuffer;
    textTerminalBuffer = "";
}