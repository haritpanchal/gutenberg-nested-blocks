const { __ } = wp.i18n;
const TEMPLATE = [
	[
		"core/columns",
		{ verticalAlignment: true },
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
var BLOCK_TEMPLATE = [
	[
		"core/group",
		{
			className: "item-2",
		},
		[
			[
				"core/group",
				{
					className: ["title-block", "accordion-heading"],
				},
				[
					[
						"core/heading",
						{
							className: "agenda-text-label",
							level: 2,
							placeholder: __("Title*: ", "I18N_DOMAIN"),
						},
					],
					[
						"core/paragraph",
						{
							className: ["event-title", "mandatory-field"],
							level: 3,
							placeholder: __("Agenda Title", "I18N_DOMAIN"),
						},
					],
				],
			],
			[
				"core/group",
				{
					className: "accordionContent",
				},
				[
					[
						"core/group",
						{
							className: "speaker-details-block",
						},
						[
							[
								"core/heading",
								{
									level: 2,
									className: "agenda-text-label",
									placeholder: __("Speaker Details: ", "I18N_DOMAIN"),
								},
							],
							[
								"core/paragraph",
								{
									className: "event-speaker-details",
									placeholder: __("Name, Title, Company", "I18N_DOMAIN"),
								},
							],
						],
					],
					[
						"core/group",
						{
							className: "description-block",
						},
						[
							[
								"core/heading",
								{
									level: 2,
									className: "agenda-text-label",
									placeholder: __("Description: ", "I18N_DOMAIN"),
								},
							],
							[
								"core/paragraph",
								{
									className: "event-description",
									placeholder: __("Agenda Description", "I18N_DOMAIN"),
								},
							],
						],
					],
				],
			],
			[
				"core/separator",
				{
					className: "content-horizontal-divider",
				},
			],
		],
	],
];

const GROUP_TEMPLATE = [["core/group"]];

const MY_TEMPLATE = [
	["core/image", { className: "image-element" }],
	["core/heading", { placeholder: "Book Title", className: "heading-element" }],
	[
		"core/paragraph",
		{ placeholder: "Summary", className: "paragraph-element" },
	],
];

export { BLOCK_TEMPLATE, TEMPLATE, GROUP_TEMPLATE, MY_TEMPLATE };
