/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

import { QuestionComponent } from "./QuestionComponent";

/**
 * Register block
 */
export default registerBlockType("slide-form/question", {
    // Block Title
    title: __("Slide Form Question"),
    // Block Description
    description: __("Embedding question."),
    // Block Category
    category: "common",
    // Block Icon
    icon: "feedback",
    // Block Keywords
    keywords: [
        __("form"),
        __("slide"),
        __("request"),
    ],
    attributes: {
        question: {
            type: "string",
            default: __("New question")
        }
    },
    // Defining the edit interface
    edit: props => {
        console.log(props);
        return (
            <div>
                <input
                    type="text"
                    value={props.attributes.question}
                    onChange={({ target }) => props.setAttributes({ question: target.value })}
                    style={{ width: "100%" }}
                />

                <InnerBlocks />
            </div>
        );
    },
    // Defining the front-end interface
    save: props => {
        console.log(props);
        return (
            <QuestionComponent {...props} />
        );
    },
    deprecated: [
        {
            save: props => {

                console.log(props);
                return (
                    <div className="slideForm-Question">
                        <h2 style={{ textAlign: "center" }}>{props.attributes.question}</h2>

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
    ]
});
