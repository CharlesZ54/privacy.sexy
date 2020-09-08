import { IScript } from '@/domain/IScript';
import { ICategory } from '@/domain/ICategory';
import { IProjectInformation } from '@/domain/IProjectInformation';
import { OperatingSystem } from './OperatingSystem';
import { IScriptingDefinition } from './IScriptingDefinition';

export interface IApplication {
    readonly info: IProjectInformation;
    readonly scripting: IScriptingDefinition;

    readonly os: OperatingSystem;
    readonly totalScripts: number;
    readonly totalCategories: number;
    readonly actions: ReadonlyArray<ICategory>;

    getRecommendedScripts(): ReadonlyArray<IScript>;
    findCategory(categoryId: number): ICategory | undefined;
    findScript(scriptId: string): IScript | undefined;
    getAllScripts(): ReadonlyArray<IScript>;
    getAllCategories(): ReadonlyArray<ICategory>;
}

export { IScript } from '@/domain/IScript';
export { ICategory } from '@/domain/ICategory';
