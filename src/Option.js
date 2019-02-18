/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

/**
 * Register block
 */
export default registerBlockType("slide-form/option", {
    // Block Title
    title: __("Slide Form Option"),
    // Block Description
    description: __("Embedding option."),
    // Block Category
    category: "common",
    // Block Icon
    icon: "marker",
    // Block Keywords
    keywords: [
        __("form"),
        __("slide"),
        __("request"),
    ],
    attributes: {
        label: {
            type: "string",
            default: __("New label")
        },
        icon: {
            type: "string"
        }
    },
    // Defining the edit interface
    edit: props => {
        console.log(props);
        return (
            <div>
                <label>
                    {"Label"}
                    <input
                        type="text"
                        value={props.attributes.label}
                        onChange={({ target }) => props.setAttributes({ label: target.value })}
                    />
                </label>

                <label>
                    {"Icon"}
                    <input
                        type="text"
                        value={props.attributes.icon}
                        onChange={({ target }) => props.setAttributes({ icon: target.value })}
                    />
                </label>
            </div>
        );
    },
    // Defining the front-end interface
    save: props => {
        console.log(props);
        return (
            <button
                type="button"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 1rem"
                }}
            >
                <img
                    src={props.attributes.icon}
                    alt={props.attributes.label}
                    style={{ marginBottom: "1rem" }}
                />
                <span>{props.attributes.label}</span>
            </button>
        );
    },
    deprecated: [
    ]
});
