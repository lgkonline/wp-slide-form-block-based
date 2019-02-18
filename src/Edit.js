import React from "react";
import PropTypes from "prop-types";

const { __ } = wp.i18n;
const {
    RichText,
} = wp.editor;

import { Layer, LayerProps } from "./Layer";

export const EditProps = {
};

export const EditState = {
    layers: PropTypes.arrayOf(LayerProps)
}

export class Edit extends React.Component {
    constructor() {
        super();

        this.state = {
            layers: []
        };
    }

    componentWillMount() {
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onAddLayer = this.onAddLayer.bind(this);
    }

    componentDidMount() {
        this.setState({ layers: this.props.attributes.layers });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.attributes !== this.props.attributes) {
            this.componentDidMount();
        }
    }

    onChangeTitle(value) {
        this.props.setAttributes({
            title: value,
            layers: [
                {
                    title: "Layer 1",
                    options: [
                        {
                            icon: "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                            label: "Webdesign"
                        }
                    ]
                }
            ]
        });
    }

    onAddLayer() {
        let layers = this.state.layers;
        layers.push({
            title: "New layer",
            options: [
                {
                    icon: "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
                    label: "Option 1"
                }
            ]
        });

        this.setState({ layers });
        this.props.setAttributes({ layers });
    }

    render() {
        return (
            <div>
                <RichText
                    format="string"
                    formattingControls={[]}
                    placeholder={__("Form title")}
                    onChange={this.onChangeTitle}
                    value={this.props.attributes.title}
                />

                <button type="button" onClick={this.onAddLayer}>Add layer</button>

                {this.state.layers && this.state.layers.map((layer, index) =>
                    <Layer
                        key={index}
                        {...layer}
                        editMode={true}
                        onSetState={this.onSetState}
                    />
                )}
            </div>
        );
    }
}