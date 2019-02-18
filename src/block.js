/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

import { Edit } from "./Edit";
import { Frontend } from "./Frontend";

/**
 * Register block
 */
export default registerBlockType("slide-form/block", {
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
		title: {
			type: "string"
		},
		layers: {
			type: "array",
			query: {
				title: {
					type: "string"
				},
				options: {
					type: "array",
					query: {
						icon: {
							type: "string"
						},
						label: {
							type: "string"
						}
					}
				}
			}
		}
	},
	// Defining the edit interface
	edit: props => {
		console.log(props);
		return <Edit {...props.attributes} />;
	},
	// Defining the front-end interface
	save: props => {
		console.log(props);
		return <Frontend {...props} />;
	},
});
