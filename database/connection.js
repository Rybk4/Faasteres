const { MongoClient, ServerApiVersion } = require('mongodb');

async function connectToMongoBD() {
  try {
    const uri = 'mongodb+srv://admin:admin@register.l1n8nkv.mongodb.net/Site';
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    return uri;
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToMongoBD;
