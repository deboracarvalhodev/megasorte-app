export function formatBetType(type) {

  switch(type) {

    case 'common':
      return 'Comum';

    case 'surprise':
      return 'Surpresinha';

    case 'stubborn':
      return 'Teimosinha';

    default:
      return '';
  }
}