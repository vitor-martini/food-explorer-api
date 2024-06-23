'use strict'

const Dish = use('App/Models/Dish')

class DishSeeder {
  async run () {
    await Dish.createMany([
      { photo: null, name: 'Feijoada', category_id: 1, price: 25.00, description: 'Tradicional cozido de feijão preto com carne de porco.' },
      { photo: null, name: 'Bife com Batata Frita', category_id: 1, price: 20.00, description: 'Bife grelhado com batatas fritas.' },
      { photo: null, name: 'Moqueca', category_id: 1, price: 30.00, description: 'Ensopado de peixe brasileiro com leite de coco e azeite de dendê.' },
      { photo: null, name: 'Pastel', category_id: 1, price: 10.00, description: 'Pastel frito recheado com carne ou queijo.' },
      { photo: null, name: 'Coxinha', category_id: 1, price: 5.00, description: 'Coxinha de frango empanada e frita.' },
      { photo: null, name: 'Pão de Queijo', category_id: 1, price: 8.00, description: 'Pãozinho de queijo tradicional de Minas Gerais.' },
      { photo: null, name: 'Esfiha', category_id: 1, price: 4.00, description: 'Esfiha aberta recheada com carne ou queijo.' },
      { photo: null, name: 'Kibe', category_id: 1, price: 6.00, description: 'Bolinho de carne moída com trigo para quibe.' },
      { photo: null, name: 'Açaí na Tigela', category_id: 2, price: 15.00, description: 'Polpa de açaí congelada com granola e banana.' },
      { photo: null, name: 'Brigadeiro', category_id: 2, price: 2.00, description: 'Doce de chocolate feito com leite condensado e cacau.' },
      { photo: null, name: 'Pudim de Leite', category_id: 2, price: 8.00, description: 'Pudim brasileiro feito com leite condensado.' },
      { photo: null, name: 'Quindim', category_id: 2, price: 6.00, description: 'Doce assado feito com açúcar, gemas de ovo e coco.' },
      { photo: null, name: 'Cocada', category_id: 2, price: 3.00, description: 'Doce tradicional de coco.' },
      { photo: null, name: 'Churros', category_id: 2, price: 5.00, description: 'Churros recheados com doce de leite.' },
      { photo: null, name: 'Torta de Limão', category_id: 2, price: 7.00, description: 'Torta doce com recheio de limão e cobertura de merengue.' },
      { photo: null, name: 'Guaraná', category_id: 3, price: 5.00, description: 'Refrigerante brasileiro de guaraná.' },
      { photo: null, name: 'Suco de Laranja', category_id: 3, price: 7.00, description: 'Suco natural de laranja.' },
      { photo: null, name: 'Café', category_id: 3, price: 4.00, description: 'Café brasileiro fresco.' },
      { photo: null, name: 'Caipirinha', category_id: 3, price: 12.00, description: 'Coquetel brasileiro feito com cachaça, limão e açúcar.' },
      { photo: null, name: 'Água de Coco', category_id: 3, price: 6.00, description: 'Água de coco fresca.' }
    ])
  }
}

module.exports = DishSeeder
