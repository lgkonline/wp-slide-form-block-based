/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText } = wp.editor;
const { Button } = wp.components;

/**
 * Register block
 */
export default registerBlockType("slide-form/option", {
    // Block Title
    title: __("Slide Form Option"),
    parent: ["slide-form/question"],
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
            type: "string"
        },
        mediaID: {
            type: "number",
        },
        mediaURL: {
            type: "string",
            default: ""
        }
    },
    // Defining the edit interface
    edit: props => {
        return (
            <div className="galley-block p-3" style={{ borderColor: "#ff2d55" }}>
                <MediaUpload
                    allowedTypes="image"
                    value={props.attributes.mediaID}
                    render={({ open }) => (
                        <Button
                            className={props.attributes.mediaID ? "image-button" : "button button-large"}
                            onClick={open}
                        >
                            {!props.attributes.mediaID ? __("Upload Image") : <img src={props.attributes.mediaURL} alt={__("Upload Image")} />}
                        </Button>
                    )}
                    onSelect={(media) => {
                        props.setAttributes({
                            mediaURL: media.url,
                            mediaID: media.id
                        });
                    }}
                />

                <RichText
                    value={props.attributes.label}
                    onChange={(title) => props.setAttributes({
                        label: title
                    })}
                    placeholder="Label"
                />
            </div>
        );
    },
    // Defining the front-end interface
    save: props => {
        return (
            <button
                type="button"
                className="slideForm-Option"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 1rem"
                }}
                data-label={props.attributes.label}
            >
                <img
                    src={props.attributes.mediaURL}
                    alt={props.attributes.label}
                    style={{ marginBottom: "1rem" }}
                />
                <span>{props.attributes.label}</span>
            </button>
        );
    },
    deprecated: [
        {
            // Defining the front-end interface
            save: props => {
                return (
                    <button
                        type="button"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 1rem"
                        }}
                        data-label={props.attributes.label}
                    >
                        <img
                            src={props.attributes.mediaURL}
                            alt={props.attributes.label}
                            style={{ marginBottom: "1rem" }}
                        />
                        <span>{props.attributes.label}</span>
                    </button>
                );
            }
        }
    ]
});
