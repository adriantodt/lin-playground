type Nullable<T> = T | null | undefined
export namespace com.github.adriantodt.lin.js {
    class CompilationResult {
        private constructor();
        readonly isError: boolean;
        readonly isSyntaxError: boolean;
        readonly errorMessage: Nullable<string>;
        readonly errorStackTrace: Nullable<string>;
        readonly compileDuration: string;
        sourceToBytes(): Int8Array;
        sourceToHex(): string;
        sourceToBase64(): string;
        run(): com.github.adriantodt.lin.js.ExecutionResult;
    }
}
export namespace com.github.adriantodt.lin.js {
    class ExecutionResult {
        private constructor();
        readonly consoleLines: Array<string>;
        readonly runDuration: string;
        readonly isError: boolean;
        readonly result: string;
    }
}
export namespace com.github.adriantodt.lin.js {
    const Lin: {
        parse(source: string, name: string): com.github.adriantodt.lin.js.ParseResult;
    };
}
export namespace com.github.adriantodt.lin.js {
    class ParseResult {
        private constructor();
        readonly isError: boolean;
        readonly isSyntaxError: boolean;
        readonly errorMessage: Nullable<string>;
        readonly errorStackTrace: Nullable<string>;
        readonly parseDuration: string;
        compile(): com.github.adriantodt.lin.js.CompilationResult;
    }
}
export as namespace lin;