/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  const provider1 = vscode.languages.registerCompletionItemProvider('albumeasy', {

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

      const commands: string[] = [
        "$DEFINE",
        "$ELSE",
        "$ELSEIF",
        "$ENDIF",
        "$IFDEF",
        "$INCLUDE",
        "$UNDEFINE",
        "ALBUM_AUTHOR",
        "ALBUM_DEFINE_FONT",
        "ALBUM_PAGES_BORDER",
        "ALBUM_PAGES_BORDER3",
        "ALBUM_PAGES_DATE",
        "ALBUM_PAGES_DECORATIVE_BORDER",
        "ALBUM_PAGES_FOOTER",
        "ALBUM_PAGES_FOOTER_DATE",
        "ALBUM_PAGES_FOOTER_NUMBER",
        "ALBUM_PAGES_FOOTER_PAD",
        "ALBUM_PAGES_HEADER",
        "ALBUM_PAGES_HEADER_DATE",
        "ALBUM_PAGES_HEADER_NUMBER",
        "ALBUM_PAGES_HEADER_PAD",
        "ALBUM_PAGES_MARGINS",
        "ALBUM_PAGES_MARGINSE",
        "ALBUM_PAGES_MARGIN_TXT",
        "ALBUM_PAGES_MARGIN_TXT_PAD",
        "ALBUM_PAGES_NUMBER",
        "ALBUM_PAGES_SIZE",
        "ALBUM_PAGES_SPACING",
        "ALBUM_PAGES_TITLE",
        "ALBUM_STAMP_IMG_GRAYSCALE_OFF",
        "ALBUM_STAMP_IMG_GRAYSCALE_ON",
        "ALBUM_STAMP_IMG_GREYSCALE_OFF",
        "ALBUM_STAMP_IMG_GREYSCALE_ON",
        "ALBUM_STAMP_IMG_HIDE",
        "ALBUM_STAMP_IMG_NEW_SETTING",
        "ALBUM_STAMP_IMG_SETTING",
        "ALBUM_STAMP_IMG_SHOW",
        "ALBUM_STAMP_NEW_IMG_SETTING",
        "ALBUM_TITLE",
        "COLOR_ALBUM_BORDER",
        "COLOR_ALBUM_DECORATIVE_BORDER",
        "COLOR_ALBUM_FOOTER",
        "COLOR_ALBUM_HEADER",
        "COLOR_ALBUM_MARGIN_TXT",
        "COLOR_ALBUM_TITLE",
        "COLOR_PAGE_QUADRILLE",
        "COLOR_PAGE_RULE_H",
        "COLOR_PAGE_TEXT",
        "COLOR_STAMP_BACKGROUND",
        "COLOR_STAMP_BORDER",
        "COLOR_STAMP_HEADING",
        "COLOR_STAMP_INNER_BORDER",
        "COLOR_STAMP_TEXT",
        "COLOUR_ALBUM_BORDER",
        "COLOUR_ALBUM_DECORATIVE_BORDER",
        "COLOUR_ALBUM_FOOTER",
        "COLOUR_ALBUM_HEADER",
        "COLOUR_ALBUM_MARGIN_TXT",
        "COLOUR_ALBUM_TITLE",
        "COLOUR_PAGE_QUADRILLE",
        "COLOUR_PAGE_RULE_H",
        "COLOUR_PAGE_TEXT",
        "COLOUR_STAMP_BACKGROUND",
        "COLOUR_STAMP_BORDER",
        "COLOUR_STAMP_HEADING",
        "COLOUR_STAMP_INNER_BORDER",
        "COLOUR_STAMP_TEXT",
        "PAGE_ADD_BOX",
        "PAGE_BACKGROUND_IMG",
        "PAGE_COLUMN_NEXT",
        "PAGE_COLUMN_START",
        "PAGE_COLUMN_STOP",
        "PAGE_QUADRILLE",
        "PAGE_RULE_H",
        "PAGE_START",
        "PAGE_START_GROUP_BEGIN",
        "PAGE_START_GROUP_END",
        "PAGE_START_INFO",
        "PAGE_START_VAR",
        "PAGE_TEXT",
        "PAGE_TEXT_CENTER",
        "PAGE_TEXT_CENTER_VSPACE",
        "PAGE_TEXT_CENTRE",
        "PAGE_TEXT_CENTRE_VSPACE",
        "PAGE_TEXT_PARAGRAPH_END",
        "PAGE_TEXT_PARAGRAPH_START",
        "PAGE_TEXT_RIGHT",
        "PAGE_TEXT_RIGHT_VSPACE",
        "PAGE_TEXT_VSPACE",
        "PAGE_VSPACE",
        "ROW_ALIGN_BOTTOM",
        "ROW_ALIGN_MIDDLE",
        "ROW_ALIGN_TOP",
        "ROW_START_ES",
        "ROW_START_FS",
        "ROW_START_JS",
        "ROW_START_ROTATE",
        "STAMP_ADD",
        "STAMP_ADDX",
        "STAMP_ADDX_IMG",
        "STAMP_ADD_BLANK",
        "STAMP_ADD_DIAMOND",
        "STAMP_ADD_HEXAGON",
        "STAMP_ADD_IMG",
        "STAMP_ADD_OCTAGON",
        "STAMP_ADD_OVAL",
        "STAMP_ADD_TRIANGLE",
        "STAMP_ADD_TRIANGLE_INV",
        "STAMP_BORDER_STYLE",
        "STAMP_BOXES_ADJUST_RESTORE",
        "STAMP_BOXES_ADJUST_SAVE",
        "STAMP_BOXES_SIZE_ADJUST",
        "STAMP_HEADING",
        "STAMP_HEADING_PADDING",
        "STAMP_HEADING_VA",
        "STAMP_INNER_BORDER",
        "STAMP_INNER_BORDER_STYLE",
        "TEXT_CHAR_SPACING",
        "TEXT_LINE_LEADING"
      ];

      const returnCompletionItems: vscode.CompletionItem[] = [];

      commands.forEach( (command) => {
        returnCompletionItems.push(new vscode.CompletionItem(command));
      });

      return returnCompletionItems;
    }
  });

  context.subscriptions.push(provider1);
}

