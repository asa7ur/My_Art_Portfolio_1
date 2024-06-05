require('dotenv').config()

const Airtable = require('airtable-node')
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async function () {
  try {
    const response = await airtable.list({ maxRecords: 200 })

    const images = response.records.map((images) => {
      const { id, fields } = images
      const { name, image } = fields
      const imageUrl = image && image[0] && image[0].url
      return {
        id,
        name,
        image: imageUrl
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(images, null, 2),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: 'There was an error',
    }
  }
}
