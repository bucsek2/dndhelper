import * as React from 'react';
import { Panel } from 'primereact/panel';

export interface UnderdarkEventProps {
    title: string;
    description: string;
    nextEvent?: UnderdarkEvent;
}

export class UnderdarkEvent extends React.Component<UnderdarkEventProps, undefined> {
    render() {
        return (
            <div>
                <Panel header={this.props.title}>
                    {this.props.description}
                </Panel>
                {this.props.nextEvent}
            </div>
        );
    }
}