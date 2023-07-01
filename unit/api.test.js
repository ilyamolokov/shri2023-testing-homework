require('dotenv').config()
const axios = require('axios');

const { BUG_ID = '0', URL } = process.env;

const urlProducts = `${URL}api/products?bug_id=${BUG_ID}`;
const urlItem = `${URL}api/products/7?bug_id=${BUG_ID}`;

describe('Тестовые GET запросы', () => {
    it("Присутствуют ли у продукта все поля", async () => {
        const response = await axios.get(urlProducts);
            expect(response.data[0]).toHaveProperty('name');

    });

    it("Приходит актуальные даные по товару", async () => {
        const response = await axios.get(urlItem);

        expect(response.data.id).toBe(7);
        
    });


});