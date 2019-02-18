import React from "react";
const { InnerBlocks } = wp.editor;

export class QuestionComponent extends React.Component {
    componentDidMount() {
        let first = document.querySelector(".slideForm-Question:first-child");

        if (first) {
            first.classList.add("active");
        }
    }

    render() {
        return (
            <div className="slideForm-Question">
                <h2 style={{ textAlign: "center" }}>{this.props.attributes.question}</h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginLeft: "-1rem",
                        marginRight: "-1rem"
                    }}
                >
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
}