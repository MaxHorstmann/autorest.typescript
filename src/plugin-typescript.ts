import { Host, startSession, Channel } from '@azure-tools/autorest-extension-base';
import { codeModelSchema, CodeModel } from '@azure-tools/codemodel';
import { TypescriptGenerator } from "./typescriptGenerator";

export async function processRequest(host: Host) {
    try {
        const session = await startSession<CodeModel>(host, undefined, codeModelSchema);
        const tsGenerator = new TypescriptGenerator(session.model, host);
        tsGenerator.process();
        host.WriteFile('filename.txt', "dummy content", undefined, "source-files-typescript");
    } catch (E) {
        throw E;
    }
}