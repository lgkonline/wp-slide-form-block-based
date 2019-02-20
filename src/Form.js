/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { PanelBody } = wp.components;

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
            <div className="galley-block p-3">
                <InspectorControls>
                    <PanelBody
                        title="Contact Form 7 shortcode"
                        initialOpen={true}
                    >
                        <div>
                            <p>Insert here the shortcode for a form, you get from Contact Form 7. This form will be used by Side Form on the final page.</p>
                        </div>

                        <input
                            type="text"
                            value={props.attributes.formShortcode}
                            onChange={({ target }) => props.setAttributes({ formShortcode: target.value })}
                            style={{ width: "100%" }}
                        />
                    </PanelBody>
                </InspectorControls>
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
