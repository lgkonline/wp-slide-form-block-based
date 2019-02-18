/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

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
        formShortcode: {
            type: "string"
        }
    },
    // Defining the edit interface
    edit: props => {
        console.log(props);
        return (
            <div>
                <label>
                    {"Shortcode for a form by Contact Form 7"}
                    <input
                        type="text"
                        value={props.attributes.formShortcode}
                        onChange={({ target }) => props.setAttributes({ formShortcode: target.value })}
                        style={{ width: "100%" }}
                    />
                </label>

                <InnerBlocks />
            </div>
        );
    },
    // Defining the front-end interface
    save: props => {
        console.log(props);
        return (
            <div className="slideForm-Form">
                <InnerBlocks.Content />
            </div>
        );
    },
    deprecated: [
    ]
});
