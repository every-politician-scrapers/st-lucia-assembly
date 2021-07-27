module.exports = (label) => {
  return {
    type: 'item',
    labels: {
      en: label,
    },
    descriptions: {
      en: 'Constituency of the House of Assembly of St Lucia',
    },
    claims: {
      P31:   { value: 'Q107663115' }, // instance of: St Lucia constituency
      P17:   { value: 'Q760'       }, // country: St Lucia
      P1001: { value: 'Q760'       }, // jurisdiction: St Lucia
    }
  }
}
