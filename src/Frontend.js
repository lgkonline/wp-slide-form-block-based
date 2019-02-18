import React from "react";
import PropTypes from "prop-types";

const { __ } = wp.i18n;

import { Layer } from "./Layer";

export const FrontendProps = {
};

export class Frontend extends React.Component {

    render() {
        return (
            <div>
                <h1 className="display-4">{__(this.props.attributes.title)}</h1>

                {this.props.attributes.layers && this.props.attributes.layers.map((layer, index) =>
                    <Layer key={index} {...layer} editMode={false} />
                )}
            </div>
        );
    }
}