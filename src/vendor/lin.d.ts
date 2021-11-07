type Nullable<T> = T | null | undefined
export namespace com.github.adriantodt.lin.js {
    class Compilation {
        private constructor();
        readonly parseDuration: string;
        readonly compileDuration: string;
        sourceToBytes(): Int8Array;
        sourceToHex(): string;
        sourceToBase64(): string;
        createVM(): com.github.adriantodt.lin.js.VirtualMachine;
    }
}
export namespace com.github.adriantodt.lin.js {
    class ExecutionResult {
        private constructor();
        readonly runDuration: string;
        readonly isError: boolean;
        readonly result: string;
    }
}
export namespace com.github.adriantodt.lin.js {
    const Lin: {
        compile(source: string): com.github.adriantodt.lin.js.Compilation;
    };
}
export namespace com.github.adriantodt.lin.js {
    class VirtualMachine {
        private constructor();
        run(): com.github.adriantodt.lin.js.ExecutionResult;
    }
}
export as namespace lin;