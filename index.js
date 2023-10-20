/**
 * @name Arabic LTR
 * @author zd8
 * @description Return the left to right in arabic text to discord
 * @version 1.0.0
 */

module.exports = class ArabicLTR {
  constructor() {
    let { style, sheet } = this.loadNewStyleSheet()

    this.style = style
    this.sheet = sheet
  }

  start() {
    let css = `div[data-slate-node="element"] { text-align: left !important; }`

    this.sheet.insertRule(css, (this.sheet.rules || this.sheet.cssRules || []).length)
  }

  stop() {
    this.resetToDefault()
  }

  loadNewStyleSheet() {
    let style = document.getElementById('ArabicLTR_plugin_sheet')

    if (!style) {
      const styleElemtn = document.createElement('style');
      styleElemtn.type = 'text/css';
      styleElemtn.id = 'ArabicLTR_plugin_sheet';
      document.head.appendChild(styleElemtn);

      style = styleElemtn
    }

    return {
      style,
      sheet: style.sheet
    }
  }

  removeStyleSheet() {
    document.getElementById('ArabicLTR_plugin_sheet').remove()
  }

  resetToDefault() {
    this.removeStyleSheet()

    let { style, sheet } = this.loadNewStyleSheet()

    this.style = style
    this.sheet = sheet
  }
};
