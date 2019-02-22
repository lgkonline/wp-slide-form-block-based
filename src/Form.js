/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls, RichText } = wp.editor;
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
        formTitle: {
            type: "string",
            default: __("Form")
        },
        formShortcode: {
            type: "string"
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

                <div class="wp-block-shortcode">
                    <label for="blocks-shortcode-input-4645734">
                        <svg aria-hidden="true" role="img" focusable="false" className="dashicon dashicons-shortcode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M6 14H4V6h2V4H2v12h4M7.1 17h2.1l3.7-14h-2.1M14 4v2h2v8h-2v2h4V4"></path></svg>
                        Shortcode
                    </label>
                    <textarea
                        className="editor-plain-text input-control"
                        id="blocks-shortcode-input-4645734"
                        placeholder="Insert shortcode here…"
                        rows="1"
                        style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 37px;"
                        style={{
                            overflow: "hidden",
                            overflowWrap: "break-word",
                            resize: "none",
                            height: "37px"
                        }}
                        value={props.attributes.formShortcode}
                        onChange={({ target }) => props.setAttributes({ formShortcode: target.value })}
                    />
                </div>
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

                    {props.attributes.formShortcode}
                </div>
            </div>
        );
    },
    deprecated: [
    ]
});
