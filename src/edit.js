/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import axios from "axios";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const STYLES = {
	boxShadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.4)",
	minHeight: 100,
	padding: "48px 48px 0 48px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "white",
	color: "black",
};

const ALLOWED_BLOCKS = ["core/image"];
const MY_TEMPLATE = [
	["core/image", { className: "image-element" }],
	["core/heading", { placeholder: "Book Title", className: "heading-element" }],
	[
		"core/paragraph",
		{ placeholder: "Summary", className: "paragraph-element" },
	],
];

const TEMPLATE = [
	[
		"core/columns",
		{},
		[
			["core/column", { allowedBlocks: ["core/image"] }, [["core/image"]]],
			[
				"core/column",
				{ allowedBlocks: ["core/heading", "core/paragraph"] },
				[
					[
						"core/heading",
						{
							level: 3,
							placeholder: "Enter side title...",
						},
					],
					[
						"core/paragraph",
						{
							placeholder: "Enter side content...",
						},
					],
				],
			],
		],
	],
];

export default function Edit() {
	return (
		<div className="outer-main" {...useBlockProps({ style: STYLES })}>
			{/* <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} /> */}
			<InnerBlocks template={TEMPLATE} templateLock="all" />
		</div>
	);
}