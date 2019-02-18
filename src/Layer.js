import React from "react";
import PropTypes from "prop-types";

import { Option, OptionProps } from "./Option";

export const LayerProps = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(OptionProps),

    editMode: PropTypes.bool,
    onAddOption: PropTypes.func
};

export const LayerState = {
    options: LayerProps.options
};

export class Layer extends React.Component {
    constructor() {
        super();

        this.onAddOption = this.onAddOption.bind(this);

        this.state = {
            options: []
        };
    }

    componentDidMount() {
        this.setState({ options: this.props.options });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            this.componentDidMount();
        }
    }

    onAddOption() {
        let options = this.state.options;
        options.push({
            icon: "https://codingarts.eu/wp-content/uploads/2018/08/icon_5.png",
            label: "Option " + this.state.options.length
        });

        this.setState({ options });
    }

    render() {
        return (
            this.props &&
            <div className="slide-form-Layer">
                <h3>{this.props.title}</h3>

                {this.props.editMode &&
                    <div>
                        <button type="button" onClick={this.onAddOption}>Add option</button>
                    </div>
                }

                <div className="slide-form-Layer-options">
                    {this.state.options && this.state.options.map((option, index) =>
                        <Option key={index} {...option} />
                    )}
                </div>
            </div>
        );
    }
}