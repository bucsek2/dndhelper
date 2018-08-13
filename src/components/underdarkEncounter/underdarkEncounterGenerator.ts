import { EncounterProps } from "../encounter/encounter";
import { Dice } from "../../dice";

export class UnderdarkEncounterGenerator {
    public getEncounter(): EncounterProps[] {
        let result = Dice.d20();

        if (result >= 0 && result <= 13) {
            // no encounter
            return undefined;
        } else if (result > 13 && result <= 15) {
            return [this.getTerrainEncounter()];
        } else if (result > 15 && result <= 17) {
            return [this.getCreatureEncounter()];
        } else if (result > 17 && result <= 20) {
            return [this.getTerrainEncounter(),
            this.getCreatureEncounter()];
        }

        throw new Error('Result is too big! Result: ' + result);
        return undefined;
    }

    private getTerrainEncounter(): EncounterProps {
        return {
            title: 'terrain',
            description: 'terrain desc'
        };
    }

    private getCreatureEncounter(): EncounterProps {
        return {
            title: 'creature',
            description: 'creature desc'
        };
    }
}
