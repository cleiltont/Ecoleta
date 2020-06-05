import { Request, Response} from 'express';

// Conexão com o banco de dados
import knex from '../database/connection';

class ItemsController{
	async index(request: Request, response: Response){
		// Pega todos os itens
		const items = await knex('items').select('*');
	
		// Retorna o "id", "titulo", "link" de cada item
		const serializedItems = items.map(item => {
			return {
				id: item.id,
				title: item.title,
				image_url: `http://localhost:3333/uploads/${item.image}`
			}
		});
	
		return response.json(serializedItems);
	}
}

export default ItemsController;