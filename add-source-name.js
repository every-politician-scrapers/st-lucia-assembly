// wb ar add-source-name.js Q97131330-4C4A7FD7-C10F-4D38-B5FD-03F6EADF409A "Vassilios Demetriades" "Deputy Minister of Shipping"

module.exports = (guid, name) => ({
    guid,
    snaks: {
      P854: 'http://www.govt.lc/house-of-assembly',
      P1476: {
        text: 'Web Portal of the Government of Saint Lucia — House of Assembly',
        language: 'en',
      },
      P813: new Date().toISOString().split('T')[0],
      P407: 'Q1860', // language: English
      P1810: name, // named as (Person)
    }
})
