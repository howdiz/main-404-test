import cheerio from 'cheerio'

export default function transform(response: any) {
  const $ = cheerio.load(response.body)
    // console.log("Transform script running on '"+response.req.originalUrl+"'") // for testing

  // Those 2 scripts are added using server side transformation just for Proof of Concept purposes.
  // For production those 2 scripts should be included in original website base code.
  $('head').append(`
    <script src="/__xdn__/cache-manifest.js" defer="defer"></script>
    <script src="/main.js" defer="defer"></script>
  `)
  
  response.body = $.html()
}
