import * as React from 'react';
import './underdarkEncounter.scss';
import { UnderdarkEncounterGenerator } from './underdarkEncounterGenerator';
import * as uuid from "uuid/v1";
import { Encounter } from '../encounter/encounter';

export class UnderdarkEncounter extends React.Component {
    private encounterGenerator: UnderdarkEncounterGenerator;

    constructor(props: any) {
        super(props);

        this.encounterGenerator = new UnderdarkEncounterGenerator();
    }

    render() {
        let encounters = this.encounterGenerator.getEncounter();
        let jsxEncounter = undefined;
        if (encounters) {
            jsxEncounter = encounters.map((encounter) => {
                if (encounter) {
                    let key = uuid();
                    return <Encounter title={encounter.title} description={encounter.description}
                        nextEvent={encounter.nextEvent} key={key} />;
                }
                return undefined;
            });
        }

        return (
            <div className={'underdarkEncounter'}>
                {jsxEncounter}
            </div>
        );
    }
}