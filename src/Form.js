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
        },
        nameLabel: {
            type: "string",
            default: __("Your name")
        },
        emailLabel: {
            type: "string",
            default: __("Your email address")
        },
        phoneLabel: {
            type: "string",
            default: __("Your phone number")
        },
        textareaLabel: {
            type: "string",
            default: __("Something else you want to tell us?")
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

                <RichText
                    value={props.attributes.nameLabel}
                    onChange={(nameLabel) => props.setAttributes({ nameLabel })}
                    placeholder="Label for name field"
                />
                <RichText
                    value={props.attributes.emailLabel}
                    onChange={(emailLabel) => props.setAttributes({ emailLabel })}
                    placeholder="Label for email field"
                />
                <RichText
                    value={props.attributes.phoneLabel}
                    onChange={(phoneLabel) => props.setAttributes({ phoneLabel })}
                    placeholder="Label for phone field"
                />
                <RichText
                    value={props.attributes.textareaLabel}
                    onChange={(textareaLabel) => props.setAttributes({ textareaLabel })}
                    placeholder="Label for textarea field"
                />
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

                    <form style={{ marginTop: "1rem" }}>
                        <p>
                            <label htmlFor="dher74z8rwue3zr7">{props.attributes.nameLabel}</label>
                            <input id="dher74z8rwue3zr7" type="text" name="name" required />
                        </p>

                        <p>
                            <label htmlFor="fgh478wuhrew">{props.attributes.emailLabel}</label>
                            <input id="fgh478wuhrew" type="email" name="email" required />
                        </p>

                        <p>
                            <label htmlFor="f7z36r78iqhrh">{props.attributes.phoneLabel}</label>
                            <input id="f7z36r78iqhrh" type="tel" name="phone" required />
                        </p>

                        <p>
                            <label htmlFor="gz7ehe6guzhuw">{props.attributes.textareaLabel}</label>
                            <textarea id="gz7ehe6guzhuw" name="textarea" />
                        </p>

                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    },
    deprecated: [
    ]
});
