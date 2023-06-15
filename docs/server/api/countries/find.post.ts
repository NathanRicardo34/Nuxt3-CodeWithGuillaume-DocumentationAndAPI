import { countries } from '@doubco/countries'

export default eventHandler(async (event) => {
    const body = await readBody(event)
    const { country } = body
    const countriesArr = Object.values(countries)
    return {
        countries: countriesArr.filter(obj => obj.name === country)
    }
})
