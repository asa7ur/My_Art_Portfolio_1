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
      const { name, image, store_link, ig_link } = fields
      const imageUrl = image[0].thumbnails.large.url
      return {
        id,
        name,
        image: imageUrl,
        store_link,
        ig_link
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
