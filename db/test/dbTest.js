const { Client } = require('pg');

async function testConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'ps-user',
    password: 'ps-pass',
    database: 'ps-db',
  });

  try {
    await client.connect();
    console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar no PostgreSQL:', err);
  } finally {
    await client.end();
  }
}

testConnection();
