import React from "react";
import PropTypes from "prop-types";

export const OptionProps = {
    icon: PropTypes.string,
    label: PropTypes.string,
    editMode: PropTypes.bool
};

export class Option extends React.Component {
    render() {
        return (
            <button type="button" className="slide-form-Option">
                <img src={this.props.icon} alt={this.props.label} /> {this.props.label}
            </button>
        );
    }
}