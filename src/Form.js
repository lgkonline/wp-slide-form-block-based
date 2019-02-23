/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls, RichText } = wp.editor;

/**
 * Register block
 */
export default registerBlockType("slide-form/form", {
    // Block Title
    title: __("Slide Form"),
    // Block Description
    description: __("Embedding form."),
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
        formTitle: {
            type: "string",
            default: __("Form")
        }
    },
    // Defining the edit interface
    edit: props => {
        return (
            <div className="galley-block p-3">
                <InnerBlocks />

                <h3 style={{ margin: "0" }}>
                    <RichText
                        value={props.attributes.formTitle}
                        onChange={(formTitle) => props.setAttributes({ formTitle })}
                        placeholder="Title"
                    />
                </h3>
            </div>
        );
    },
    // Defining the front-end interface
    save: props => {
        return (
            <div className="slideForm-Form">
                <InnerBlocks.Content />

                <div
                    className="slideForm-Question"
                    data-question={props.attributes.formTitle}
                >
                    <h2 style={{ textAlign: "center" }}>{props.attributes.formTitle}</h2>
                    <button type="button" className="slideForm-back">⬅️</button>

                    <form>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    },
    deprecated: [
    ]
});
