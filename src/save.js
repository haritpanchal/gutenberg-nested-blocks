/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
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

export default function save() {
	return (
		<div {...useBlockProps.save({ style: STYLES })}>
			<div class="outer-main">
				<InnerBlocks.Content className="ascs" />
			</div>
		</div>
	);
}
