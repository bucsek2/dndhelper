import * as React from 'react';
import { Panel } from 'primereact/panel';
import './encounter.scss';

export interface EncounterProps {
    title: string;
    description: string;
    nextEvent?: EncounterProps;
}

export class Encounter extends React.Component<EncounterProps, undefined> {
    render() {
        let nextEvent: JSX.Element = undefined;
        if (this.props.nextEvent) {
            nextEvent = new Encounter(this.props.nextEvent).render();
        }

        return (
            <div className={'encounter-container'}>
                <Panel header={this.props.title} className={'encounter'}>
                    {this.props.description}
                </Panel>
                {nextEvent}
            </div>
        );
    }
}
