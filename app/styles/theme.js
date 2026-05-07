// Brand colors
export const colors = {
  primary: '#06357a',
  primarySoft: '#5a7299',
  primaryTint: '#e8eef7',
  primaryTintBorder: '#c8d4e8',
  textBody: '#34495e',
  rowAlt: '#f8f9fa',
}

// Table header styles (by role)
export const tableHeaders = {
  summary: `background: ${colors.primary}; color: white; padding: 15px; text-align: left; font-weight: bold;`,
  aggregation: `background: ${colors.primaryTint}; color: ${colors.primary}; padding: 15px; text-align: left; font-weight: bold; border-bottom: 2px solid ${colors.primaryTintBorder};`,
  comparison: `background: ${colors.primarySoft}; color: white; padding: 15px; text-align: left; font-weight: bold;`,
}