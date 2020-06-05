import { Request, Response} from 'express';

// Conexão com o banco de dados
import knex from '../database/connection';

class PointsController{
	async index(request: Request, response: Response){
		// Querys: server para filtrar
		const { city, uf, items } = request.query;

		// Vai pegar cada item que for filtrado e retorna como inteiro
		const parsedItems = String(items)
		.split(',')
		.map(item => Number(item.trim()));

		// Comandos SQL
		const points = await knex('points')
			.join('point_items', 'points.id', '=', 'point_items.point_id')
			.whereIn('point_items.item_id', parsedItems)
			.where('city', String(city))
			.where('uf', String(uf))
			.distinct()
			.select('points.*');

		return response.json(points);
	}

	async show(request: Request, response: Response){
		const { id } = request.params;

		// Vai retorna o id que foi solicitado
		const point = await knex('points').where('id', id).first();

		// Se ponto não existir, retorna a mensagem de erro
		if(!point){
			return response.status(400).json({ message: 'Point not found.' });
		}

		// Retorna apenas o titulo
		const items = await knex('items')
			.join('point_items', 'items.id', '=', 'point_items.item_id')
			.where('point_items.point_id', id)
			.select('items.title');

		return response.json({ point, items });
	}

	async create(request: Request, response: Response){
		const {
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			city,
			uf,
			items
		} = request.body; // Pega o JSON requisitado
	
		// A proxima etapda só ira prosseguir se, a antecessor der certo
		const trx = await knex.transaction();

		const point = {
			image: 'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
			name,
			email,
			whatsapp,
			latitude,
			longitude,
			city,
			uf,
		};
	
		// Inseri na tabela pontos o JSON requisitado
		const insertIds = await trx('points').insert(point);
	
		const point_id = insertIds[0];
	
		const pointItems = items.map((item_id: number) => {
			return{
				item_id,
				point_id
			}
		});
	
		await trx('point_items').insert(pointItems);

		// Finaliza a transição
		await trx.commit();
	
		return response.json({
			id: point_id,
			...point
		});
	}
}

export default PointsController;