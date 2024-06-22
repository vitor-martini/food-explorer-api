'use strict'

const Ingredient = use('App/Models/Ingredient')

class IngredientSeeder {
  async run () {
    await Ingredient.createMany([
      { name: 'Tomate' },
      { name: 'Cebola' },
      { name: 'Alho' },
      { name: 'Pimentão' },
      { name: 'Cenoura' },
      { name: 'Batata' },
      { name: 'Brócolis' },
      { name: 'Espinafre' },
      { name: 'Couve' },
      { name: 'Alface' },
      { name: 'Rúcula' },
      { name: 'Pepino' },
      { name: 'Berinjela' },
      { name: 'Abobrinha' },
      { name: 'Quiabo' },
      { name: 'Mandioquinha' },
      { name: 'Aipim' },
      { name: 'Beterraba' },
      { name: 'Chuchu' },
      { name: 'Nabo' },
      { name: 'Rabanete' },
      { name: 'Salsão' },
      { name: 'Aipo' },
      { name: 'Ervilha' },
      { name: 'Milho' },
      { name: 'Feijão' },
      { name: 'Grão-de-bico' },
      { name: 'Lentilha' },
      { name: 'Arroz' },
      { name: 'Macarrão' },
      { name: 'Carne de Boi' },
      { name: 'Frango' },
      { name: 'Peixe' },
      { name: 'Camarão' },
      { name: 'Lula' },
      { name: 'Polvo' },
      { name: 'Bacon' },
      { name: 'Presunto' },
      { name: 'Queijo' },
      { name: 'Ovo' },
      { name: 'Farinha de Trigo' },
      { name: 'Farinha de Milho' },
      { name: 'Amido de Milho' },
      { name: 'Fermento' },
      { name: 'Açúcar' },
      { name: 'Sal' },
      { name: 'Pimenta' },
      { name: 'Azeite' },
      { name: 'Vinagre' }
    ])
  }
}

module.exports = IngredientSeeder
