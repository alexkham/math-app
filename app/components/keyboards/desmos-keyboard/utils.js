export const handleKeyAction = (action, value, onInput, onAction) => {
    switch (action) {
      case 'insert':
      case 'function':
        onInput?.(value || '');
        break;
      case 'backspace':
        onAction?.('backspace');
        break;
      case 'navigate':
        onAction?.('navigate', value);
        break;
      case 'calculate':
        onAction?.('calculate');
        break;
      default:
        onAction?.(action, value);
    }
  };