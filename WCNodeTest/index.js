const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async(url) => {
    const result = await axios.get(url)
    return result.data
}

const spider = async ()  => {
    const content = await fetchData('http://www.transparencia.pmmc.com.br/funcionalismopublico/salarios')
    const $ = cheerio.load(content)

    const funcionario = $('h1').text()
    console.log(funcionario)
}

spider()