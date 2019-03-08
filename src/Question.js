/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InnerBlocks, RichText } = wp.editor;

/**
 * Register block
 */
export default registerBlockType("slide-form/question", {
    // Block Title
    title: __("Slide Form Question"),
    parent: ["slide-form/form"],
    // Block Description
    description: __("Embedding question."),
    // Block Category
    category: "common",
    // Block Icon
    icon: "lightbulb",
    // Block Keywords
    keywords: [
        __("form"),
        __("slide"),
        __("request"),
    ],
    attributes: {
        question: {
            type: "string"
        }
    },
    // Defining the edit interface
    edit: props => {
        return (
            <div className="galley-block p-3" style={{ borderColor: "#5856d6" }}>
                <h3 style={{ margin: "0" }}>
                    <RichText
                        value={props.attributes.question}
                        onChange={(question) => props.setAttributes({ question })}
                        placeholder="Title"
                    />
                </h3>

                <InnerBlocks />
            </div>
        );
    },
    // Defining the front-end interface
    save: props => {
        return (
            <div
                className="slideForm-Question"
                data-question={props.attributes.question}
            >
                <h2 style={{ textAlign: "center" }}>{props.attributes.question}</h2>
                <button type="button" className="slideForm-back">⬅️</button>

                <div
                    className="slideForm-Question-content"
                >
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
    deprecated: [
        {
            save: props => {
                return (
                    <div
                        className="slideForm-Question"
                        data-question={props.attributes.question}
                    >
                        <h2 style={{ textAlign: "center" }}>{props.attributes.question}</h2>
                        <button type="button" className="slideForm-back">⬅️</button>

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
