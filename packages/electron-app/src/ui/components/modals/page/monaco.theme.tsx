const monacoTheme = {
	rules: [
		[
			{ token: 'comment', foreground: '#6f6f6f' },
			{ token: 'punctuation.definition.comment', foreground: '#6f6f6f' }
		],
		[{ token: 'comment.block.preprocessor', foreground: '#888888' }],
		[
			{ token: 'comment.documentation', foreground: '#888888' },
			{ token: 'comment.block.documentation', foreground: '#888888' }
		],
		[
			{
				token: 'comment.block.documentation punctuation.definition.bracket.curly',
				foreground: '#57B5EA'
			}
		],
		[{ token: 'comment.block storage.type' }],
		[
			{
				token: 'comment.block.documentation punctuation.definition.block.tag',
				foreground: '#AB54D3'
			}
		],
		[{ token: 'invalid.illegal', foreground: '#cc0000' }],
		[{ token: 'keyword.operator', foreground: '#AB54D3' }],
		[{ token: 'keyword.operator.type' }],
		[
			{
				token: 'meta.tag.attributes keyword.operator.assignment',
				foreground: '#fff'
			}
		],
		[{ token: 'keyword.operator.assignment', foreground: '#AB54D3' }],
		[{ token: 'keyword.operator.arithmetic' }],
		[
			{ token: 'keyword', foreground: '#AB54D3' },
			{ token: 'storage', foreground: '#AB54D3' }
		],
		[{ token: 'keyword.other.definition.ini', foreground: '#ddd' }],
		[
			{ token: 'storage.type', foreground: '#AB54D3' },
			{ token: 'support.type', foreground: '#AB54D3' },
			{ token: 'keyword.control', foreground: '#AB54D3' }
		],
		[
			{ token: 'constant.language', foreground: '#E97258' },
			{ token: 'support.constant', foreground: '#E97258' },
			{ token: 'variable.language', foreground: '#E97258' }
		],
		[
			{
				token: 'constant.language.import-export-all',
				foreground: '#ddd'
			}
		],
		[
			{ token: 'variable', foreground: '#fff' },
			{ token: 'support.variable', foreground: '#fff' }
		],
		[
			{
				token: 'meta.object.member variable.other.constant',
				foreground: '#36acaa'
			}
		],
		[{ token: 'variable.language.this', foreground: '#d9931e' }],
		[
			{
				token: 'meta.tag.attributes variable.other',
				foreground: '#57B5EA'
			}
		],
		[
			{
				token: 'meta.object.member variable.other.readwrite',
				foreground: '#57B5EA'
			}
		],
		[
			{ token: 'entity.name.function', foreground: '#57B5EA' },
			{ token: 'support.function', foreground: '#57B5EA' }
		],
		[{ token: 'storage.type.function.arrow', foreground: '#AB54D3' }],
		[
			{ token: 'entity.name.type', foreground: '#57B5EA' },
			{ token: 'entity.other.inherited-class', foreground: '#57B5EA' },
			{ token: 'support.class', foreground: '#57B5EA' }
		],
		[{ token: 'entity.name.exception', foreground: '#cc0000' }],
		[{ token: 'entity.name.section', foreground: '#AB54D3' }],
		[
			{ token: 'constant.numeric', foreground: '#57B5EA' },
			{ token: 'constant.character', foreground: '#57B5EA' },
			{ token: 'constant', foreground: '#57B5EA' }
		],
		[{ token: 'string', foreground: 'grey' }],
		[{ token: 'string.unquoted', foreground: '#fff' }],
		[{ token: 'constant.character.escape', foreground: '#888888' }],
		[{ token: 'string.regexp', foreground: '#57B5EA' }],
		[{ token: 'constant.other.symbol', foreground: '#AB6526' }],
		[{ token: 'punctuation', foreground: '#fff' }],
		[{ token: 'punctuation.definition.quasi', foreground: '#98C75C' }],
		[
			{ token: 'punctuation.definition.keyword', foreground: '#AB54D3' }
		],
		[{ token: 'punctuation.definition.string', foreground: '#98C75C' }],
		[
			{
				token: 'punctuation.definition.entity.ini',
				foreground: '#AB54D3'
			}
		],
		[{ token: 'punctuation.definition.tag', foreground: '#57B5EA' }],
		[{ token: 'punctuation.definition.bold', foreground: '#57B5EA' }],
		[
			{ token: 'punctuation.definition.heading', foreground: '#AB54D3' }
		],
		[
			{
				token: 'punctuation.definition.string.template',
				foreground: '#E97258'
			}
		],
		[
			{
				token: 'meta.tag.attributes punctuation.section.embedded',
				foreground: '#57B5EA'
			}
		],
		[
			{ token: 'meta.definition.variable', foreground: '#FF9A7A' },
			{
				token: 'meta.definition.variable entity.name.function',
				foreground: '#FF9A7A'
			}
		],
		[{ token: 'meta.brace', foreground: '#fff' }],
		[
			{
				token: 'meta.definition.method entity.name.function',
				foreground: '#57B5EA'
			},
			{
				token: 'meta.function-call entity.name.function',
				foreground: '#57B5EA'
			}
		],
		[{ token: 'meta.link.inline', foreground: '#57B5EA' }],
		[
			{ token: 'support.type.primitive', foreground: '#36ACAA' },
			{
				token: 'meta.type.parameters entity.name.type',
				foreground: '#36ACAA'
			}
		],
		[
			{ token: 'meta.tag.sgml.doctype', foreground: '#ddd' },
			{ token: 'meta.tag.sgml.doctype string', foreground: '#ddd' },
			{
				token: 'meta.tag.sgml.doctype entity.name.tag',
				foreground: '#ddd'
			},
			{
				token: 'meta.tag.sgml punctuation.definition.tag.html',
				foreground: '#ddd'
			}
		],
		[
			{ token: 'meta.tag', foreground: '#ddd' },
			{ token: 'punctuation.definition.tag.html', foreground: '#ddd' },
			{
				token: 'punctuation.definition.tag.begin.html',
				foreground: '#ddd'
			},
			{
				token: 'punctuation.definition.tag.end.html',
				foreground: '#ddd'
			}
		],
		[{ token: 'entity.name.tag', foreground: '#57B5EA' }],
		[
			{
				token: 'meta.tag entity.other.attribute-name',
				foreground: '#d9931e'
			},
			{
				token: 'entity.other.attribute-name.html',
				foreground: '#d9931e'
			}
		],
		[
			{ token: 'constant.character.entity', foreground: '#d9931e' },
			{ token: 'punctuation.definition.entity', foreground: '#d9931e' }
		],
		[
			{ token: 'meta.selector', foreground: '#AB54D3' },
			{ token: 'meta.selector entity', foreground: '#AB54D3' },
			{
				token: 'meta.selector entity punctuation',
				foreground: '#AB54D3'
			},
			{ token: 'entity.name.tag.css', foreground: '#AB54D3' }
		],
		[
			{ token: 'meta.property-name', foreground: '#ddd' },
			{ token: 'support.type.property-name', foreground: '#ddd' }
		],
		[
			{ token: 'support.type.property-name.json', foreground: '#E97258' }
		],
		[
			{
				token: 'source.json punctuation.support.type.property-name',
				foreground: '#E97258'
			}
		],
		[
			{
				token: 'punctuation.definition.entity.css',
				foreground: '#AB54D3'
			}
		],
		[
			{ token: 'meta.property-value', foreground: '#E97258' },
			{
				token: 'meta.property-value constant.other',
				foreground: '#E97258'
			},
			{ token: 'support.constant.property-value', foreground: '#E97258' }
		],
		[{ token: 'keyword.other.important', foreground: '#AB54D3' }],
		[{ token: 'meta.paragraph.markdown', foreground: '#ddd' }],
		[
			{
				token: 'markup.quote meta.paragraph.markdown',
				foreground: '#E97258',
				fontStyle: 'italic'
			},
			{
				token: 'markup.quote punctuation.definition',
				foreground: '#E97258',
				fontStyle: 'italic'
			}
		],
		[{ token: 'markup.bold.markdown', foreground: '#57B5EA' }],
		[{ token: 'markup.changed', foreground: '#ddd' }],
		[{ token: 'markup.deleted', foreground: '#ddd' }],
		[{ token: 'markup.italic', fontStyle: 'italic' }],
		[{ token: 'markup.error', foreground: '#cc0000' }],
		[{ token: 'markup.inserted', foreground: '#ddd' }],
		[{ token: 'meta.link', foreground: '#57B5EA' }],
		[
			{ token: 'markup.output', foreground: '#888888' },
			{ token: 'markup.raw', foreground: '#888888' }
		],
		[{ token: 'markup.prompt', foreground: '#888888' }],
		[{ token: 'markup.heading', foreground: '#AA3731' }],
		[{ token: 'markup.underline', fontStyle: 'underline' }],
		[{ token: 'markup.quote', foreground: '#6f6f6f' }],
		[{ token: 'markup.list', foreground: '#57B5EA' }],
		[
			{ token: 'markup.bold', foreground: '#E97258' },
			{ token: 'markup.italic', foreground: '#E97258' }
		],
		[{ token: 'markup.inline.raw', foreground: '#bd10e0' }],
		[
			{ token: 'meta.diff.range', foreground: '#434343' },
			{ token: 'meta.diff.index', foreground: '#434343' },
			{ token: 'meta.separator', foreground: '#434343' }
		],
		[{ token: 'meta.diff.header.from-file', foreground: '#434343' }],
		[{ token: 'meta.diff.header.to-file', foreground: '#434343' }],
		[{ token: 'constant.other.timestamp', foreground: '#B731B0' }],
		[
			{
				token: 'meta.embedded.block.frontmatter string.unquoted',
				foreground: '#98C75C'
			}
		],
		[
			{
				token: 'punctuation.section.embedded.begin.php',
				foreground: '#AB54D3'
			}
		]
	],
	colors: {
		"activityBar.background": "#333842",
		"activityBar.foreground": "#D7DAE0",
		"activityBarBadge.background": "#528BFF",
		"activityBarBadge.foreground": "#D7DAE0",
		"button.background": "#4D78CC",
		"button.foreground": "#FFFFFF",
		"button.hoverBackground": "#6087CF",
		"diffEditor.insertedTextBackground": "#00809B33",
		"dropdown.background": "#353b45",
		"dropdown.border": "#181A1F",
		"editorIndentGuide.activeBackground": "#626772",
		"editor.background": "#282C34",
		"editor.foreground": "#ABB2BF",
		"editor.lineHighlightBackground": "#99BBFF0A",
		"editor.selectionBackground": "#3E4451",
		"editorCursor.foreground": "#528BFF",
		"editor.findMatchHighlightBackground": "#528BFF3D",
		"editorGroup.background": "#21252B",
		"editorGroup.border": "#181A1F",
		"editorGroupHeader.tabsBackground": "#21252B",
		"editorIndentGuide.background": "#ABB2BF26",
		"editorLineNumber.foreground": "#636D83",
		"editorLineNumber.activeForeground": "#ABB2BF",
		"editorWhitespace.foreground": "#ABB2BF26",
		"editorRuler.foreground": "#ABB2BF26",
		"editorHoverWidget.background": "#21252B",
		"editorHoverWidget.border": "#181A1F",
		"editorSuggestWidget.background": "#21252B",
		"editorSuggestWidget.border": "#181A1F",
		"editorSuggestWidget.selectedBackground": "#2C313A",
		"editorWidget.background": "#21252B",
		"editorWidget.border": "#3A3F4B",
		"input.background": "#1B1D23",
		"input.border": "#181A1F",
		focusBorder: "#528BFF",
		"list.activeSelectionBackground": "#2C313A",
		"list.activeSelectionForeground": "#D7DAE0",
		"list.focusBackground": "#2C313A",
		"list.hoverBackground": "#2C313A66",
		"list.highlightForeground": "#D7DAE0",
		"list.inactiveSelectionBackground": "#2C313A",
		"list.inactiveSelectionForeground": "#D7DAE0",
		"notification.background": "#21252B",
		"pickerGroup.border": "#528BFF",
		"scrollbarSlider.background": "#4E566680",
		"scrollbarSlider.activeBackground": "#747D9180",
		"scrollbarSlider.hoverBackground": "#5A637580",
		"sideBar.background": "#21252B",
		"sideBarSectionHeader.background": "#333842",
		"statusBar.background": "#21252B",
		"statusBar.foreground": "#9DA5B4",
		"statusBarItem.hoverBackground": "#2C313A",
		"statusBar.noFolderBackground": "#21252B",
		"tab.activeBackground": "#282C34",
		"tab.activeForeground": "#D7DAE0",
		"tab.border": "#181A1F",
		"tab.inactiveBackground": "#21252B",
		"titleBar.activeBackground": "#21252B",
		"titleBar.activeForeground": "#9DA5B4",
		"titleBar.inactiveBackground": "#21252B",
		"titleBar.inactiveForeground": "#9DA5B4",
		"statusBar.debuggingForeground": "#FFFFFF",
		"extensionButton.prominentBackground": "#2BA143",
		"extensionButton.prominentHoverBackground": "#37AF4E",
		"badge.background": "#528BFF",
		"badge.foreground": "#D7DAE0",
		"peekView.border": "#528BFF",
		"peekViewResult.background": "#21252B",
		"peekViewResult.selectionBackground": "#2C313A",
		"peekViewTitle.background": "#1B1D23",
		"peekViewEditor.background": "#1B1D23",
	},
};

// const newTheme = {
// 	colors: {
// 		"selection.background": "#B731B0",
// 		"input.background": "#080808",
// 		"button.background": "#AB54D3",
// 		"button.foreground": "#ffffff",
// 		"quickInput.background": "#080808",
// 		"quickInputList.focusBackground": "#303030",
// 		"textLink.foreground": "#AB54D3",
// 		"textLink.activeForeground": "#ffffff",
// 		focusBorder: "#AB54D3",
// 		"editor.background": "#080808",
// 		"editor.foreground": "#dddddd",
// 		"activityBar.background": "#080808",
// 		"editorLineNumber.foreground": "#3f3f3f",
// 		"editorLineNumber.activeForeground": "#ffffff",
// 		"editor.selectionBackground": "#fffffffff32",
// 		"editor.selectionForeground": "#ffffff",
// 		"editorCursor.foreground": "#B731B0",
// 		"editorWhitespace.foreground": "#2b2b2b",
// 		"sideBar.background": "#080808",
// 		"sideBar.border": "#2b2b2b",
// 		"sideBar.foreground": "#eee",
// 		"sideBarSectionHeader.background": "#080808",
// 		"sideBarSectionHeader.foreground": "#ffffff",
// 		"editorGroupHeader.border": "#303030",
// 		"sideBarSectionHeader.border": "#303030",
// 		"breadcrumb.foreground": "#aaa",
// 		"badge.background": "#AB54D3",
// 		"badge.foreground": "#ffffff",
// 		"list.activeSelectionBackground": "#AB54D3",
// 		"list.activeSelectionForeground": "#ffffff",
// 		"list.inactiveSelectionBackground": "#303030",
// 		"list.hoverBackground": "#303030",
// 		"debugIcon.breakpointForeground": "#AB54D3",
// 		"titleBar.activeBackground": "#080808",
// 		"titleBar.activeForeground": "#ffffff",
// 		"titleBar.border": "#303030",
// 		"statusBar.background": "#080808",
// 		"statusBar.foreground": "#6f6f6f",
// 		"statusBar.border": "#303030",
// 		"statusBarItem.warningBackground": "#E97258",
// 		"activityBar.border": "#303030",
// 		"activityBarBadge.foreground": "#ffffff",
// 		"activityBarBadge.background": "#AB54D3",
// 		"activityBar.activeBorder": "#AB54D3",
// 		"editorGroupHeader.tabsBackground": "#080808",
// 		"editorGroupHeader.tabsBorder": "#080808",
// 		"tab.border": "#303030",
// 		"tab.activeBackground": "#080808",
// 		"tab.activeForeground": "#ffffff",
// 		"tab.activeBorderTop": "#AB54D3",
// 		"tab.hoverBackground": "#30303075",
// 		"tab.inactiveBackground": "#080808",
// 		"tab.inactiveForeground": "#6f6f6f",
// 		"scrollbarSlider.background": "#303030",
// 		"terminalCursor.foreground": "#B731B0",
// 		"terminal.tab.activeBorder": "#B731B0",
// 		"gitDecoration.modifiedResourceForeground": "#E97258",
// 		"gitDecoration.untrackedResourceForeground": "#B3D761",
// 		"gitDecoration.addedResourceForeground": "#B3D761",
// 		"gitDecoration.ignoreResourceForeground": "#6f6f6f",
// 	},
// 	rules: [
// 		{ foreground: "#6f6f6f", token: "comment" },
// 		{ foreground: "#6f6f6f", token: "punctuation.definition.comment" },
// 		{ foreground: "#888888", token: "comment.block.preprocessor" },
// 		{ foreground: "#888888", token: "comment.documentation" },
// 		{ foreground: "#888888", token: "comment.block.documentation" },
// 		{
// 			foreground: "#57B5EA",
// 			token: "comment.block.documentation punctuation.definition.bracket.curly",
// 		},
// 		{ token: "comment.block storage.type" },
// 		{
// 			foreground: "#AB54D3",
// 			token: "comment.block.documentation punctuation.definition.block.tag",
// 		},
// 		{ foreground: "#cc0000", token: "invalid.illegal" },
// 		{ foreground: "#AB54D3", token: "keyword.operator" },
// 		{ token: "keyword.operator.type" },
// 		{
// 			foreground: "#ffffff",
// 			token: "meta.tag.attributes keyword.operator.assignment",
// 		},
// 		{ foreground: "#AB54D3", token: "keyword.operator.assignment" },
// 		{ token: "keyword.operator.arithmetic" },
// 		{ foreground: "#AB54D3", token: "keyword" },
// 		{ foreground: "#AB54D3", token: "storage" },
// 		{ foreground: "#dddddd", token: "keyword.other.definition.ini" },
// 		{ foreground: "#AB54D3", token: "storage.type" },
// 		{ foreground: "#AB54D3", token: "support.type" },
// 		{ foreground: "#AB54D3", token: "keyword.control" },
// 		{ foreground: "#E97258", token: "constant.language" },
// 		{ foreground: "#E97258", token: "support.constant" },
// 		{ foreground: "#E97258", token: "variable.language" },
// 		{ foreground: "#dddddd", token: "constant.language.import-export-all" },
// 		{ foreground: "#ffffff", token: "variable" },
// 		{ foreground: "#ffffff", token: "support.variable" },
// 		{
// 			foreground: "#36acaa",
// 			token: "meta.object.member variable.other.constant",
// 		},
// 		{ foreground: "#d9931e", token: "variable.language.this" },
// 		{ foreground: "#57B5EA", token: "meta.tag.attributes variable.other" },
// 		{
// 			foreground: "#57B5EA",
// 			token: "meta.object.member variable.other.readwrite",
// 		},
// 		{ foreground: "#57B5EA", token: "entity.name.function" },
// 		{ foreground: "#57B5EA", token: "support.function" },
// 		{ foreground: "#AB54D3", token: "storage.type.function.arrow" },
// 		{ foreground: "#57B5EA", token: "entity.name.type" },
// 		{ foreground: "#57B5EA", token: "entity.other.inherited-class" },
// 		{ foreground: "#57B5EA", token: "support.class" },
// 		{ foreground: "#cc0000", token: "entity.name.exception" },
// 		{ foreground: "#AB54D3", token: "entity.name.section" },
// 		{ foreground: "#57B5EA", token: "constant.numeric" },
// 		{ foreground: "#57B5EA", token: "constant.character" },
// 		{ foreground: "#57B5EA", token: "constant" },
// 		{ foreground: "#ffffff", token: "string" },
// 		{ foreground: "#ffffff", token: "string.unquoted" },
// 		{ foreground: "#888888", token: "constant.character.escape" },
// 		{ foreground: "#57B5EA", token: "string.regexp" },
// 		{ foreground: "#AB6526", token: "constant.other.symbol" },
// 		{ foreground: "#ffffff", token: "punctuation" },
// 		{ foreground: "#98C75C", token: "punctuation.definition.quasi" },
// 		{ foreground: "#AB54D3", token: "punctuation.definition.keyword" },
// 		{ foreground: "#98C75C", token: "punctuation.definition.string" },
// 		{ foreground: "#AB54D3", token: "punctuation.definition.entity.ini" },
// 		{ foreground: "#57B5EA", token: "punctuation.definition.tag" },
// 		{ foreground: "#57B5EA", token: "punctuation.definition.bold" },
// 		{ foreground: "#AB54D3", token: "punctuation.definition.heading" },
// 		{ foreground: "#E97258", token: "punctuation.definition.string.template" },
// 		{
// 			foreground: "#57B5EA",
// 			token: "meta.tag.attributes punctuation.section.embedded",
// 		},
// 		{ foreground: "#FF9A7A", token: "meta.definition.variable" },
// 		{
// 			foreground: "#FF9A7A",
// 			token: "meta.definition.variable entity.name.function",
// 		},
// 		{ foreground: "#ffffff", token: "meta.brace" },
// 		{
// 			foreground: "#57B5EA",
// 			token: "meta.definition.method entity.name.function",
// 		},
// 		{ foreground: "#57B5EA", token: "meta.function-call entity.name.function" },
// 		{ foreground: "#57B5EA", token: "meta.link.inline" },
// 		{ foreground: "#36ACAA", token: "support.type.primitive" },
// 		{ foreground: "#36ACAA", token: "meta.type.parameters entity.name.type" },
// 		{ foreground: "#dddddd", token: "meta.tag.sgml.doctype" },
// 		{ foreground: "#dddddd", token: "meta.tag.sgml.doctype string" },
// 		{ foreground: "#dddddd", token: "meta.tag.sgml.doctype entity.name.tag" },
// 		{
// 			foreground: "#dddddd",
// 			token: "meta.tag.sgml punctuation.definition.tag.html",
// 		},
// 		{ foreground: "#dddddd", token: "meta.tag" },
// 		{ foreground: "#dddddd", token: "punctuation.definition.tag.html" },
// 		{ foreground: "#dddddd", token: "punctuation.definition.tag.begin.html" },
// 		{ foreground: "#dddddd", token: "punctuation.definition.tag.end.html" },
// 		{ foreground: "#57B5EA", token: "entity.name.tag" },
// 		{ foreground: "#d9931e", token: "meta.tag entity.other.attribute-name" },
// 		{ foreground: "#d9931e", token: "entity.other.attribute-name.html" },
// 		{ foreground: "#d9931e", token: "constant.character.entity" },
// 		{ foreground: "#d9931e", token: "punctuation.definition.entity" },
// 		{ foreground: "#AB54D3", token: "meta.selector" },
// 		{ foreground: "#AB54D3", token: "meta.selector entity" },
// 		{ foreground: "#AB54D3", token: "meta.selector entity punctuation" },
// 		{ foreground: "#AB54D3", token: "entity.name.tag.css" },
// 		{ foreground: "#dddddd", token: "meta.property-name" },
// 		{ foreground: "#dddddd", token: "support.type.property-name" },
// 		{ foreground: "#E97258", token: "support.type.property-name.json" },
// 		{
// 			foreground: "#E97258",
// 			token: "source.json punctuation.support.type.property-name",
// 		},
// 		{ foreground: "#AB54D3", token: "punctuation.definition.entity.css" },
// 		{ foreground: "#E97258", token: "meta.property-value" },
// 		{ foreground: "#E97258", token: "meta.property-value constant.other" },
// 		{ foreground: "#E97258", token: "support.constant.property-value" },
// 		{ foreground: "#AB54D3", token: "keyword.other.important" },
// 		{ foreground: "#dddddd", token: "meta.paragraph.markdown" },
// 		{
// 			foreground: "#E97258",
// 			fontStyle: "italic",
// 			token: "markup.quote meta.paragraph.markdown",
// 		},
// 		{
// 			foreground: "#E97258",
// 			fontStyle: "italic",
// 			token: "markup.quote punctuation.definition",
// 		},
// 		{ foreground: "#57B5EA", token: "markup.bold.markdown" },
// 		{ foreground: "#dddddd", token: "markup.changed" },
// 		{ foreground: "#dddddd", token: "markup.deleted" },
// 		{ fontStyle: "italic", token: "markup.italic" },
// 		{ foreground: "#cc0000", token: "markup.error" },
// 		{ foreground: "#dddddd", token: "markup.inserted" },
// 		{ foreground: "#57B5EA", token: "meta.link" },
// 		{ foreground: "#888888", token: "markup.output" },
// 		{ foreground: "#888888", token: "markup.raw" },
// 		{ foreground: "#888888", token: "markup.prompt" },
// 		{ foreground: "#AA3731", token: "markup.heading" },
// 		{ fontStyle: "underline", token: "markup.underline" },
// 		{ foreground: "#6f6f6f", token: "markup.quote" },
// 		{ foreground: "#57B5EA", token: "markup.list" },
// 		{ foreground: "#E97258", token: "markup.bold" },
// 		{ foreground: "#E97258", token: "markup.italic" },
// 		{ foreground: "#bd10e0", token: "markup.inline.raw" },
// 		{ foreground: "#434343", token: "meta.diff.range" },
// 		{ foreground: "#434343", token: "meta.diff.index" },
// 		{ foreground: "#434343", token: "meta.separator" },
// 		{ foreground: "#434343", token: "meta.diff.header.from-file" },
// 		{ foreground: "#434343", token: "meta.diff.header.to-file" },
// 		{ foreground: "#B731B0", token: "constant.other.timestamp" },
// 		{
// 			foreground: "#98C75C",
// 			token: "meta.embedded.block.frontmatter string.unquoted",
// 		},
// 		{ foreground: "#AB54D3", token: "punctuation.section.embedded.begin.php" },
// 		{ token: "", foreground: "#dddddd" },
// 	]
// }

const newTheme = {
	colors: {
		"selection.background": "#B731B0",
		"input.background": "#080808",
		"button.background": "#AB54D3",
		"button.foreground": "#ffffff",
		"quickInput.background": "#080808",
		"quickInputList.focusBackground": "#303030",
		"textLink.foreground": "#AB54D3",
		"textLink.activeForeground": "#ffffff",
		focusBorder: "#AB54D3",
		"editor.background": "#080808",
		"editor.foreground": "#dddddd",
		"activityBar.background": "#080808",
		"editorLineNumber.foreground": "#3f3f3f",
		"editorLineNumber.activeForeground": "#ffffff",
		"editor.selectionBackground": "#fffffffff32",
		"editor.selectionForeground": "#ffffff",
		"editorCursor.foreground": "#B731B0",
		"editorWhitespace.foreground": "#2b2b2b",
		"sideBar.background": "#080808",
		"sideBar.border": "#2b2b2b",
		"sideBar.foreground": "#eee",
		"sideBarSectionHeader.background": "#080808",
		"sideBarSectionHeader.foreground": "#ffffff",
		"editorGroupHeader.border": "#303030",
		"sideBarSectionHeader.border": "#303030",
		"breadcrumb.foreground": "#aaa",
		"badge.background": "#AB54D3",
		"badge.foreground": "#ffffff",
		"list.activeSelectionBackground": "#AB54D3",
		"list.activeSelectionForeground": "#ffffff",
		"list.inactiveSelectionBackground": "#303030",
		"list.hoverBackground": "#303030",
		"debugIcon.breakpointForeground": "#AB54D3",
		"titleBar.activeBackground": "#080808",
		"titleBar.activeForeground": "#ffffff",
		"titleBar.border": "#303030",
		"statusBar.background": "#080808",
		"statusBar.foreground": "#6f6f6f",
		"statusBar.border": "#303030",
		"statusBarItem.warningBackground": "#E97258",
		"activityBar.border": "#303030",
		"activityBarBadge.foreground": "#ffffff",
		"activityBarBadge.background": "#AB54D3",
		"activityBar.activeBorder": "#AB54D3",
		"editorGroupHeader.tabsBackground": "#080808",
		"editorGroupHeader.tabsBorder": "#080808",
		"tab.border": "#303030",
		"tab.activeBackground": "#080808",
		"tab.activeForeground": "#ffffff",
		"tab.activeBorderTop": "#AB54D3",
		"tab.hoverBackground": "#30303075",
		"tab.inactiveBackground": "#080808",
		"tab.inactiveForeground": "#6f6f6f",
		"scrollbarSlider.background": "#303030",
		"terminalCursor.foreground": "#B731B0",
		"terminal.tab.activeBorder": "#B731B0",
		"gitDecoration.modifiedResourceForeground": "#E97258",
		"gitDecoration.untrackedResourceForeground": "#B3D761",
		"gitDecoration.addedResourceForeground": "#B3D761",
		"gitDecoration.ignoreResourceForeground": "#6f6f6f",
	},
	rules: [
		{ token: 'type', foreground: '#ACFC5B' },
		{ foreground: "#6f6f6f", token: "comment" },
		{ foreground: "#6f6f6f", token: "punctuation.definition.comment" },
		{ foreground: "#888888", token: "comment.block.preprocessor" },
		{ foreground: "#888888", token: "comment.documentation" },
		{ foreground: "#888888", token: "comment.block.documentation" },
		{
			foreground: "#57B5EA",
			token: "comment.block.documentation punctuation.definition.bracket.curly",
		},
		{ token: "comment.block storage.type" },
		{
			foreground: "#AB54D3",
			token: "comment.block.documentation punctuation.definition.block.tag",
		},
		{ foreground: "#cc0000", token: "invalid.illegal" },
		{ foreground: "#AB54D3", token: "keyword.operator" },
		{ token: "keyword.operator.type" },
		{
			foreground: "#ffffff",
			token: "meta.tag.attributes keyword.operator.assignment",
		},
		{ foreground: "#AB54D3", token: "keyword.operator.assignment" },
		{ token: "keyword.operator.arithmetic" },
		{ foreground: "#AB54D3", token: "keyword" },
		{ foreground: "#AB54D3", token: "storage" },
		{ foreground: "#dddddd", token: "keyword.other.definition.ini" },
		{ foreground: "#AB54D3", token: "storage.type" },
		{ foreground: "#AB54D3", token: "support.type" },
		{ foreground: "#AB54D3", token: "keyword.control" },
		{ foreground: "#E97258", token: "constant.language" },
		{ foreground: "#E97258", token: "support.constant" },
		{ foreground: "#E97258", token: "variable.language" },
		{ foreground: "#dddddd", token: "constant.language.import-export-all" },
		{ foreground: "#ffffff", token: "variable" },
		{ foreground: "#ffffff", token: "support.variable" },
		{
			foreground: "#36acaa",
			token: "meta.object.member variable.other.constant",
		},
		{ foreground: "#d9931e", token: "variable.language.this" },
		{ foreground: "#57B5EA", token: "meta.tag.attributes variable.other" },
		{
			foreground: "#57B5EA",
			token: "meta.object.member variable.other.readwrite",
		},
		{ foreground: "#57B5EA", token: "entity.name.function" },
		{ foreground: "#57B5EA", token: "support.function" },
		{ foreground: "#AB54D3", token: "storage.type.function.arrow" },
		{ foreground: "#57B5EA", token: "entity.name.type" },
		{ foreground: "#57B5EA", token: "entity.other.inherited-class" },
		{ foreground: "#57B5EA", token: "support.class" },
		{ foreground: "#cc0000", token: "entity.name.exception" },
		{ foreground: "#AB54D3", token: "entity.name.section" },
		{ foreground: "#57B5EA", token: "constant.numeric" },
		{ foreground: "#57B5EA", token: "constant.character" },
		{ foreground: "#57B5EA", token: "constant" },
		{ foreground: "#ffffff", token: "string" },
		{ foreground: "#ffffff", token: "string.unquoted" },
		{ foreground: "#888888", token: "constant.character.escape" },
		{ foreground: "#57B5EA", token: "string.regexp" },
		{ foreground: "#AB6526", token: "constant.other.symbol" },
		{ foreground: "#ffffff", token: "punctuation" },
		{ foreground: "#98C75C", token: "punctuation.definition.quasi" },
		{ foreground: "#AB54D3", token: "punctuation.definition.keyword" },
		{ foreground: "#98C75C", token: "punctuation.definition.string" },
		{ foreground: "#AB54D3", token: "punctuation.definition.entity.ini" },
		{ foreground: "#57B5EA", token: "punctuation.definition.tag" },
		{ foreground: "#57B5EA", token: "punctuation.definition.bold" },
		{ foreground: "#AB54D3", token: "punctuation.definition.heading" },
		{ foreground: "#E97258", token: "punctuation.definition.string.template" },
		{
			foreground: "#57B5EA",
			token: "meta.tag.attributes punctuation.section.embedded",
		},
		{ foreground: "#FF9A7A", token: "meta.definition.variable" },
		{
			foreground: "#FF9A7A",
			token: "meta.definition.variable entity.name.function",
		},
		{ foreground: "#ffffff", token: "meta.brace" },
		{
			foreground: "#57B5EA",
			token: "meta.definition.method entity.name.function",
		},
		{ foreground: "#57B5EA", token: "meta.function-call entity.name.function" },
		{ foreground: "#57B5EA", token: "meta.link.inline" },
		{ foreground: "#36ACAA", token: "support.type.primitive" },
		{ foreground: "#36ACAA", token: "meta.type.parameters entity.name.type" },
		{ foreground: "#dddddd", token: "meta.tag.sgml.doctype" },
		{ foreground: "#dddddd", token: "meta.tag.sgml.doctype string" },
		{ foreground: "#dddddd", token: "meta.tag.sgml.doctype entity.name.tag" },
		{
			foreground: "#dddddd",
			token: "meta.tag.sgml punctuation.definition.tag.html",
		},
		{ foreground: "#dddddd", token: "meta.tag" },
		{ foreground: "#dddddd", token: "punctuation.definition.tag.html" },
		{ foreground: "#dddddd", token: "punctuation.definition.tag.begin.html" },
		{ foreground: "#dddddd", token: "punctuation.definition.tag.end.html" },
		{ foreground: "#57B5EA", token: "entity.name.tag" },
		{ foreground: "#d9931e", token: "meta.tag entity.other.attribute-name" },
		{ foreground: "#d9931e", token: "entity.other.attribute-name.html" },
		{ foreground: "#d9931e", token: "constant.character.entity" },
		{ foreground: "#d9931e", token: "punctuation.definition.entity" },
		{ foreground: "#AB54D3", token: "meta.selector" },
		{ foreground: "#AB54D3", token: "meta.selector entity" },
		{ foreground: "#AB54D3", token: "meta.selector entity punctuation" },
		{ foreground: "#AB54D3", token: "entity.name.tag.css" },
		{ foreground: "#dddddd", token: "meta.property-name" },
		{ foreground: "#dddddd", token: "support.type.property-name" },
		{ foreground: "#E97258", token: "support.type.property-name.json" },
		{
			foreground: "#E97258",
			token: "source.json punctuation.support.type.property-name",
		},
		{ foreground: "#AB54D3", token: "punctuation.definition.entity.css" },
		{ foreground: "#E97258", token: "meta.property-value" },
		{ foreground: "#E97258", token: "meta.property-value constant.other" },
		{ foreground: "#E97258", token: "support.constant.property-value" },
		{ foreground: "#AB54D3", token: "keyword.other.important" },
		{ foreground: "#dddddd", token: "meta.paragraph.markdown" },
		{
			foreground: "#E97258",
			fontStyle: "italic",
			token: "markup.quote meta.paragraph.markdown",
		},
		{
			foreground: "#E97258",
			fontStyle: "italic",
			token: "markup.quote punctuation.definition",
		},
		{ foreground: "#57B5EA", token: "markup.bold.markdown" },
		{ foreground: "#dddddd", token: "markup.changed" },
		{ foreground: "#dddddd", token: "markup.deleted" },
		{ fontStyle: "italic", token: "markup.italic" },
		{ foreground: "#cc0000", token: "markup.error" },
		{ foreground: "#dddddd", token: "markup.inserted" },
		{ foreground: "#57B5EA", token: "meta.link" },
		{ foreground: "#888888", token: "markup.output" },
		{ foreground: "#888888", token: "markup.raw" },
		{ foreground: "#888888", token: "markup.prompt" },
		{ foreground: "#AA3731", token: "markup.heading" },
		{ fontStyle: "underline", token: "markup.underline" },
		{ foreground: "#6f6f6f", token: "markup.quote" },
		{ foreground: "#57B5EA", token: "markup.list" },
		{ foreground: "#E97258", token: "markup.bold" },
		{ foreground: "#E97258", token: "markup.italic" },
		{ foreground: "#bd10e0", token: "markup.inline.raw" },
		{ foreground: "#434343", token: "meta.diff.range" },
		{ foreground: "#434343", token: "meta.diff.index" },
		{ foreground: "#434343", token: "meta.separator" },
		{ foreground: "#434343", token: "meta.diff.header.from-file" },
		{ foreground: "#434343", token: "meta.diff.header.to-file" },
		{ foreground: "#B731B0", token: "constant.other.timestamp" },
		{
			foreground: "#98C75C",
			token: "meta.embedded.block.frontmatter string.unquoted",
		},
		{ foreground: "#AB54D3", token: "punctuation.section.embedded.begin.php" },
		{ token: "", foreground: "#ffffff" },
	]
}

export { monacoTheme, newTheme };

